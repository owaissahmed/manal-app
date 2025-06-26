import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import Background from '../components/Background'
// import CarWashBG from '../../assets/images/carWashbg.png'
import CarWashBackground from '../../assets/images/carWashBackground.png'
import Dubai from "../../assets/images/dubai.png"
import { scale } from 'react-native-size-matters'
import TextField from '../components/textinput'
import Button from '../components/button'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Text from '../components/Text'
export default function AddCar({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(500)} width={scale(350)} BackgroundImage={CarWashBackground} imageOpacity={1}>
                <ScrollView>
                    <View style={{
                        marginTop: scale(40),
                        alignItems: 'center',
                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center',gap:scale(20), backgroundColor: "white", borderRadius: scale(20), height: scale(160),borderColor:'black',borderWidth:scale(1),borderStyle:'dashed',marginVertical:scale(12), width: scale(280) }}>
                            <AntDesign style={{ paddingHorizontal: scale(8), paddingVertical: scale(6),borderRadius:scale(10) ,backgroundColor:'#74B9F8'}} name="plus" color="#ffffff" size={scale(22)} />
                            <Text style={{textTransform:'uppercase'}} color={'#770996'} fontWeight="700" fontSize={scale(16)}>
                                attach car photo
                            </Text>
                        </View>
                        <View style={{marginBottom:scale(6), alignItems: 'center', justifyContent: 'center', backgroundColor: "white", borderRadius: scale(20), height: scale(60), width: scale(280) }}>
                            <Image style={{ padding: scale(4) }} source={Dubai} />
                        </View>
                        <TextField
                            fontSize={scale(16)}
                            borderColor='white'
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='PLATE CODE'
                        />
                        <TextField
                            fontSize={scale(16)}
                            borderColor='white'
                            style={{
                                width: scale(280),

                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='PLATE NUMBER'
                        />
                        <TextField
                            fontSize={scale(16)}
                            borderColor='white'

                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='CITY'
                        />
                        <View style={{ marginTop: scale(20), marginBottom: scale(10) }}>
                            <Button onPress={() => navigation.navigate('Splash')}
                                title="CONTINUE" color={"#fff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(280)} height={scale(40)} />
                        </View>
                    </View>
                </ScrollView>
            </Background>
        </SafeAreaView>
    )
}