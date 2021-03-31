import React from 'react';
import { StyleSheet, Text, StatusBar, KeyboardAvoidingView, View, TouchableOpacity, TextInput, Image} from 'react-native';

export default function App() {
  return (    
    <KeyboardAvoidingView style={myStyle.body}>
      <StatusBar backgroundColor='#35AAFF' barStyle='light-content' />
      <View style={myStyle.logo}>
          <Image source={require('./assets/img/react.png')} />    
      </View>      
    
      <View style={[myStyle.container]}>
        <TextInput style={myStyle.input} placeholder="Email" autoCorrect={false} onChangeText={()=>{}} />     
      
        <TextInput style={myStyle.input} placeholder="Senha" secureTextEntry={true} autoCorrect={false} onChangeText={()=>{}} />
      

        <TouchableOpacity style={myStyle.btn}>  
          <Text style={myStyle.bntTxt}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={myStyle.btnRegister}> 
          <Text style={myStyle.txtRegister}>Criar Conta</Text> 
        </TouchableOpacity>    
      
      </View>
    </KeyboardAvoidingView>
  );
}

const myStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{    
    justifyContent:'center',
    flex: 1,        
  },

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
  },

  input:{    
    backgroundColor:'#fff',
    color:'#222',
    width:'90%',
    fontSize:17,
    borderRadius:7,
    marginBottom:15,
    padding:10,

  },

  btn:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#35AAFF',
    padding:10,
    borderRadius:7,
    width:'90%',
    padding:10,
    height:45,
  },
  bntTxt:{
    color:'#fff',
    fontSize:15,
  },

  txtRegister:{
    color:'#fff',
  },

  btnRegister:{
    marginTop:10,
    
  }

});



  