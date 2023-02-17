import { StyleSheet, Text, View, Image, Button } from "react-native";



const Perfil = () => (

  
  <View style={[ styles.container,
    {
      flexDirection: 'column',
    },
  ]}>

  <Text style={{flex: 1.8, backgroundColor: '#465679', color: 'white', fontSize: 18, textAlign: 'right', textAlignVertical: 'bottom'}}>Nombre, apellido        </Text>
  <Text style={{flex: 1.5, backgroundColor: '#E4E5E7', color: 'black', fontSize: 16, textAlign: 'right', textAlignVertical: 'top'}}>Nivel usuario                    </Text>
  <View style={{flex: 3, backgroundColor: 'white'}} />

</View>

)

  


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buttonContainer:{
    flex:2,
    backgroundColor: '#E4E5E7',
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});




export default Perfil;
