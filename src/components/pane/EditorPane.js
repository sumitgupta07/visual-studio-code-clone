import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { folders } from '../utils/constants';
import FileTab from '../Editor/FileTab';
import FileContent from '../Editor/FileContent';

const EditorPane = ({ activeFile, onSelectFile }) => {
  const [currentFile, setCurrentFile] = useState({});

  //This observes changes in state of File Explorer component
  useEffect(() => {
    setCurrentFile(activeFile);
  }, [activeFile]);

  //This sets current selected file in Editor Pane & File Explorer
  const onClickFileItem = file => {
    setCurrentFile(file);
    onSelectFile(file);
  };
  return (
    <div className="editorpane">
      <h3>Editor Pane</h3>
      <div className="files">
        <ul className="file-list">
          {folders[0].files.map(file => (
            <FileTab
              activeFile={currentFile}
              key={file.id}
              file={file}
              onClick={onClickFileItem}
            />
          ))}
        </ul>
      </div>
      {folders[0].files.map(file => {
        if (file.id === currentFile.id)
          return <FileContent key={currentFile.id} currentFile={currentFile} />;
        else return null;
      })}
    </div>
  );
};

EditorPane.propTypes = {
  activeFile: PropTypes.object.isRequired
};

export default EditorPane;
