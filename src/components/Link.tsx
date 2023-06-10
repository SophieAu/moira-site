/** @jsx jsx */

import { SerializedStyles, jsx } from '@emotion/react';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

interface Props {
  to: string;
  eCss?: SerializedStyles;
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({ to, eCss, children }) =>
  /^http/.test(to) ? (
    <a css={eCss} href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <GatsbyLink css={eCss} to={to}>
      {children}
    </GatsbyLink>
  );

interface MaybeLinkProps {
  to?: string;
  title: string;
  eCss: SerializedStyles;
}

export const MaybeLink: React.FC<MaybeLinkProps> = ({ to, title, eCss }) =>
  !!to ? <Link {...{ to, css: eCss }}>{title}</Link> : <p css={eCss}>{title}</p>;

export default Link;
