import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Boton = (props) => {
    const { onPress, text } = props

    return(
        <TouchableOpacity
        style={ style.buttonContainer }
        onPress = { onPress }
        >
            <Text style = { StyleSheet.buttonText }>
                { text }
            </Text>
        </TouchableOpacity>
    )
}
export default Boton;

const style = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'blue',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    buttonText: {
        color: '#f9f9f9'
    },
})