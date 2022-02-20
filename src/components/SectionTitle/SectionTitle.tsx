import React from 'react';

export interface SectionTitleProps {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }: SectionTitleProps) => (
  <>
    <h3 className="mb-2 text-2xl capitalize text-primary">{title}</h3>
    <hr className="mb-4" />
  </>
)
