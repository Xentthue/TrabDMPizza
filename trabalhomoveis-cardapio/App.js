import React, { Component } from 'react';
import Header from './components/Header';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
export default class App extends Component {
  render() {
       const statusbar = (Platform.OS == 'ios') ? <View style={styles.Statusbar}></View> : <View></View>;
    return (
      <View>
      {statusbar}
      <Header title="Cardápio" />
       <ScrollView style={styles.ScrollView}>
        <TouchableOpacity style={styles.PizzaX} activeOpacity={0.5}>
          <Image
            source={{
              uri:'https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86',
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.TextStyle}> Pizza X </Text>
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> R$ 33.90</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.PizzaY} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://www.larosas.com/images/menu/slider_pizza.png',
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.TextStyle}> Pizza Y</Text>
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> R$ 36.90</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PizzaZ} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://cms.barrospizza.com/wp-content/uploads/2018/06/Homepage_Header_Barros-Special.png',
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.TextStyle}> Pizza Z</Text>
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> R$ 45.90</Text>
        </TouchableOpacity>
                <TouchableOpacity style={styles.BebidaA} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://www.coca-cola.com/content/dam/brands/tw/coca-cola/image/coke-logo.png',
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.TextStyle}> Bebida A</Text>
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> R$ 36.90</Text>
        </TouchableOpacity>
                <TouchableOpacity style={styles.BebidaB} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://www.coca-colacompany.com/content/dam/journey/us/en/brands/diet-coke/diet-coke-logo.png',
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.TextStyle}> Bebida B</Text>
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> R$ 36.90</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.BebidaC} activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://www.dsmenu.com/user-folder/images/0/137/1436227481-137.png',
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.TextStyle}> Pizza Z</Text>
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> R$ 36.90</Text>
        </TouchableOpacity>
</ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  PizzaY: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#62BD69',
    borderWidth: 2.5,
    borderColor: '#db0000',
    height: 100,
    borderRadius: 2,
    margin: 2,
  },

  PizzaX: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#db0000',
    borderWidth: 2.5,
    borderColor: '#62BD69',
    height: 100,
    borderRadius: 2,
    margin: 2,
  },
   
  PizzaZ: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#db0000',
    borderWidth: 2.5,
    borderColor: '#62BD69',
    height: 100,
    borderRadius: 2,
    margin: 2,
  },

  BebidaA: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#62BD69',
    borderWidth: 2.5,
    borderColor: '#db0000',
    height: 100,
    borderRadius: 2,
    margin: 2,
  },
  BebidaB: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#db0000',
    borderWidth: 2.5,
    borderColor: '#62BD69',
    height: 100,
    borderRadius: 2,
    margin: 2,
  },
    BebidaC: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#62BD69',
    borderWidth: 2.5,
    borderColor: '#db0000',
    height: 100,
    borderRadius: 2,
    margin: 2,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 100,
    width: 125,
    resizeMode: 'center',
  },

  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 10,
    fontSize: 18,
  },

  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 20,
  },    
    
  ScrollView: {
    backgroundColor: 'Brown',
  },

  Statusbar: {
    backgroundColor: '#db0000',
    height: 20
  },

});