import React from 'react';

import NavigationItems from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={NavigationItems.NavigationItems}>
    <NavigationItem link="/About">About</NavigationItem>
    <NavigationItem link="/Posts">Posts</NavigationItem>
    <NavigationItem link="/Subscribe">Subscribe</NavigationItem>
  </ul>
);

export default navigationItems;
