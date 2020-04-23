import React from 'react';

const FileContent = ({ currentFile }) => (
  <div id={currentFile.id}>{currentFile.content}</div>
);

export default FileContent;
