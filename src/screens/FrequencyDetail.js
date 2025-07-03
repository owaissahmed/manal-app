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
import Footer from '../components/Footer';
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
                <View style={{ marginTop: scale(30), flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ marginTop: scale(30), alignSelf: 'center', alignItems: 'center', width: scale(320), gap: scale(6) }}>
                        <Text style={{ textTransform: 'uppercase' }} color={'#fff'} fontWeight={900} fontSize={scale(16)}>
                            CHOOSE YOUR PREFERRED Optional
                        </Text>
                        <Text style={{ textTransform: 'uppercase' }} color={'#13418C'} fontWeight={700} fontSize={scale(20)}>
                            <Text>SERVICE TYPE : <Text color={'#7635AE'}>{selectedVehicle}</Text></Text>
                        </Text>
                    </View>
                    <View style={{ marginBottom: scale(30) }}>
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
                    <Footer TotalPrice={'50.00 AED'} Tax={'Incl. 5% VAT'} ButtonText={'Next'} onPress={() => navigation.navigate('Location')} />
                </View>
            </Background>
        </SafeAreaView>
    );
}