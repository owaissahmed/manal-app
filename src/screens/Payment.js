import { View, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useCallback } from 'react';
import { scale, } from 'react-native-size-matters';
import { useFocusEffect } from '@react-navigation/native';
import AcuraLogo from '../../assets/images/acura-logo.png';
import Profile from '../../assets/images/profile.png';
import Background from '../components/Background';
import Button from '../components/button';
import Text from '../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import TextField from '../components/textinput';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image
import CustomModal from '../components/CustomModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Acura from "../../assets/images/acura.png"


export default function Payment({ navigation }) {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
                <View style={{
                    alignItems: 'center',
                    marginTop: scale(70),
                    // marginBottom: scale(10)
                }}>
                    <TouchableOpacity>
                        <View
                            style={{ marginVertical: scale(10), justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', width: scale(280), paddingHorizontal: scale(10), paddingVertical: scale(10), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), }}>
                            <View style={{ justifyContent: 'center', flexDirection: 'row', gap: scale(6) }}>
                                <FontAwesome name="circle-thin" style={{ alignSelf: 'center' }} color="gray" size={(scale(14))} />
                                <Text fontSize={scale(15)} color='#3A3A3A'>Pay by Credit / Debit Card</Text>
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <FontAwesome color="gray" size={(scale(16))} name="credit-card" style={{ alignSelf: 'center' }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={{ marginVertical: scale(10), justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', width: scale(280), paddingHorizontal: scale(10), paddingVertical: scale(10), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), }}>
                            <View style={{ justifyContent: 'center', flexDirection: 'row', gap: scale(6) }}>
                                <FontAwesome name="circle-thin" style={{ alignSelf: 'center' }} color="gray" size={(scale(14))} />
                                <Text fontSize={scale(15)} color='#3A3A3A'>Pay with cash</Text>
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Ionicons color="gray" size={(scale(16))} name="cash" style={{ alignSelf: 'center' }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginVertical: scale(10), width: scale(280), height: scale(70), flexDirection: 'row', paddingHorizontal: scale(5), backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), }}>
                        <TextField
                            fontSize={scale(16)}
                            style={{
                                width: scale(170),
                                borderWidth: 0,
                                alignItems: 'center',
                                height: scale(40),
                                marginVertical: scale(10),
                            }}
                            placeholder='Enter promo code'
                        />
                        <Button onPress={() => navigation.navigate('Payment')} style={{ marginRight: scale(3), borderRadius: scale(5) }}
                            title="Apply" color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(80)} height={scale(30)} />
                    </View>
                    <View >
                        <TextInput
                            placeholder="Other Note"
                            placeholderTextColor={'grey'}
                            multiline
                            numberOfLines={5}
                            textAlignVertical="top" // aligns text to the top for Android
                            style={{
                                paddingHorizontal: scale(16),
                                marginVertical: scale(10),
                                borderWidth: 1,
                                width: scale(280),
                                borderColor: '#13418C',
                                borderRadius: 10,
                                // padding: 10,
                                minHeight: scale(130),
                                color: "black",
                                backgroundColor: '#fff',
                                fontSize: 16,
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: scale(100), paddingBottom: scale(100), paddingTop: scale(20), paddingHorizontal: scale(30), alignItems: "center", alignSelf: 'center', justifyContent: "space-between", width: ("100%"), borderTopStartRadius: scale(20), borderTopEndRadius: scale(20), backgroundColor: 'white',
                    }}>
                    <View>
                        <Octicons name="horizontal-rule" style={{ marginTop: scale(-20) }} color="silver" height={scale(40)} size={(scale(60))} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(280), marginTop: scale(20) }}>
                        <View
                            style={{}}>
                            <View>
                                <Text fontWeight='700' fontSize={scale(16)} color='#3A3A3A'
                                    style={{
                                        marginVertical: scale(3),
                                    }}>
                                    Total
                                </Text>
                                <Text fontWeight='400' fontSize={scale(15)} color='#3A3A3A'>
                                    50.00 AED
                                </Text>
                                <Text fontWeight='400' fontSize={scale(12)} color='#FF1919' style={{ marginTop: scale(-5) }}>
                                    incl. 5%VAT
                                </Text>
                            </View>
                        </View>
                        {/* () => setModalVisible(true) */}
                        <View style={{ marginTop: scale(6), alignSelf: "center", }}>
                            <Button onPress={() => navigation.navigate('ThankYou')} style={{ borderRadius: scale(5) }}
                                title="Finalize order" color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(120)} height={scale(40)} />
                        </View>
                    </View>
                </View>
            </Background >
        </SafeAreaView >
    )
}