
// Import-ovati biblioteke za pravljenje komponenti
import React from 'react';
import { Text, View } from 'react-native';

// Kreairati komponentnu
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={ textStyle }>{ props.headerText }</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
};

// Eksportovati komponentu da bi bila dostupna ostalim delovima aplikacije
export default Header;

