import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const BookDetail = ({ book }) => {
  const { thumbnail, title, author, image, link } = book;

  const {
    headerTextContainerStyle,
    thumbnailStyle,
    thumbnailWrapperStyle,
    titleStyle,
    imageStyle,
 } = styles;

  return (
    <Card>
      <CardSection>
        <View style={ thumbnailWrapperStyle }>
          <Image
            style={ thumbnailStyle }
            source={{ uri: thumbnail }}
          />
        </View>
        <View style={ headerTextContainerStyle }>
          <Text style={ titleStyle }>{ title }</Text>
          <Text>{ author }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={ imageStyle }
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={ () => Linking.openURL(link) } text={ 'Buy now!' }/>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerTextContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  titleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailWrapperStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1
  }
};

export default BookDetail;