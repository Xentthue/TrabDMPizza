import React, { useState } from "react";
import { Picker, Text, View, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import PizzaView, { BebidaView } from '../components/PizzaView';
import PedidosBarra from '../components/PedidosBarra';
import ViewPedidoBarra from "../components/ViewPedidoBarra";
import { Styles } from "../components/Styles";

export default function MenuScreen( ) {
  
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [selectedDiet, setSelectedDiet] = useState("none");
  const [searchValue, onSearchTextChange] = React.useState('Procurar...');

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.container}>
        <View style={Styles.PizzaFilterDropdown}>
          <Picker
            selectedValue={selectedDiet}
            style={{color: 'white'}}
            onValueChange={(itemValue) => setSelectedDiet(itemValue)}>
              <Picker.Item label="Filtro por dieta" value="none"/>
              <Picker.Item label="Vegetariano" value="vegetariano"/>
              <Picker.Item label="Vegano" value="vegano"/>
              <Picker.Item label="Gluten Free" value="glutenfree"/>
              <Picker.Item label="Bebida" value="bebida"/>
              <Picker.Item label="Alcool" value="alcool"/>
          </Picker>
        </View>
        <View style={Styles.PizzaFilterDropdown}>
          <Picker
            style={{color: 'white'}}
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
              <Picker.Item label="Filtro por Categoria" value="none"/>
              <Picker.Item label="Pizza" value="pizza"/>
              <Picker.Item label="Bebidas" value="bebidas"/>
          </Picker>
        </View>
        
        <View style={Styles.rowMargin20}>
        <TextInput
          style={Styles.PizzaSearchTextInput}
          onChangeText={text => onSearchTextChange(text)}
          value={searchValue}
        />
          <Button title="Procurar" />
        </View>

        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>Pizzas</Text>
          <PizzaView 
            name='Vegetariana' 
            recheios={['alface', 'Cebola', 'Tomate']}
            preço={38.50}
            vegetariano={true}
            />
          <PizzaView
            name='Americana'
            recheios={['Peperoni', 'tomate', 'Oregano']}
            preço={28.00}/>
          <PizzaView
            name='Teste'
            recheios={['Escolha recheio 1', 'Escolha recheio 2', 'Escolha recheio 3', 'Escolha recheio 4']}
            preço={29.00}/>
          <PizzaView
            name='Vegana'
            recheios={['Alho', 'Tomate', 'Manjericão']}
            preço={38.50}
            vegano={true}/>
          <PizzaView
            name='Calabresa'
            recheios={['Calabresa', 'Queijo']}
            preço={28.50}/>
          <PizzaView
            name='Marguerita'
            recheios={['Manjericão', 'Queijo']}
            preço={27.50}/>
          <PizzaView 
            name='Portuguesa'
            recheios={['Ovo', 'Cebola']}
            preço={28.00}/>
          <PizzaView 
            name='Quatro Queijos'
            recheios={['Parmesao', 'Mussarela', 'Requeijao', 'Gorgonzola']}
            preço={28.00}/>
        </View>   
        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>Bebidas</Text>
          <BebidaView name='Agua' recheios={['250 ml']} preço={3.00}/>
          <BebidaView name='Pepsi' recheios={['330 ml']} preço={5.00}/>
          <BebidaView name='Cerveja' recheios={['500 ml']} preço={8.00}/>
        </View>       
      </ScrollView>
      <PedidosBarra />
      <ViewPedidoBarra />
    </View>
  );
}
