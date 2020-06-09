import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getNumberoItemsPedido } from './Pedido';

var enabled = true;

const styles = StyleSheet.create({
    iPedidoText:{
      fontSize: 17,
      color: 'white',
      textAlign: 'center',
      marginTop: 5
    },
    tabBarInfoContainer: {
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      
      alignItems: 'center',
      backgroundColor: '#141414',
      paddingVertical: 20,
    }
  });

export default function ViewPedidoBarra(props){
  const navigation = useNavigation()
  if(!enabled) return(<View /> )
  else return(
      
      <View style={styles.tabBarInfoContainer}>
          <View style={{flexDirection:"row"}}>
          <View>
              <Text style={styles.iPedidoText}>Você tem {getNumberoItemsPedido()} items no seu carrinho</Text>
          </View>
          
          <View style={{marginBottom: 0, marginLeft: 10}}>
              <Button title="Ver Pedido" color="#FF0000" onPress={() => navigation.navigate('ViewPedidoScreen')} />
          </View>
          </View>
      </View>
  )
}
