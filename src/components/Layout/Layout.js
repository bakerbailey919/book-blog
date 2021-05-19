import React from 'react';
import Layout from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <div>
    <Toolbar />
    <main className={Layout.Content}>{props.children}</main>
  </div>
);

export default layout;
