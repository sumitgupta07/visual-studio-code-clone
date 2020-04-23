import React from 'react';
import PropTypes from 'prop-types';
import { labels } from '../utils/constants';
import FileExplorer from '../menu/FileExplorer';
import Search from '../menu/Search';
import SourceControl from '../menu/SourceControl';
import Debug from '../menu/Debug';
import Extensions from '../menu/Extensions';

const SelectPane = ({ currentSelection, onSelectFile }) => {
  switch (currentSelection) {
    case labels.FileExplorer:
      return <FileExplorer onSelectFile={onSelectFile} />;
    case labels.Search:
      return <Search />;
    case labels.SourceControl:
      return <SourceControl />;
    case labels.Debug:
      return <Debug />;
    case labels.Extensions:
      return <Extensions />;
    default:
      return <FileExplorer />;
  }
};

SelectPane.propTypes = {
  currentSelection: PropTypes.string.isRequired,
  onSelectFile: PropTypes.func.isRequired
};

export default SelectPane;
