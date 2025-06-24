import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { scale } from 'react-native-size-matters';
import AlManalText from '../../assets/images/AlManalText.png';
import Logo from '../../assets/images/logo.png';
import Background from '../components/Background';

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
    <Background>
      <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
        <View />
        <View />
        <View />

        {/* Logos View */}
        <View style={{ alignItems: 'center', marginTop: scale(140), marginBottom: scale(45) }}>
          <Image source={Logo} style={{ height: scale(80), width: scale(80) }} />
          <Image source={AlManalText} style={{ marginTop: scale(10) }} />
        </View>

        {/* Loading Text */}
        <View>
          <Text style={{
            fontFamily: 'InterVariableFont',
            fontSize: scale(22),
            fontWeight: '700',
            color: '#1B337C',
          }}>
            Loading...
          </Text>
        </View>
      </View>
    </Background>
  );
}
