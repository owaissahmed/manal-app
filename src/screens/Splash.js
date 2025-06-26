import { View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { scale } from 'react-native-size-matters';
import AlManalText from '../../assets/images/AlManalText.png';
import Logo from '../../assets/images/logo.png';
import Background from '../components/Background';
import Text from '../components/Text';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image

export default function Splash({ navigation }) {
  useEffect(() => {
    GoToHome();
  }, []);

  function GoToHome() {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }

  return (
      <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} >
      <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
        <View />
        <View />
        <View />
        {/* Logos View */}
        <View style={{ alignItems: 'center', marginTop: scale(140), marginBottom: scale(45) }}>
          <Image source={Logo} style={{ height: scale(100), width: scale(100) }} />
          <Image source={AlManalText} style={{ marginTop: scale(10) }} />
        </View>

        {/* Loading Text */}
        <View>
          <Text color={'#1B337C'} fontWeight="700" fontSize={scale(22)}>
            Loading...
          </Text>
        </View>
      </View>
    </Background>
  );
}
