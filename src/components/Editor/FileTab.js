import React from 'react';
import PropTypes from 'prop-types';

const FileTab = ({ onClick, file, activeFile }) => {
  const handleClick = file => {
    onClick(file);
  };

  let className = 'file-list-item';

  if (activeFile.id === file.id) {
    className += ' file-active';
  }
  return (
    <li id={file.id} className={className} onClick={() => handleClick(file)}>
      {file.fileName}
    </li>
  );
};
File.propTypes = {
  activeFile: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};
export default FileTab;
