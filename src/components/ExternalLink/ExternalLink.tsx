import React from 'react';

export interface ExternalLinkProps {
  href: string;
  id?: string;
  children: any
}
export const ExternalLink = ({
  id,
  href,
  children
}: ExternalLinkProps) => (
  <a id={id} href={href} className="text-xs font-semibold text-highlight" target="_blank" rel="noreferrer">
    {children}
  </a>
);