import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import {TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Boton from "../components/Boton";
import { NavigationContainerRefContext } from "@react-navigation/native";

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      usuario: '',
      pass: ''
    }
  }
  /*
  Logear=()=>{
    const {usuario} = this.state;
    const {pass} = this.state;

    fetch('http://localhost/ingelecsa/index.php', {
      method: ' POST',
      body:JSON.stringify({
        usuario: this.state.usuario,
        pass: this.state.pass
      })
    }).then((respuesta)=>respuesta.json())
    .catch(error=> console.error('Error', error))
    .then(response => {
      if(response.loggedin == 1){
        this.props.navigation.navigate('Home');   
        

    }else{
        Alert.alert(response.msj);
    }
    })

  }

  */
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
        onChangeText={(usuario) => this.setState({usuario})}
        style={styles.textInput}
      />
      <TextInput
      placeholder="clave"
      onChangeText={(pass) => this.setState({pass})}
      secureTextEntry={true}
      style={styles.textInput}
      />
      <Boton
      text = "Lets Go"
      onPress = { /*this.Logear*/() =>{
        this.props.navigation.navigate('Home')
      }
        
      }/>
      <StatusBar style="auto" />
      
    </View>
  );
  }
}export default Login;

/*
const Login = ({navigation}) => {
    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.sub_Titulo}>INICIA SESIÓN PARA CONTINUAR</Text>
      <Text style={styles.descripcion}>INICIA SESIÓN PARA CONTINUAR</Text>
      <TextInput
        placeholder="email@ingelecsa.cl"
        style={styles.textInput}
      />
      <TextInput
        placeholder="clave"
        style={styles.textInput}
      />
      <Boton
      text = "Lets Go"
      onPress = { () => {
        navigation.navigate('Home')
      }}
      />
      <StatusBar style="auto" />
      
    </View>
  );
}
export default Login;*/

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
