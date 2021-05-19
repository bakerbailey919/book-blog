import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItem from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={NavigationItem.NavigationItem}>
    <NavLink to={props.link}>{props.children}</NavLink>
  </li>
);

export default navigationItem;
