import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import Logo from '../../assets/images/logo.png';
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google.png';
import Background from '../components/Background';
import Button from '../components/button';
import TextField from '../components/textinput';

export default function Signup({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background imageOpacity={0.1}>

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
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='Full Name'
                        />
                        <TextField
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='Mobile Number'
                        />
                        <TextField
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
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                margin: scale(4)
                            }}
                            placeholder='Password'
                        />
                        <TextField
                            ShowSecureTextEntry
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                margin: scale(4)
                            }}
                            placeholder='Confirm Password'
                        />
                        <View style={{ marginTop: scale(20),marginBottom:scale(10)}}>
                            <Button
                backgroundColor={"#75B8F7"}
                                textStyle={{ color: 'white' }}
                                onPress={() => navigation.navigate('Services')}
                                title="Register"
                                width={scale(280)}
                                height={scale(40)}
                            />
                        </View>
                    </View>
                </ScrollView>
                {/* Bottom text */}
                <View style={{ alignItems: 'center', marginBottom: scale(50) }}>
                    <Text style={{ color: 'white', fontSize: scale(12), fontFamily: 'InterVariableFont', }}>
                        I have an account{'   '}
                        <Text onPress={() => navigation.replace('Login')} style={{ color: "#770996", fontWeight: '700', textDecorationLine: 'underline' }}>
                            Login
                        </Text>
                    </Text>
                </View>

            </Background>
        </SafeAreaView>
    );
}
