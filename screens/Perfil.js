import { StyleSheet, Text, View } from "react-native";


const Perfil = () => (
  <View
  style={[
    styles.container,
    {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: 'column',
    },
  ]}>
  <Text style={{
    flex: 1, 
    backgroundColor: '#545454',
    fontSize: 40, 
    justifyContent: 'center'
  
    }}>              Perfil</Text>
  <View style={{flex: 2, backgroundColor: '#6D6D6D'}} />
  <View style={{flex: 3, backgroundColor: '#A2A2A2'}} />
</View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Perfil;
