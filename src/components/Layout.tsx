/** @jsx jsx */

import React from 'react';
import { css, Global, jsx, SerializedStyles } from '@emotion/react';

import bgPattern from '../../data/images/bg_pattern.png';
import { globals, MEDIA_DESKTOP, MEDIA_MOBILE, reset, SIDEBAR_WIDTH } from '../styles';
import Sidebar from './Sidebar';

const body = css`
  display: grid;
  width: min(calc(100vw - 2 * var(--padding)), 1600px);
  padding: 0 0 0 var(--padding);
  grid-gap: var(--padding);

  ${MEDIA_DESKTOP} {
    --padding: var(--large-margin);
    --right-column: calc(100vw - 2 * var(--padding) - ${SIDEBAR_WIDTH}px);
    height: 100vh;
    grid-template-columns: ${SIDEBAR_WIDTH}px var(--right-column);
  }

  ${MEDIA_MOBILE} {
    --padding: var(--small-margin);
    grid-template-columns: 1fr;
    min-height: calc(100vh - var(--padding));
    padding-bottom: var(--padding);
    grid-template-rows: auto 1fr;
  }
`;

const root = css`
  ${MEDIA_DESKTOP} {
    padding: var(--padding) max(calc(var(--padding) / 2), calc(var(--right-column) - 45rem)) 0 0;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
`;

const wrapper = css`
  background: url(${bgPattern});
`;

interface Props {
  children?: React.ReactNode;
  eCss?: SerializedStyles;
}

const Layout: React.FC<Props> = ({ children, eCss }) => (
  <React.StrictMode>
    <Global styles={globals} />
    <Global styles={reset} />
    <div css={wrapper}>
      <div css={body}>
        <Sidebar />
        <main css={[root, eCss]}>{children}</main>
      </div>
    </div>
  </React.StrictMode>
);

export default Layout;
