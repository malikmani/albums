// Index.android.js - a place for android

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a Component

const App = () => {
return (
  <Text> Some Text </Text>
);
};

// render it to a screen
AppRegistry.registerComponent('albums', () => App);
