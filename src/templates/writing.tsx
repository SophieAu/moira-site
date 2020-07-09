import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Writing as strings } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { MEDIA_MOBILE } from '../styles';
import { WritingQuery } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...writing
    }
  }
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
  font: var(--normal-font);
  color: var(--black);
`;

const metaStyle = css`
  margin: 0.125rem 0 0;
  font: var(--meta-font);
  color: var(--grey);
`;

const Writing: React.FC<WritingQuery> = ({ data }) => {
  const { writing } = data.markdownRemark.frontmatter;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <ul className={listStyle}>
        {writing.map((item, i) => (
          <li key={i}>
            <article className={itemStyle}>
              <Link to={item.link} className={linkStyle}>
                {item.title}
              </Link>
              <p className={metaStyle}>{item.info}</p>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

const Categories = {
  Writing: 'Writing',
  Poetry: 'Poetry',
  TaC: 'TaC',
};

const partitionWorks = data => {
  const writing = data.filter(({ category }) => category === Categories.Writing);
  const poetry = data.filter(({ category }) => category === Categories.Poetry);
  const tac = data.filter(({ category }) => category === Categories.TaC);
  const other = data.filter(
    ({ category }) =>
      category !== Categories.Writing &&
      category !== Categories.Poetry &&
      category !== Categories.TaC
  );

  return { writing, poetry, tac, other };
};

const WritingNew: React.FC<WritingQuery> = ({ data }) => {
  const { writing, poetry, tac, other } = partitionWorks(data);

  return (
    <>
      {writing.length && <WorksSection title="Writing" works={writing} />}
      {poetry.length && <WorksSection title="Poetr" works={poetry} />}
      {tac.length && <WorksSection title="Theory and Criticism" works={tac} />}
      {other.length && <WorksSection title="Other" works={other} />}
    </>
  );
};

const WorksSection: React.FC<> = ({ title, works }) => (
  <section>
    <h2>{title}</h2>
    {works.map(el => (
      <WritingElem {...el} />
    ))}
  </section>
);

const WritingListElem = () => {
  const { title, link, isSubpage, metainfo, text } = props;

  return (
    <>
      {(link || isSubpage) && <a href={link || buildSlug(title)}>{title}</a>}
      {!link && !isSubpage && <p>{title}</p>}
      <p>{metainfo}</p>
      {!isSubpage && <article>{text}</article>}
    </>
  );
};
export default Writing;
