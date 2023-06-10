/** @jsx jsx */

import { graphql } from 'gatsby';
import React from 'react';

import { WORK_SUBPATH } from '../../data/config';
import { Writing as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { MaybeLink } from '../components/Link';
import { Node, WorkFrontmatter, WritingQuery } from '../types';
import { css, jsx } from '@emotion/react';
import HTMLHeader from '../components/HTMLHeader';

export const query = graphql`
  query {
    poetry: allMarkdownRemark(filter: { frontmatter: { category: { eq: "Poetry" } } }) {
      ...works
    }
    fiction: allMarkdownRemark(filter: { frontmatter: { category: { eq: "Fiction" } } }) {
      ...works
    }
    theory: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Theory and Criticism" } } }
    ) {
      ...works
    }
    other: allMarkdownRemark(filter: { frontmatter: { category: { eq: "Other" } } }) {
      ...works
    }
  }
`;

const itemStyle = css`
  font: var(--normal-font);

  margin: calc(2 * var(--small-margin)) 0;

  &:first-child {
    margin: 0 0 calc(2 * var(--small-margin));
  }
`;

const headerStyle = css`
  font: var(--normal-font);
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
`;

const subHeaderStyle = css`
  font: var(--normal-font);
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
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
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const metaStyle = css`
  color: var(--grey);
  font: var(--meta-font);
  margin: 0.5rem 0 0;
`;

const contentStyle = css`
  color: var(--black);
  font: var(--normal-font);
  font-size: 1rem;
`;

const mapWorks = (works: Node<WorkFrontmatter>[]) =>
  works.map(({ node }) => {
    const work = { ...node.frontmatter, text: node.html };
    if (!work.isSubpage) return work;

    const slug = work.title
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[^\w-]/g, '')
      .replace(/(-+)/g, '-');
    return { ...work, link: `${WORK_SUBPATH}/${slug}` };
  });

interface SectionProps {
  works: (WorkFrontmatter & { text: string })[];
  title: string;
}

const Section: React.FC<SectionProps> = ({ works, title }) => (
  <React.Fragment>
    <h2 css={subHeaderStyle}>{title}</h2>
    <ul css={listStyle}>
      {works.map((work, i) => (
        <li key={i}>
          <article css={itemStyle}>
            {work.title && <MaybeLink to={work.link} eCss={linkStyle} title={work.title} />}
            {work.metainfo && <p css={metaStyle}>{work.metainfo}</p>}
            {!work.isSubpage && (
              <div dangerouslySetInnerHTML={{ __html: work.text }} css={contentStyle} />
            )}
          </article>
        </li>
      ))}
    </ul>
  </React.Fragment>
);

const Writing: React.FC<WritingQuery> = ({ data }) => {
  const poetry = mapWorks(data.poetry.edges);
  const fiction = mapWorks(data.fiction.edges);
  const theory = mapWorks(data.theory.edges);
  const other = mapWorks(data.other.edges);

  return (
    <Layout>
      <h1 css={headerStyle}>{strings.title}</h1>
      {!!poetry.length && <Section title={'Poetry'} works={poetry} />}
      {!!fiction.length && <Section title={'Fiction'} works={fiction} />}
      {!!theory.length && <Section title={'Theory and Criticism'} works={theory} />}
      {!!other.length && <Section title={'Other'} works={other} />}
    </Layout>
  );
};

export const Head = () => (
  <HTMLHeader title={strings.pageTitle} description={strings.description} slug={strings.slug} />
);

export default Writing;
