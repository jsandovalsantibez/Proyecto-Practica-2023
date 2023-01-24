import React from "react";
import { View, Text } from 'react-native'
import Boton from "../components/Boton";

const Home = ({navigation}) => {
    return(
        <View>
            <Text>Home</Text>
            <Boton
            text = "Perfil"
            onPress = {() => {
                navigation.navigate("Perfil")
            }}
            />
        </View>
    )
}
export default Home;