import { css } from 'linaria';
import React from 'react';

import { WORK_SUBPATH } from '../../data/config';
import { PageMetaData, WorkNode } from '../types';
import Layout from './Layout';
import { MaybeLink } from './Link';

const itemStyle = css`
  font: var(--normal-font);

  margin: calc(2 * var(--small-margin)) 0;

  &:first-child {
    margin: 0 0 calc(2 * var(--small-margin));
  }
`;

const headerStyle = css`
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

interface Props {
  workNodes: WorkNode[];
  strings: PageMetaData;
}

const WritingSubpage: React.FC<Props> = ({ workNodes, strings }) => {
  const works = workNodes.map(({ node }) => {
    const work = { ...node.frontmatter, text: node.html };
    if (!work.isSubpage) return work;

    const slug = work.title
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[^\w-]/g, '')
      .replace(/(-+)/g, '-');
    return { ...work, link: `${WORK_SUBPATH}/${slug}` };
  });

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <h1 className={headerStyle}>{strings.title}</h1>
      <ul className={listStyle}>
        {works.map((work, i) => (
          <li key={i}>
            <article className={itemStyle}>
              {work.title && <MaybeLink to={work.link} className={linkStyle} title={work.title} />}
              {work.metainfo && <p className={metaStyle}>{work.metainfo}</p>}
              {!work.isSubpage && (
                <div dangerouslySetInnerHTML={{ __html: work.text }} className={contentStyle} />
              )}
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default WritingSubpage;
