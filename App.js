import React from 'react';
import {View, Text, Image} from 'react-native';

export default function App(){

  let nome = 'Guido';
  let img = 'http://sujeitoprogramador.com/reactlogo.png';

  return(
    <View>
      <Text>Olá Mundo</Text>
      <Text style={{color:'#ff0000', fontSize: 25}} >Meu primeiro app</Text>

    <Image
      source={{uri: img}}
      style={{width:300, height:300}}
    />

    <Text style={{fontSize:20}}>{nome}</Text>

    </View>
    
  );
};
  
  
  
  
 