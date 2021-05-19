import React from 'react';

import ToolbarStyles from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
  return (
    <header className={ToolbarStyles.Toolbar}>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
