import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Writing as strings } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { MEDIA_MOBILE } from '../styles';
import { Work, WorksQuery } from '../types';

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/works/" } }) {
      ...works
    }
  }
`;

const sectionStyle = css`
  font: var(--normal-font);
`;

const itemStyle = css`
  margin: calc(2 * var(--small-margin)) 0;

  ${MEDIA_MOBILE} {
    &:first-child {
      margin: 0 0 calc(2 * var(--small-margin));
    }
  }
`;

const listStyle = css`
  border: 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const linkStyle = css`
  color: var(--black);
  font: var(--normal-font);
`;

const metaStyle = css`
  color: var(--grey);
  font: var(--meta-font);
  margin: 0.5rem 0 0;
`;

const contentStyle = css`
  color: var(--black);
  font: var(--normal-font);
  font-size: 1.25rem;
`;

const transformData = ({ data }: WorksQuery) => {
  const workData = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
    text: node.html,
  }));

  const emptyCleanData = {
    fiction: [] as Work[],
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

    if (work.category === 'Fiction') arr.fiction.push(work);
    else if (work.category === 'Poetry') arr.poetry.push(work);
    else if (work.category === 'Theory and Criticism') arr.tac.push(work);
    else arr.other.push(work);

    return arr;
  }, emptyCleanData);

  return partitionedData;
};

const Writing: React.FC<WorksQuery> = data => {
  const { fiction, poetry, tac, other } = transformData(data);

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      {!!poetry.length && <WorksSection title="Poetry" works={poetry} />}
      {!!fiction.length && <WorksSection title="Fiction" works={fiction} />}
      {!!tac.length && <WorksSection title="Theory and Criticism" works={tac} />}
      {!!other.length && <WorksSection title="Other" works={other} />}
    </Layout>
  );
};

const WorksSection: React.FC<{ title: string; works: Work[] }> = ({ title, works }) => (
  <section className={sectionStyle}>
    <h2>{title}</h2>
    <ul className={listStyle}>
      {works.map((work, i) => (
        <li key={i}>
          <article className={itemStyle}>
            {!!work.link ? (
              <Link to={work.link} className={linkStyle}>
                {work.title}
              </Link>
            ) : (
              <p className={linkStyle}>{work.title}</p>
            )}
            {work.metainfo && <p className={metaStyle}>{work.metainfo}</p>}
            {!work.isSubpage && (
              <div dangerouslySetInnerHTML={{ __html: work.text }} className={contentStyle} />
            )}
          </article>
        </li>
      ))}
    </ul>
  </section>
);

export default Writing;
