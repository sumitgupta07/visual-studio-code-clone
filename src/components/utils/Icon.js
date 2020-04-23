import React from 'react';
import './Icon.css';

const Icon = ({ label, onSelectIcon, iconClass }) => {
  return (
    <button onClick={() => onSelectIcon(label)}>
      <div className="tooltip">
        <div className="icon">{<i className={iconClass}></i>}</div>
        <div className="tooltiptext">
          <span>{label}</span>
        </div>
      </div>
    </button>
  );
};

export default Icon;
