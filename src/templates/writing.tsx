import { graphql } from 'gatsby';
import React from 'react';

import { Writing as strings } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { Work, WorksQuery } from '../types';
import * as style from './writing.style.ts';

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/works/" } }) {
      ...works
    }
  }
`;

const transformData = ({ data }: WorksQuery) => {
  const workData = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
    text: node.html,
  }));

  const emptyCleanData = {
    writing: [] as Work[],
    poetry: [] as Work[],
    tac: [] as Work[],
    other: [] as Work[],
  };

  const partitionedData = workData.reduce((arr, _work) => {
    let link = _work.link || '';
    if (_work.isSubpage) {
      const slug = _work.title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/(-+)/g, '-');

      link = `/work/${slug}`;
    }
    const work = { ..._work, link };

    if (work.category === 'Writing') arr.writing.push(work);
    else if (work.category === 'Poetry') arr.poetry.push(work);
    else if (work.category === 'Theory and Criticism') arr.tac.push(work);
    else arr.other.push(work);

    return arr;
  }, emptyCleanData);

  return partitionedData;
};

const Writing: React.FC<WorksQuery> = data => {
  const { writing, poetry, tac, other } = transformData(data);

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      {!!writing.length && <WorksSection title="Writing" works={writing} />}
      {!!poetry.length && <WorksSection title="Poetry" works={poetry} />}
      {!!tac.length && <WorksSection title="Theory and Criticism" works={tac} />}
      {!!other.length && <WorksSection title="Other" works={other} />}
    </Layout>
  );
};

const WorksSection: React.FC<{ title: string; works: Work[] }> = ({ title, works }) => (
  <section>
    <h2>{title}</h2>
    <ul className={style.list}>
      {works.map((work, i) => (
        <li key={i}>
          <article className={style.item}>
            {!!work.link ? (
              <Link to={work.link} className={style.link}>
                {work.title}
              </Link>
            ) : (
              <p className={style.link}>{work.title}</p>
            )}
            <p className={style.meta}>{work.metainfo}</p>
            {!work.isSubpage && <div>{work.text}</div>}
          </article>
        </li>
      ))}
    </ul>
  </section>
);

export default Writing;
