import React, {useState} from 'react';
import { Image, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Styles } from './Styles';
import { addToPedido } from './Pedido';

function chooseRandomImage(){
    let random = 1
    let image
    const image1 = require('../assets/images/pizza1.jpg')
    const image2 = require('../assets/images/pizza2.jpg')
    const image3 = require('../assets/images/pizza3.jpg')
    const image4 = require('../assets/images/pizza4.jpg')
    const image5 = require('../assets/images/pizza5.jpg')
    const image6 = require('../assets/images/pizza6.jpg')
    const image7 = require('../assets/images/pizza7.jpg')
    const image8 = require('../assets/images/pizza8.jpg')
    const image9 = require('../assets/images/pizza9.jpg')
    
    random = Math.floor(Math.random() * 9) + 1,

    random === 1
    ? image = image1
    : random === 2
    ? image = image2
    : random === 3
    ? image = image3
    : random === 4
    ? image = image4
    : random === 5
    ? image = image5
    : random === 6
    ? image = image6
    : random === 7
    ? image = image7
    : random === 8
    ? image = image8
    : image = image9
    
    return image
}

function minimizedView(recheios, preço, vegano, vegetariano){
    return(
        <View style={Styles.PizzaViewInfoContainer}>
            {recheios?.map((recheio) => <Text style={Styles.whiteText} key={recheio}>{recheio}</Text>)}
            <View style={Styles.row}>
                <Text style={Styles.whiteText}>R$ {preço} </Text>
                <Text style={Styles.dietText}>
                    {vegano ? 'vegano ' : ''}
                    {vegetariano ? 'vegetariano ' : ''}
                </Text>
            </View>
        </View>
    )
}

function expandedView(recheios){
    return(
        <View style={Styles.PizzaViewInfoContainer}>
            {recheios?.map((recheio) => <Text style={Styles.whiteText} key={recheio}>{recheio}</Text>)}
        </View>
    )
}

function expandedViewTitle(name, preço, vegano, vegetariano){
    return( 
        <View>
            <View style={Styles.row}>
                <Text style={Styles.PizzaNameText}>{name}</Text>
                <View style={Styles.alignRight}>
                    <Text style={{marginTop: 5, marginRight: 5, color: 'white'}}>R$ {preço}</Text>
                </View>
            </View>
            <Text style={Styles.dietText}>
                        {vegano ? 'vegano ' : ''}
                        {vegetariano ? 'vegetariano ' : ''}
                    </Text>
            <Text style={Styles.italicText}>
                Descrição adicional sobre a pizza aqui. 
                Teste Teste Teste Teste Teste Teste Teste.
            </Text>
        </View>
    )
}

function expandedViewButtons(PedidoAmountValue, name, preço){
    return(
        <View>
            <View style={Styles.row}>
                <View style={{ width: "45%"}}>
                    <Button
                    title="Editar"
                    color="#6F6F6F"
                    />
                </View>
                <View style={{ width: "50%", marginLeft: 15}}>
                    <Button
                    title="Definir Favorito"
                    color="#6F6F6F"
                    />
                </View>
            </View>

            <View style={Styles.row}>
                <TextInput
                    style={Styles.OrderAmountTextInput}
                    onChangeText={text => onAmountTextChange(text)}
                    value={PedidoAmountValue}
                />
                <Text style={{marginTop: 10, color: 'white'}}> Qtd  </Text>
                <Button title="+" color="#6F6F6F" />
                <View style={{ width: "50%", marginLeft: 43}}>
                    <Button
                        title="Adicionar Pedido"
                        color="#3971DD"
                        onPress={addToPedido(name, preço)}
                    />
                </View>
            </View>
        </View>
    )
}

export default function PizzaView( props ){
    const [expanded, setExpanded] = useState(false)
    const [PedidoAmountValue] = React.useState('1');

    return (
        <View 
            style={Styles.PizzaViewContainer} 
            onStartShouldSetResponder={() => {return true}}
            onResponderRelease={() => { setExpanded(!expanded) }}>
            
            {expanded ? 
            expandedViewTitle(props.name, props.preço, props.vegano, props.vegetariano) 
            : <Text style={Styles.PizzaNameText}>{props.name}</Text>}

            <View style={Styles.row}>
                {expanded ? 
                    expandedView(props.recheios)
                    : minimizedView(props.recheios, props.preço, props.vegano, props.vegetariano)
                }
            
                <View style={Styles.PizzaViewImageContainer}>
                    <Image source={chooseRandomImage()} 
                    style={Styles.PizzaViewImage}
                    resizeMode='contain'/>
                </View>
            </View>

            {expanded? expandedViewButtons(PedidoAmountValue, props.name, props.preço) : null}

        </View>
    );
}

export function BebidaView( props ){
    const [expanded, setExpanded] = useState(false)
    const [PedidoAmountValue, onAmountTextChange] = React.useState('1');

    function getBebidaImage(){
        var image 
        if(props.name === 'Pepsi')
            image = require('../assets/images/pepsi.jpg')
        else if(props.name === 'Cerveja')
            image = require('../assets/images/cerveja.jpg')
        else
            image = require('../assets/images/agua.jpg')
        return image
    }

    return (
        <View 
            style={Styles.PizzaViewContainer} 
            onStartShouldSetResponder={() => {return true}}
            onResponderRelease={() => { setExpanded(!expanded) }}>
            
            {expanded ? 
            expandedViewTitle(props.name, props.preço, props.vegano, props.vegetariano) 
            : <Text style={Styles.PizzaNameText}>{props.name}</Text>}

            <View style={Styles.row}>
                {expanded ? 
                    expandedView(props.recheios)
                    : minimizedView(props.recheios, props.preço, props.vegano, props.vegetariano)
                }
            
                <View style={Styles.PizzaViewImageContainer}>
                    <Image source={getBebidaImage()} 
                    style={Styles.PizzaViewImage}
                    resizeMode='contain'/>
                </View>
            </View>

            {expanded? expandedViewButtons(PedidoAmountValue, props.name, props.preço) : null}

        </View>
    );
}
