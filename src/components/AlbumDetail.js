import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {

  const {
    title,
    artist,
    thumbnail_image,
    image
  } = album;
  const {
    headerContentStlye,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

return (
  <Card>
    <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
          style={thumbnailStyle}
          source={ {uri: thumbnail_image }} />
      </View>
      <View style={headerContentStlye} >
        <Text style={headerTextStyle}>{ title }</Text>
        <Text>{ artist }</Text>
      </View>
    </CardSection>
    <CardSection>
        <Image source = {{ uri : image }} style={imageStyle} />
    </CardSection>
  </Card>
);
};

const styles = {

  headerContentStlye : {
    justifyContent : 'space-around',
    flexDirection : 'column'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle : {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle : {

    justifyContent : 'center',
    alignItems : 'center',
    marginLeft: 10,
    marginRight: 10

  },
  imageStyle : {
    height : 300,
    flex : 1,
    width : null
  }

}

export default AlbumDetail;