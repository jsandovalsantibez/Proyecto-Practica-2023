import React from "react";
import  { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Perfil from "../screens/Perfil";

const Stack = createNativeStackNavigator()
//Navigation Container es el padre
//Stack Navigatior es donde van a estar las pantallas disponibles
const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name= 'Home'
                component = { Home }
                />
                <Stack.Screen 
                name= 'Perfil'
                component = { Perfil }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;