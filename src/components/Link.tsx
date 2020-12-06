import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

interface Props {
  to: string;
  className?: string;
}

const Link: React.FC<Props> = ({ to, className, children }) =>
  /^http/.test(to) ? (
    <a className={className} href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <GatsbyLink className={className} to={to}>
      {children}
    </GatsbyLink>
  );

interface MaybeLinkProps {
  to?: string;
  title: string;
  className: string;
}

export const MaybeLink: React.FC<MaybeLinkProps> = ({ to, title, className }) =>
  !!to ? <Link {...{ to, className }}>{title}</Link> : <p className={className}>{title}</p>;

export default Link;
