import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, StatusBar, KeyboardAvoidingView, View, TouchableOpacity, TextInput, Image, Animated} from 'react-native';

export default function App() {

  const[offset] = useState(new Animated.ValueXY({x:0, y:95}))
  const [opacity] = useState(new Animated.Value(0))

  useEffect(()=>{ Animated.parallel([ Animated.spring(offset.y,{ toValue:0, speed:4, bounciness:20}), 
    Animated.timing(opacity,{toValue:1, duration:300,}) 
    ]).start() }, []);

  return (    
    <KeyboardAvoidingView style={myStyle.body}>
      <StatusBar backgroundColor='#35AAFF' barStyle='light-content' />
      <View style={myStyle.logo}>
          <Image source={require('./assets/img/react.png')} />    
      </View>      
    
      <Animated.View style={[ myStyle.container, {opacity: opacity, transform:[{translateY: offset.y }] } ]}>
        <TextInput style={myStyle.input} placeholder="Email" autoCorrect={false} onChangeText={()=>{}} />     
      
        <TextInput style={myStyle.input} placeholder="Senha" secureTextEntry={true} autoCorrect={false} onChangeText={()=>{}} />
      

        <TouchableOpacity style={myStyle.btn}>  
          <Text style={myStyle.bntTxt}>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={myStyle.btnRegister}> 
          <Text style={myStyle.txtRegister}>Criar Conta</Text> 
        </TouchableOpacity>    
      
      </Animated.View>
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



  