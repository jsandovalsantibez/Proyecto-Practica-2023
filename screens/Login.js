import React from "react";
import { View, Text, StyleSheet, Image, Keyboard } from 'react-native'
import {TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Boton from "../components/Boton";
import {AsyncStorage} from 'react-native';
import axios from 'axios'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      correo: '',
      empleado_passw: ''
    }
  }
  
  Logear= async ()=>{
    
    const {correo} = this.state;
    const {empleado_passw} = this.state;
    var enviarData = {correo:correo, empleado_passw:empleado_passw};
    Keyboard.dismiss();

    axios.post('http://192.168.100.40/ingelecsa/login/index.php', enviarData)
    .then(async (resultado)=>{
      if (resultado.data.Status === '200'){
        console.log(resultado);

        try {
          await AsyncStorage.setItem('rut', resultado.data.rut);
          await AsyncStorage.setItem('Nombre', resultado.data.Nombre);
          await AsyncStorage.setItem('Correo', resultado.data.Correo);
          await AsyncStorage.setItem('Cargo', resultado.data.Cargo);
        }catch(error) {
          console.log(error);
        }
        this.props.navigation.navigate("Home");
        
      }
    else {
      alert('Invalid User');
    }
    })


/*
    fetch("http://192.168.100.40/ingelecsa/login/index.php", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body:JSON.stringify({
        correo: correo,
        empleado_passw: empleado_passw,
      }),
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      alert(responseJson);
      if(responseJson == "ok") {
        this.props.navigation.navigate("Home");
      }
    })
    .catch((error)=>{
      console.error("ERROR ENCONTRADO " + error);
  })

*/
};

  render(){

    return(
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../images/logo.png')}
      />
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.sub_Titulo}>INICIA SESIÓN PARA CONTINUAR</Text>
      <Text style={styles.descripcion}>INICIA SESIÓN PARA CONTINUAR</Text>
      <TextInput
        placeholder="email@ingelecsa.cl"
        onChangeText={(correo) => this.setState({correo})}
        style={styles.textInput}
      />
      <TextInput
      placeholder="clave"
      onChangeText={(empleado_passw) => this.setState({empleado_passw})}
      secureTextEntry={true}
      style={styles.textInput}
      />
      <Boton
      text = "Lets Go"
      onPress = { this.Logear /*() =>{
        this.props.navigation.navigate('Home')
      }
        */
      }/>
      <StatusBar style="auto" />
      
    </View>
  );
  }
}export default Login;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo:{
      fontSize: 60,
      color: '#34434D',
      fontWeight: 'bold',
    },
    sub_Titulo:{
      fontSize: 20,
      color: 'gray',
    },
    descripcion:{
      fontSize: 10,
      color: '#34434D',
      fontWeight: 'bold',
    },
    textInput:{
      padding: 10,
      paddingStart: 30,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#fff',
    }
  });
