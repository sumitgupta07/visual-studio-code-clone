import React from 'react';
import PropTypes from 'prop-types';
import { folders } from '../utils/constants';

const FileExplorer = ({ onSelectFile }) => {
  return (
    <div className="navbar">
      <h3>File Explorer</h3>
      <i className="fas fa-folder-open">
        {'  '}
        <span>{folders[0].name}</span>
        <ul>
          {folders[0].files.map(file => (
            <li id={file.id} key={file.id} onClick={() => onSelectFile(file)}>
              <i className="far fa-file"> {file.fileName}</i>
            </li>
          ))}
        </ul>
      </i>
    </div>
  );
};

FileExplorer.propTypes = {
  onSelectFile: PropTypes.func.isRequired
};
export default FileExplorer;
