import React from 'react';

export interface FileTreeItem {
  name: string;
  type: "file" | "folder";
  url: string;
}

export interface FileTreeItemFile extends FileTreeItem {
  path: string;
}

export interface FileTreeProps {
  files: FileTreeItem[];
  onFileClick: (filePath: string) => void;
}

export const FileTree: React.FC<FileTreeProps> = ({ files }:FileTreeProps) => {
  return (
    <div>File tree</div>
  );
}
