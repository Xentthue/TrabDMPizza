import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PedidosBarra from '../components/PedidosBarra';
import PizzaView from '../components/PizzaView';
import ViewPedidoBarra from '../components/ViewPedidoBarra';
import { Styles } from '../components/Styles';

export default function HomeScreen() {
  const logo = require('../assets/pizzax.png');
  
  return (
    <View style={Styles.container}>
      <Image source={logo} style= {Styles.homeHeaderLogo} resizeMode='contain' />
      <ScrollView style={Styles.container}>
        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryTextTopMargin}>Pedir novamente </Text>
          <PizzaView
            name='Teste'
            recheios={['Escolha recheio 1', 'Escolha recheio 2', 'Escolha recheio 3', 'Escolha recheio 4']}
            preço={29.00}/>
          <PizzaView
            name='Americana'
            recheios={['Peperoni', 'tomate', 'Oregano']}
            preço={28.00}/>
        </View>

        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>Recomendado para voce</Text>
          <PizzaView 
            name='Calabresa'
            recheios={['Calabresa', 'Queijo']}
            preço={38.50}/>
          <PizzaView 
            name='Quatro queijos'
            recheios={['Parmesao', 'Mussarela', 'Requeijao', 'Gorgonzola']}
            preço={28.00}/>
        </View>    

        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>O mais Popular</Text>
          <PizzaView
            name='Vegana'
            recheios={['Alho', 'Tomate', 'Manjericão']}
            preço={38.50}
            vegano={true}/>
          <PizzaView
            name='Portuguesa'
            recheios={['Ovo', 'Cebola']}
            preço={28.00}/>
          <PizzaView
            name='Marguerita'
            recheios={['Manjericão', 'Queijo']}
            preço={27.50}/>
        </View>         
      </ScrollView>
      <PedidosBarra/>
      <ViewPedidoBarra />
    </View>
  );
}
