import { css } from 'linaria';

import { MEDIA_MOBILE } from '../styles';

export const item = css`
  margin: calc(2 * var(--small-margin)) 0;

  ${MEDIA_MOBILE} {
    &:first-child {
      margin: 0 0 calc(2 * var(--small-margin));
    }
  }
`;

export const list = css`
  border: 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const link = css`
  font: var(--normal-font);
  color: var(--black);
`;

export const meta = css`
  margin: 0.125rem 0 0;
  font: var(--meta-font);
  color: var(--grey);
`;
