// Index.ios.js - a place for iOS

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

// create a Component

const App = () => {
return (
  <View>
    <Header headerText="Album" />
    <AlbumList />
  </View>
);
};

// render it to a screen
AppRegistry.registerComponent('albums', () => App);
