import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../utils/Icon';
import { labels, classNames } from '../utils/constants';

const NavBar = ({ onSelectNav }) => {
  const handleSelectIcon = item => {
    onSelectNav(item);
  };

  return (
    <div className="sidebar">
      <Icon
        id="FileExplorer"
        label={labels.FileExplorer}
        iconClass={classNames.explorerClass}
        onSelectIcon={handleSelectIcon}
      />
      <Icon
        id="Search"
        label={labels.Search}
        iconClass={classNames.searchClass}
        onSelectIcon={handleSelectIcon}
      />
      <Icon
        id="SourceControl"
        label={labels.SourceControl}
        iconClass={classNames.sourcecontrolClass}
        onSelectIcon={handleSelectIcon}
      />
      <Icon
        id="Debug"
        label={labels.Debug}
        iconClass={classNames.debugClass}
        onSelectIcon={handleSelectIcon}
      />
      <Icon
        id="Extensions"
        label={labels.Extensions}
        iconClass={classNames.extensionsClass}
        onSelectIcon={handleSelectIcon}
      />
    </div>
  );
};
NavBar.propTypes = {
  onSelectNav: PropTypes.func.isRequired
};
export default NavBar;
