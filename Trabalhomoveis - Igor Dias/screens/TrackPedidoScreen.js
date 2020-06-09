import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Styles } from '../components/Styles';

export default function TrackPedidoScreen() {
  const mapa = require('../assets/images/mapa.jpg')
  return (
    <View style={Styles.container}>
      <View style={Styles.leftRightMargins}>
        <Text style={{fontSize: 15, marginTop: 20, fontWeight: 'bold', color: 'white'}}>Obrigado Pelo seu pedido!</Text>
        <Text style={{fontSize: 15, color: 'white'}}>
          Seu pedido chegará em 25 minutos.
        </Text>
        <Text style={{marginTop: 40, fontWeight: 'bold', color: 'white'}}>Visualize seu pedido em tempo real:</Text>
        <Image source={mapa} style={{width: '100%', height: 300}} resizeMode='contain'/>
      </View>
    </View>
  );
}
