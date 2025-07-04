import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from '../components/Background'
// import CarWashBG from '../../assets/images/carWashbg.png'
import CarWashBackground from '../../assets/images/carWashBackground.png'
import Dubai from "../../assets/images/dubai.png"
import Acura from "../../assets/images/acura.png"
import { scale } from 'react-native-size-matters'
import TextField from '../components/textinput'
import Button from '../components/button'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Text from '../components/Text'
export default function AddCar({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(460)} width={scale(350)} BackgroundImage={CarWashBackground} imageOpacity={1}>
                <ScrollView>
                    <View style={{
                        marginTop: scale(60),
                        alignItems: 'center',
                    }}>
                        <View style={{ flexDirection: 'row', marginBottom: scale(20), alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "white", borderRadius: scale(20), height: scale(90), width: scale(280) }}>
                            <View><Image style={{ padding: scale(4) }} source={Acura} /></View>
                            <View><Text style={{ textTransform: 'uppercase' }} color={'#000'} fontWeight="700" fontSize={scale(16)}>
                                ACURA MDX
                            </Text>
                                <Text style={{ textTransform: 'uppercase' }} color={'#000'} fontWeight="700" fontSize={scale(16)}>MDX | 2024</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: scale(18), borderRadius: scale(3), height: scale(18), backgroundColor: 'black' }}></View>
                                    <Text style={{ marginLeft: scale(6), textTransform: 'uppercase', }} color={'#000'} fontWeight="700" fontSize={scale(16)}>black</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: scale(280), marginBottom: scale(8) }}>
                            <Text style={{ textTransform: 'uppercase', padding: scale(6) }} fontWeight="700" color={'#770996'} fontSize={scale(16)}>
                                cAr plate details (optional):
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "white", borderRadius: scale(20), height: scale(110), borderColor: 'red', borderWidth: scale(1), borderStyle: 'dashed', marginBottom: scale(18), width: scale(280) }}>
                            <Text style={{ paddingHorizontal: scale(20), textTransform: 'uppercase', textAlign: 'center', lineHeight: scale(28) }} color={'#B61212'} fontSize={scale(13)}>
                                fill in your cAR'S PLATE NUMBER TO HELP US LOCATE YOU QUICKLY AND PROPERLY
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('CarVehicle')}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', gap: scale(20), backgroundColor: "white", borderRadius: scale(20), height: scale(170), borderColor: 'black', borderWidth: scale(1), borderStyle: 'dashed', marginBottom: scale(18), width: scale(280) }}>
                                <AntDesign style={{ paddingHorizontal: scale(8), paddingVertical: scale(6), borderRadius: scale(10), backgroundColor: '#74B9F8' }} name="plus" color="#ffffff" size={scale(22)} />
                                <Text style={{ textTransform: 'uppercase' }} color={'#770996'} fontWeight="700" fontSize={scale(16)}>
                                    attach car
                                </Text>
                            </View></TouchableOpacity>
                        <View style={{ marginTop: scale(2), marginBottom: scale(14), alignItems: 'center', justifyContent: 'center', backgroundColor: "white", borderRadius: scale(20), height: scale(65), width: scale(280) }}>
                            <Image style={{ padding: scale(4) }} source={Dubai} />
                        </View>

                        <View style={{ marginTop: scale(10) }}>
                            <Button onPress={() => navigation.navigate('CarVehicle')}
                                // <Button onPress={() => console.log('yes')}
                                title="CONTINUE" color={"#fff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(280)} height={scale(40)} />
                        </View>
                    </View>
                </ScrollView>
            </Background>
        </SafeAreaView>
    )
}