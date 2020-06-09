import React, { useState } from "react";
import * as Pedido from '../components/Pedido.js';
import { Text, View, Button, Picker } from 'react-native';
import { Styles } from '../components/Styles';
import { TextInput, ScrollView } from "react-native-gesture-handler";
import * as UserInfo from "../components/UserInfo.js";

export default function ViewPedidoScreen({navigation}) {

  const [whereToEat, setWhereToEat] = useState("none");

  let order = Pedido.getPedido()
  let list = []

  function listPedido(){
    for (let i = 0; i < order.length; i++) {
        list.push(
          <View style={Styles.row} key={i}>
            <View style={{flex: 3}}>
              <Text key={i} style={{marginTop: 5, color: 'white'}}>{order[i][0]} - R$ {order[i][1]}</Text>
            </View>
            <View style={{flex: 0.5, marginRight: 25}}>
            <TextInput
              value='1'
              style={Styles.orderAmountTextInput}

            />
            </View>
            <View style={{flex: 0.5}}>
              <Text style={{marginTop: 5, color: 'white'}}> Qtd </Text>
            </View>
            <View style={Styles.rowCell}>
              <Button title="Edit" />
            </View>
        </View>
        );
    }
    return list
  }

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.leftRightMargins}>
        {listPedido()}
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#505050',
            borderBottomWidth: 1,
          }}
        />
        <View style={Styles.row}>
          <View style={Styles.rowCell}>
            <Text style={Styles.whiteText}>Total: R$ {Pedido.getPedidoTotal()}</Text>
          </View>
        </View>
        <View style={Styles.row}>
          <View style={{borderColor: 'gray', borderWidth: 1, width: '100%'}}>
            <Picker
              selectedValue={whereToEat}
              onValueChange={(itemValue) => setWhereToEat(itemValue)}
              style={{marginLeft: 0, width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
              color: 'white'}}>
              <Picker.Item label="Onde voce deseja comer" value="none"/>
              <Picker.Item label="No restaurante" value="pizza"/>
              <Picker.Item label="Delivery" value="bebida"/>
            </Picker>
          </View>
        </View>

        <View style={Styles.row}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Endereço para Delivery</Text>
        </View>
        <View style={Styles.row}>
          <View style={{flex: 2}}>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getAddress()}</Text>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getZipCode()} {UserInfo.getCity()}</Text>
          </View>
          <View style={Styles.rowCell}>
            <Button title="Alterar" />
          </View>
        </View>

        <View style={Styles.row}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Informações de contato</Text>
        </View>
        <View style={Styles.row}>
          <View style={{flex: 2}}>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getPhone()}</Text>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getEmail()}</Text>
          </View>
          <View style={Styles.rowCell}>
            <Button title="Alterar" />
          </View>
        </View>

        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#505050',
            borderBottomWidth: 1,
          }}
        />
        <View style={Styles.row}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Metodo de pagamento</Text>
        </View>
        <View style={Styles.row}>
          <View style={{flex: 2}}>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getPayment()}</Text>
          </View>
          <View style={Styles.rowCell}>
            <Button title="Alterar" />
          </View>
        </View>
        <View style={Styles.row}>
          <View style={{flex: 1}} />
          <View style={{flex: 1, marginTop: 20, marginBottom: 20}}>
            <Button title="Pedir" 
            onPress={() => {
              navigation.navigate('TrackPedidoScreen')
          }}/>
          </View>
          <View style={{flex: 1}} />
        </View>
      </ScrollView>
    </View>
  );
}
