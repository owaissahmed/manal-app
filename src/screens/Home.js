
import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import Logo from '../../assets/images/logo.png';
import HomeCar from '../../assets/images/homeCar.png';
import Background from '../components/Background';
import Button from '../components/button';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
      <Background imageOpacity={0.1}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: scale(30),
          }}
        >
          <Image
            source={Logo}
            style={{
              height: scale(90),
              width: scale(90),
            }}
            resizeMode="contain"
          />
          <Image
            source={HomeCar}
            style={{
              height: scale(200),
              width: scale(320),
              marginVertical: scale(30),
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: 'InterVariableFont',
              fontWeight: '700',
              textTransform: 'uppercase',
              fontSize: scale(16),
              letterSpacing: 1,
              color: '#042552',
            }}
          >
            WELCOME TO MANAL CAR WASH
          </Text>
          <Text
            style={{
              fontFamily: 'InterVariableFont',
              fontWeight: '400',
              fontSize: scale(13.5),
              color: '#042552',
              marginTop: scale(4),
            }}
          >
            Please choose an option to continue
          </Text>

          <View
            style={{
              marginTop: scale(50),
              gap: scale(20), // use `rowGap` if supported; else use margins individually
              alignItems: 'center',
            }}
          >
            <Button
              onPress={() => navigation.navigate('Login')}
              title="Login" width={scale(280)} height={scale(40)} />
            <Button onPress={() => navigation.navigate('Signup')}
              title="Register" width={scale(280)} height={scale(40)} />
            <Button onPress={() => navigation.navigate('Services')}
              title="Guest User" width={scale(280)} height={scale(40)} />
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
}
