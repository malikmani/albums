// import libraries

import React from 'react';
import { Text, View } from 'react-native';

// create a Component

const Header = (props) => {

  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle} >
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20
  }
}

// make the component available to other components
export default Header;
