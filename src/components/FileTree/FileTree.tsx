import React from 'react';
import { FolderIcon } from '@heroicons/react/solid'
export interface FileTreeItem {
  url: string;
  name: string;
  type: "file" | "folder";
}

export interface FileTreeItemFile extends FileTreeItem {
  path: string;
}
export interface FileTreeItemFolder extends FileTreeItem {
  files: FileTreeItem[]
}

export interface FileTreeProps {
  files: FileTreeItem[];
  onFileClick: (filePath: string) => void;
}

export const FileTree: React.FC<FileTreeProps> = ({ files, onFileClick }: FileTreeProps) => {
  return (
    <ul>
      {
        files.map((file: FileTreeItem | FileTreeItemFolder) => {
          if (file.type === "folder" || 'file' in file) {
            return (
              <div>
                <FolderIcon />
                {file.name}
                <FileTree files={file.files} onFileClick={onFileClick} />
              </div>
            )
          }
          return (
            <div>
              <FolderIcon />
              {file.name}
              <FileTree files={file.files} onFileClick={onFileClick} />
            </div>
          )
        })}
    </ul>)
}
