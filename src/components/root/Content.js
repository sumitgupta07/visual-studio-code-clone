import React, { useState } from 'react';
import NavBar from '../pane/NavBar';
import SelectPane from '../pane/SelectPane';
import EditorPane from '../pane/EditorPane';
import { folders } from '../utils/constants';

const Content = () => {
  //Initialize selected Nav Item
  const [selectedNav, setSelectedNav] = useState('File Explorer');

  //Initialize selected file with first file in first folder
  const [selectedFile, setSelectedFile] = useState(folders[0].files[0]);

  const handleSelectNav = selectedItem => {
    setSelectedNav(selectedItem);
  };

  const handleSelectFile = file => {
    setSelectedFile(file);
  };

  return (
    <div className="content">
      <NavBar onSelectNav={handleSelectNav} />
      <SelectPane
        currentSelection={selectedNav}
        onSelectFile={handleSelectFile}
      />
      <EditorPane activeFile={selectedFile} onSelectFile={handleSelectFile} />
    </div>
  );
};

export default Content;
