// Index.ios.js - a place for iOS

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'

// create a Component

const App = () => {
return (
  <Header />
);
};

// render it to a screen
AppRegistry.registerComponent('albums', () => App);
