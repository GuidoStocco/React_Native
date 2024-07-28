import React from 'react';
import {View, Text, Image} from 'react-native';

export default function App(){
  return(
    <View>
      <Text>Olá Mundo</Text>
      <Text style={{color:'#ff0000', fontSize: 25}} >Meu primeiro app</Text>

    <Image
      source={{uri: 'http://sujeitoprogramador.com/reactlogo.png'}}
      style={{width:300, height:300}}
    />

    </View>
    
  );
};
  
  
  
  
 