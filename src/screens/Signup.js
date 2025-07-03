import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import Logo from '../../assets/images/logo.png';
import Apple from '../../assets/images/apple.png';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image
import Background from '../components/Background';
import Button from '../components/button';
import TextField from '../components/textinput';
import Text from '../components/Text';
export default function Signup({ navigation }) {
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
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='Full Name'
                        />
                        <TextField
                            fontSize={scale(15)}
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='Mobile Number'
                        />
                        <TextField
                            fontSize={scale(15)}
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
                            placeholder='Password'
                        />
                        <TextField
                            ShowSecureTextEntry
                            fontSize={scale(15)}
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                margin: scale(4),
                            }}
                            placeholder='Confirm Password'
                        />

            <View style={{ marginTop: scale(20), marginBottom: scale(10) }}>
              <Button onPress={() => navigation.navigate('Services')}
                title="Register" color={"#F7F6FC"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#75B8F7"} width={scale(280)} height={scale(40)} />
            </View>
                    </View>
                </ScrollView>
                {/* Bottom text */}

                <View style={{ alignItems: 'center', marginBottom: scale(75) }}>
          <Text  color= 'white' fontWeight='400' fontSize={scale(16)}>
             I have an account{'  '}
            <Text onPress={() => navigation.replace('Login')} fontSize={scale(14)} color="#812AA1" fontWeight='700' style={{ textDecorationLine: 'underline' }}>
              Login
            </Text>
          </Text>
        </View>

            </Background>
        </SafeAreaView>
    );
}
