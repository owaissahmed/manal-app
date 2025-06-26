
import { View, Image, SafeAreaView } from 'react-native';
import Text from '../components/Text';
import React from 'react';
import { scale } from 'react-native-size-matters';
import Logo from '../../assets/images/logo.png';
import HomeCar from '../../assets/images/homeCar.png';
import Background from '../components/Background';
import Button from '../components/button';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image


export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: scale(30),
          }}
        >
          <Image
            source={Logo}
            style={{
              height: scale(100),
              width: scale(100),
            }}
            resizeMode="contain"
          />
          <Image
            source={HomeCar}
            style={{
              height: scale(200),
              width: scale(320),
              marginVertical: scale(20),
            }}
            resizeMode="contain"
          />
          <Text style={{letterSpacing: 1,}} fontWeight={700} fontSize={scale(18)} color={"#042552"} > 
            WELCOME TO MANAL CAR WASH
          </Text>
          <Text fontWeight={400} fontSize={scale(16)} color={"#042552"} > 
            Please choose an option to continue
          </Text>
          <View
            style={{
              marginTop: scale(55),
              gap: scale(20), // use `rowGap` if supported; else use margins individually
              alignItems: 'center',
            }}
          >
            <Button
              onPress={() => navigation.navigate('Login')}
              backgroundColor={"#fff"}
              title="Login" color={"#13418C"} fontWeight="700" fontSize={scale(16)} width={scale(280)} height={scale(40)} />
            <Button onPress={() => navigation.navigate('Signup')}
              title="Register" color={"#13418C"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#fff"} width={scale(280)} height={scale(40)} />
            <Button onPress={() => navigation.navigate('Services')}
              title="Guest User" color={"#13418C"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#fff"} width={scale(280)} height={scale(40)} />
          </View>
        </View>
      </Background>
    </SafeAreaView>
  );
}
