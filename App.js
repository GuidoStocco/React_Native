import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';

export default function App(){

  const [nome, setNome] = useState("Guido");
  const [idade, setIdade] = useState(20);
  
  function entrar(){
    setNome("Sujeito Programador")
    setIdade(24);
  }

  return(
    <View style={{marginTop:30}}>
      <Button title='Mudar nome' onPress={entrar}/>  
      
      <Text style={{fontSize:20}}>{nome}</Text>
      <Text style={{color:'#ff0000', fontSize: 25}} >Meu primeiro app</Text>


      <Text style={{fontSize: 20}}>{idade}</Text>

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
  
  
  
 