---
to: src/components/<%= h.changeCase.pascalCase(name)  %>/<%= h.changeCase.pascalCase(name)  %>.tsx
---
import React from 'react';

export interface <%= h.changeCase.pascalCase(name) %>Props {}

export const <%= h.changeCase.pascalCase(name) %>: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = ({ children }:<%= h.changeCase.pascalCase(name) %>Props) => {
  return (
    <div>{ children }</div>
  );
}
