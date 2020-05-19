import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ props.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#62BD69',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#db0000',
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
});

export default Header;
