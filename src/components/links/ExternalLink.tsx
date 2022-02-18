import React from 'react';

interface ExternalLinkProps {
  href: string;
  id?: string;
  children: any
}

const ExternalLink = ({
  id,
  href,
  children
}: ExternalLinkProps) => (
  <a id={id} href={href} className="text-highlight text-xs font-semibold" target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default ExternalLink;