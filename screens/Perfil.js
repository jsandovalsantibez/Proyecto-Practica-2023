/*import React from "react";
import { View, Text } from 'react-native'

const Perfil = ({navigation}) => {
    return(
        <View>
            <Text>Mi Perfil</Text>
        </View>
    )
}
export default Perfil;

import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
*/

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, AsyncStorage} from 'react-native';
import Boton from '../components/Boton';

const AlignItemsLayout = ({navigation}) => {
  const [alignItems, setAlignItems] = useState('stretch');
  const [nombre, setName] = useState();
  const [rut, setRut] = useState();
  const [correo, setCorreo] = useState();
  const [cargo, setCargo] = useState();


  const load = async () =>{
    try{
      let nombre = await AsyncStorage.getItem('Nombre');
      let rut = await AsyncStorage.getItem('rut');
      let correo = await AsyncStorage.getItem('Correo');
      let cargo = await AsyncStorage.getItem('Cargo');
      if (nombre != null && rut != null && correo != null && cargo != null){
        setName(nombre);
        setRut(rut);
        setCorreo(correo);
        setCargo(cargo);

      }
    } catch(error){
      alert(error)
    }
  }

  const Logaout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Login");
  
    } catch(error) {
      alert(error);
    } finally{
      setName("");
      setRut("");
      setCorreo("");
      setCargo("");
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <PreviewLayout
      label="alignItems"
      selectedValue={alignItems}
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      setSelectedValue={setAlignItems}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View
        style={[
          styles.box,
          {
            backgroundColor: 'steelblue',
            width: 'auto',
            minWidth: 50,
          },
        ]}
      />
      <Text>
        {nombre}
      </Text>
      <Text>
        {rut}
      </Text>
      <Text>
        {correo}
      </Text>
      <Text>
        {cargo}
      </Text>
      <Boton
      text = "Salir"
      onPress = {() => Logaout()}></Boton>
    </PreviewLayout>
    
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlignItemsLayout;