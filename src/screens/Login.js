import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import Logo from '../../assets/images/logo.png';
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google.png';
import Background from '../components/Background';
import Button from '../components/button';
import TextField from '../components/textinput';

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background imageOpacity={0.1}>

          {/* Main content wrapper */}
          <View style={{
            alignItems: 'center',
            paddingVertical: scale(30),
            marginTop: scale(25)
          }}>
            <Image
              source={Logo}
              style={{ height: scale(80), width: scale(80) }}
              resizeMode="contain"
            />

            <TextField
              style={{
                width: scale(300),
                height: scale(45),
                backgroundColor: 'white',
                margin: scale(4)
              }}
              placeholder='Your Email'
            />

            <TextField
              ShowSecureTextEntry
              style={{
                width: scale(300),
                height: scale(45),
                margin: scale(4)
              }}
              placeholder='Your Password'
            />

            <Text style={{
              fontFamily: "InterVariableFont",
              fontWeight: '400',
              fontSize: scale(13),
              color: '#13418C',
              marginTop: scale(2),
              alignSelf: 'flex-end',
              marginRight: scale(25)
            }}>
              Forgot your password?
            </Text>

            <View style={{ marginTop: scale(20) }}>
              <Button
                style={{ backgroundColor: "#75B8F7" }}
                textStyle={{ color: 'white' }}
                onPress={() => navigation.navigate('Login')}
                title="Sign in"
                width={scale(300)}
                height={scale(45)}
              />
            </View>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 30
            }}>
              <View style={{
                flex: 1,
                height: 1,
                backgroundColor: '#B65FCF',
                marginHorizontal: scale(20)
              }} />
              <Text style={{
                fontWeight: '700',
                fontFamily: 'InterVariableFont',
                fontSize: scale(12),
                color: '#13418C'
              }}>
                Or sign in with
              </Text>
              <View style={{
                flex: 1,
                height: 1,
                backgroundColor: '#B65FCF',
                marginHorizontal: scale(20)
              }} />
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: scale(100)
            }}>
              <Image source={Google} />
              <Image source={Apple} />
            </View>
          </View>

          {/* Bottom text */}
          <View style={{ alignItems: 'center', marginTop: scale(130) }}>
            <Text style={{ color: 'white',fontSize:scale(12) ,fontFamily: 'InterVariableFont',}}>
              Dont have an account?{'  '}
              <Text onPress={()=> navigation.replace('Signup')} style={{ color:"#770996",fontWeight:'700',textDecorationLine: 'underline' }}>
                Sign up
              </Text>
            </Text>
          </View>

      </Background>
    </SafeAreaView>
  );
}
