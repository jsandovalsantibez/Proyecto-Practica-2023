import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from 'react-native';

export default function App() {
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
      <StatusBar style="auto" />
    </View>
  );
}

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
