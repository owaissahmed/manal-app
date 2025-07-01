import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native';
import Logo from '../../assets/images/logo.png';
import { scale } from 'react-native-size-matters';
import Background from '../components/Background';
import Text from '../components/Text';
import FullCar from '../../assets/images/fullcar.png'
import Week from '../../assets/images/week.png'
import Daily from '../../assets/images/daily.png'
import Year from '../../assets/images/year.png'
import Month from '../../assets/images/month.png'
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/FontAwesome';
import Button from '../components/button';
import { useRoute } from '@react-navigation/native';

export default function FrequencyDetail({ navigation }) {
    const route = useRoute()
    const selectedVehicle = route.params?.Vehicle

    const washPlans = {
        SALOON: [
            {
                id: 1,
                title: 'STANDARD',
                description: '3 times wash per week\n(monthly 12 times)',
                price: '120 AED',
            },
            {
                id: 2,
                title: 'SPECIAL',
                description: '5 times per week',
                price: '200 AED',
            },
            {
                id: 3,
                title: 'ONE TIME',
                description: 'Single wash',
                price: '15 AED',
            },
        ],
        VAN: [
            {
                id: 1,
                title: 'STANDARD',
                description: '3 times wash per week\n(monthly 12 times)',
                price: '120 AED',
            },
            {
                id: 2,
                title: 'SPECIAL',
                description: '5 times per week',
                price: '200 AED',
            },
            {
                id: 3,
                title: 'ONE TIME',
                description: 'Single wash',
                price: '15 AED',
            },
        ],
        SUV: [
            {
                id: 1,
                title: 'STANDARD',
                description: '3 times wash per week\n(monthly 12 times)',
                price: '150 AED',
            },
            {
                id: 2,
                title: 'SPECIAL',
                description: '5 times per week',
                price: '250 AED',
            },
            {
                id: 3,
                title: 'ONE TIME',
                description: 'Single wash',
                price: '20 AED',
            },
        ],
        BIKE: [
            {
                id: 1,
                title: 'STANDARD',
                description: '3 times wash per week\n(monthly 12 times)',
                price: '150 AED',
            },
            {
                id: 2,
                title: 'SPECIAL',
                description: '5 times per week',
                price: '250 AED',
            },
            {
                id: 3,
                title: 'ONE TIME',
                description: 'Single wash',
                price: '20 AED',
            },
        ],
    };

    const selectedPlans = washPlans[selectedVehicle];
    console.log(selectedPlans);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(480)} width={scale(460)} BackgroundImage={FullCar} imageOpacity={0.1}>
                <View
                    style={{
                        // alignItems: 'center',
                        paddingVertical: scale(30),
                    }}
                ><View style={{ marginTop: scale(30), alignSelf: 'center', alignItems: 'center', width: scale(320), height: scale(25), }}>
                        <Text style={{ textTransform: 'uppercase' }} color={'#fff'} fontWeight={900} fontSize={scale(16)}>
                            CHOOSE YOUR PREFERRED Optional
                        </Text>
                    </View>
                    <View style={{ padding: scale(4), flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-around', }}>
                        <Text style={{ textTransform: 'uppercase' }} color={'#13418C'} fontWeight={700} fontSize={scale(20)}>
                            <Text>SERVICE TYPE : <Text color={'#7635AE'}>{selectedVehicle}</Text></Text>
                        </Text>
                    </View>
                </View>
                <View>
                    {selectedPlans.map((plan, index) => (
                        <TouchableOpacity key={index}>
                            <View style={{
                                alignItems: 'center', alignSelf: 'center', width: scale(290), backgroundColor: 'white', height: scale(100), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: scale(15), borderRadius: scale(12),
                                borderWidth: scale(1), borderColor: '#13418C', marginBottom: scale(20)
                            }}>
                                <View>
                                    <Text fontSize={scale(16)} color={'#13418C'} style={{ fontWeight: '700' }}>{plan.id + '. '}{plan.title + '\n'}<Text fontSize={scale(14)} style={{ fontWeight: '400' }}>{plan.description}</Text></Text>
                                </View>
                                <View>
                                    <Text fontSize={scale(16)} style={{ fontWeight: '700' }} color={'#7635AE'}>{plan.price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                {/* <View
                    style={{
                        paddingHorizontal: scale(10), flexDirection: "row", alignItems: "center", alignSelf: 'center', justifyContent: "space-between", marginTop: scale(110), width: ("100%"), paddingHorizontal: scale(20), paddingVertical: scale(20), borderTopStartRadius: scale(10), borderTopEndRadius: scale(10), backgroundColor: 'white',
                    }}>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
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
                    <View style={{ marginTop: scale(6), alignSelf: "center", }}>
                        <Button onPress={() => navigation.navigate('FrequencyDetail')} style={{ borderRadius: scale(5) }}
                            title="Next" color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(100)} height={scale(40)} />
                    </View>
                </View> */}
                <View
                    style={{
                        marginTop: scale(50), paddingBottom: scale(80), paddingTop: scale(20), paddingHorizontal: scale(30), alignItems: "center", alignSelf: 'center', justifyContent: "space-between", width: ("100%"), borderTopStartRadius: scale(20), borderTopEndRadius: scale(20), backgroundColor: 'white',
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
                            <Button onPress={() => navigation.navigate('Location')} style={{ borderRadius: scale(5) }}
                                title="Next" color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(120)} height={scale(40)} />
                        </View>
                    </View>
                </View>
            </Background>
        </SafeAreaView>
    );
}