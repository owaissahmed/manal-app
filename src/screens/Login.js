import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import Logo from '../../assets/images/logo.png';
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google.png';
import Background from '../components/Background';
import Button from '../components/button';
import Text from '../components/Text';
import TextField from '../components/textinput';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>

        {/* Main content wrapper */}
        <Image
          source={Logo}
          style={{ alignSelf: "center", marginTop: scale(50), height: scale(100), width: scale(100) }}
          resizeMode="contain"
        />
        <ScrollView>
          <View style={{
            alignItems: 'center',
          }}>

            <TextField
              fontSize={scale(15)}
                      borderColor= '#13418C'

              style={{
                width: scale(280),
                // height: scale(40),
                backgroundColor: 'white',
                margin: scale(4)
              }}
              placeholder='Your Email'
            />

            <TextField
              ShowSecureTextEntry
              fontSize={scale(15)}
              style={{
                width: scale(280),
                // height: scale(40),
                margin: scale(4),
              }}
              placeholder='Your Password'
            />

            <Text style={{
              marginTop: scale(2),
              alignSelf: 'flex-end',
              marginRight: scale(25)
            }} color='#13418C' fontWeight="400" fontSize={scale(15)}>
              Forgot your password?
            </Text>


            <View style={{ marginTop: scale(20), marginBottom: scale(10) }}>
              <Button onPress={() => navigation.navigate('Services')}
                title="Sign in" color={"#F7F6FC"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#75B8F7"} width={scale(280)} height={scale(40)} />
            </View>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: scale(16),
              marginHorizontal:scale(20)
            }}>
              <View style={{
                flex: 1,
                height:scale(1),
                backgroundColor: '#B65FCF',
                marginHorizontal: scale(15)
              }} />
              <Text color={'#13418C'} fontWeight="700" fontSize={scale(14)}>
                Or sign in with
              </Text>
              <View style={{
                flex: 1,
                height:scale(1),
                backgroundColor: '#B65FCF',
                marginHorizontal: scale(15)
              }} />
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: scale(100),
              marginBottom: scale(10)
            }}>
              <Image source={Google} />
              <Image source={Apple} />
            </View>
          </View>

        </ScrollView>
        {/* Bottom text */}
        <View style={{ alignItems: 'center', marginBottom: scale(75) }}>
          <Text  color= 'white' fontWeight='400' fontSize={scale(16)}>
            Dont have an account?{'  '}
            <Text onPress={() => navigation.replace('Signup')} fontSize={scale(14)} color="#812AA1" fontWeight='700' style={{ textDecorationLine: 'underline' }}>
              Sign up
            </Text>
          </Text>
        </View>

      </Background>
    </SafeAreaView>
  );
}
