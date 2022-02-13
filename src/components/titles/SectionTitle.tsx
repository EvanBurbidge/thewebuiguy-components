import React from 'react';



const SectionTitle = ({ title }: { title: string }) => (
  <>
    <h3 className="mb-2 text-2xl capitalize text-primary">{title}</h3>
    <hr className="mb-4" />
  </>
);

export default SectionTitle;