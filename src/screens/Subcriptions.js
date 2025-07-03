import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native';
import { scale } from 'react-native-size-matters';
import Background from '../components/Background';
import Text from '../components/Text';
import FullCar from '../../assets/images/fullcar.png'
import Week from '../../assets/images/week.png'
import Daily from '../../assets/images/daily.png'
import Year from '../../assets/images/year.png'
import Month from '../../assets/images/month.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome';
import Button from '../components/button';
import Footer from '../components/Footer';
export default function Subcriptions({ navigation }) {
    const vehicleTypes = ['SALOON', 'SUV', 'VAN', 'BIKE'];
    const [selectedVehicle, setSelectedVehicle] = useState('SALOON');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(480)} width={scale(460)} BackgroundImage={FullCar} imageOpacity={0.1}>
                <View style={{ marginTop: scale(30), flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', marginTop: scale(20), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white', width: scale(320), height: scale(45), }}>
                        <Text style={{ textTransform: 'uppercase' }} color={'#3A3A3A'} fontWeight={700} fontSize={scale(16)}>
                            subscribe & save up to 50%
                        </Text>
                        <FontAwesome style={{ padding: scale(6) }} name="arrow-right" color="#3A3A3A" size={scale(20)} />
                    </View>
                    <View style={{ padding: scale(4), flexDirection: 'row', marginVertical: scale(6), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-around', }}>
                        <Feather style={{ padding: scale(4) }} name="plus" color="#13418C" size={scale(22)} />
                        <Text style={{ textTransform: 'uppercase' }} color={'#13418C'} fontWeight={700} fontSize={scale(20)}>
                            Add a car
                        </Text>
                    </View>
                    {/* Vehicle Type Tabs */}
                    <View style={{
                        alignSelf: 'center', alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: scale(6),
                        borderRadius: scale(5),
                        paddingVertical: scale(6), backgroundColor: 'white', width: scale(320),
                    }}>
                        {vehicleTypes.map((type) => (
                            <TouchableOpacity
                                key={type}
                                style={[
                                    {
                                        paddingHorizontal: scale(10),
                                        paddingVertical: 8,
                                        borderRadius: 20,
                                        backgroundColor: '#ffffff',
                                        borderColor: 'black',
                                        borderWidth: 1
                                    },
                                    selectedVehicle === type && { backgroundColor: '#A188C0', borderColor: '#fff' },
                                ]}
                                onPress={() => setSelectedVehicle(type)}
                            >
                                <Text color={'#3A3A3A'} fontWeight={700} fontSize={scale(14)}
                                    style={[
                                        selectedVehicle === type && { color: 'white' },
                                        { textTransform: "uppercase" }

                                    ]}
                                >
                                    {type}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={{ marginBottom: scale(30) }}>
                        <TouchableOpacity>
                            <View style={{
                                alignItems: 'center', alignSelf: 'center', width: scale(290), backgroundColor: 'white', height: scale(80), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: scale(10), borderRadius: scale(12),
                                borderWidth: scale(1), borderColor: '#13418C', marginBottom: scale(5)
                            }}>
                                <Image source={Daily} style={{ width: scale(40), height: scale(40) }} />
                                <Text fontSize={scale(24)} style={{ alignSelf: 'center', fontWeight: '700' }} color={'#13418C'}>One Time</Text>
                                <FontAwesome name='plus-square-o' size={scale(30)} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                alignItems: 'center', alignSelf: 'center', width: scale(290), backgroundColor: 'white', height: scale(80), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: scale(10), borderRadius: scale(12),
                                borderWidth: scale(1), borderColor: '#13418C', marginVertical: scale(5)
                            }}>
                                <Image source={Week} style={{ width: scale(40), height: scale(40) }} />
                                <Text fontSize={scale(24)} style={{ alignSelf: 'center', fontWeight: '700' }} color={'#13418C'}>Weekly</Text>
                                <FontAwesome name='plus-square-o' size={scale(30)} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                alignItems: 'center', alignSelf: 'center', width: scale(290), backgroundColor: 'white', height: scale(80), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: scale(10), borderRadius: scale(12),
                                borderWidth: scale(1), borderColor: '#13418C', marginVertical: scale(5)
                            }}>
                                <Image source={Month} style={{ width: scale(40), height: scale(40) }} />
                                <Text fontSize={scale(24)} style={{ alignSelf: 'center', fontWeight: '700' }} color={'#13418C'}>Monthly</Text>
                                <FontAwesome name='plus-square-o' size={scale(30)} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                alignItems: 'center', alignSelf: 'center', width: scale(290), backgroundColor: 'white', height: scale(80), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: scale(10), borderRadius: scale(12),
                                borderWidth: scale(1), borderColor: '#13418C', marginVertical: scale(5)
                            }}>
                                <Image source={Year} style={{ width: scale(40), height: scale(40) }} />
                                <Text fontSize={scale(24)} style={{ alignSelf: 'center', fontWeight: '700' }} color={'#13418C'}>Annual</Text>
                                <FontAwesome name='plus-square-o' size={scale(30)} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Footer TotalPrice={'50.00 AED'} Tax={'Incl. 5% VAT'} ButtonText={'Next'} onPress={() => navigation.navigate('FrequencyDetail', { Vehicle: selectedVehicle })} />
                </View>
            </Background>
        </SafeAreaView >
    );
}