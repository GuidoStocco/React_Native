import React from 'react';
import {View, Text, Image} from 'react-native';

export default function App(){

  let nome = 'Guido';

  return(
    <View>
      <Text>Olá Mundo</Text>
      <Text style={{color:'#ff0000', fontSize: 25}} >Meu primeiro app</Text>

    <Text style={{fontSize:20}}>{nome}</Text>

    <Logo largura={350} altura={200} /> 
    </View>
    
  );
};
  
function Logo(props){
  let img = 'http://sujeitoprogramador.com/reactlogo.png';
  return(
    <Image source={{uri: img}} style={{width: props.largura, height: props.altura}}/>
  );
}
  
  
  
 