import { css } from 'linaria';
import React from 'react';

import { List as ListType } from '../types';
import Link from './Link';

const itemStyle = css`
  margin: calc(2 * var(--small-margin)) 0;
`;

const linkStyle = css`
  font: var(--normal-font);
  color: var(--black);
`;

const metaStyle = css`
  font: var(--meta-font);
  color: var(--grey);
`;

const List: React.FC<{ list: ListType[] }> = ({ list }) => (
  <ul>
    {list.map((item, i) => (
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
);

export default List;
