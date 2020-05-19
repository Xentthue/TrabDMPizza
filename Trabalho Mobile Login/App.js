import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function AssetExample() {

  return (
    <View style={styles.container}>
      <Image style={styles.logo}
            source={{
              uri:
                'https://i.imgur.com/kYP5Vcd.jpg',
            }}
          />
      <TextInput
      style={styles.input}
      Placeholder="Digite seu Email"
      /> 
      <TextInput
      style={styles.input}
      secureTextEntry={true}
      Placeholder="Digite sua Senha"
      /> 
      <TouchableOpacity
      style={styles.botao}
      onPress={ () => {this.clicou()} }
      >
      <Text style={styles.botaoText}> Login </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6600'
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 100
  },
  input:{
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontsize: 16,
    fontweight: 'bold',
    borderRadius: 3
  },
  botao:{
    width: 300,
    height: 42,
    backgroundColor: '#fcffff',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText:{
    fontsize: 16,
    fontweight: 'bold',
    color: '#000000'
  }
});