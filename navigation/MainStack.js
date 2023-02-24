import React from "react";
import  { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Perfil from "../screens/Perfil";
import Login from "../screens/Login";
import Mantencion from "../screens/Mantencion";
import Dispositivos from "../screens/Dispositivos";
import DISextincion from "../screens/DISextincion";
import Audio from "../screens/Audio";


const Stack = createNativeStackNavigator()
//Navigation Container es el padre
//Stack Navigatior es donde van a estar las pantallas disponibles
const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
                name= 'Login'
                component = { Login }
                />
                <Stack.Screen 
                name= 'Home'
                component = { Home }
                />
                <Stack.Screen 
                name= 'Perfil'
                component = { Perfil }
                />
                <Stack.Screen
                name= 'Mantencion'
                component={ Mantencion }/>

                <Stack.Screen
                name= 'Dispositivos'
                component={ Dispositivos }/>

                <Stack.Screen
                name= 'DISextincion'
                component={ DISextincion }/>

                <Stack.Screen
                name= 'Audio'
                component={ Audio }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;