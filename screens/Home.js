import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo1 = {
  uri: 'https://th.bing.com/th/id/OIP.cY-hB6Vqubk0V2OfA2qfQQHaEK?pid=ImgDet&rs=1',
  width: 500,
  height: 280,
};
const logo2 = {
  uri: 'https://ingelecsa.cl/wp-content/uploads/2018/08/img_2839.jpg',
  width: 500,
  height: 280,
};
const logo3 = {
  uri: 'https://www.google.cl/url?sa=i&url=https%3A%2F%2Fingelecsa.cl%2F&psig=AOvVaw2iCdyiAOCMGTXDNVcRjCHL&ust=1676049872219000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjB17v6iP0CFQAAAAAdAAAAABAE',
  width: 500,
  height: 280,
};
const logo4 = {
  uri: 'https://th.bing.com/th/id/OIP.cY-hB6Vqubk0V2OfA2qfQQHaEK?pid=ImgDet&rs=1',
  width: 500,
  height: 280,
};
const logo5 = {
  uri: 'https://th.bing.com/th/id/OIP.cY-hB6Vqubk0V2OfA2qfQQHaEK?pid=ImgDet&rs=1',
  width: 500,
  height: 280,
};

const App = () => (
  <ScrollView style={{backgroundColor: '#2A3855'}}>
    <Text style={{fontSize: 40}}>     Sobre ingelecsa</Text>
    <Image source={logo1} />

    <Text style={{fontSize: 25}}>Junto a reconocidas tiendas de retail.</Text>
    <Image style={{width: 500, height: 250}} source={require('../images/falabella.png')} />

    <Text style={{fontSize: 40}}>Scrolling down</Text>
    <Image style={{width: 500, height: 250}} source={require('../images/tottus.png')} />

    <Text style={{fontSize: 40}}>What's the best</Text>
    <Image style={{width: 500, height: 250}} source={require('../images/homecenter.png')} />

  </ScrollView>
);

export default App;
