import { View, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import AcuraLogo from '../../assets/images/acura-logo.png';
import Apple from '../../assets/images/apple.png';
import Background from '../components/Background';
import Button from '../components/button';
import Text from '../components/Text';
import Feather from 'react-native-vector-icons/Feather';
import TextField from '../components/textinput';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image

export default function CarModel({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
                <View style={{
                    alignItems: 'center',
                    marginTop: scale(50),
                    marginBottom: scale(10)
                }}></View>
                <TouchableOpacity onPress={() => navigation.navigate("CarModel")}>
                    <View style={{
                        alignSelf: 'center', alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderRadius: scale(12),
                        borderWidth: scale(1), borderColor: '#13418C',
                        paddingVertical: 10,
                        paddingHorizontal: scale(20),
                        marginBottom: scale(15), backgroundColor: 'white', width: scale(280),
                    }}>
                        <View style={{ gap: scale(4), alignItems: 'center', flexDirection: 'row' }} >
                            <Text fontWeight={'700'} fontSize={scale(16)}>Model</Text></View>
                        <Feather name="chevron-down" color="black" size={(scale(18))} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("CarModel")}>
                    <View style={{
                        alignSelf: 'center', alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: scale(6),
                        borderRadius: scale(12),
                        borderWidth: scale(1), borderColor: '#13418C',
                        paddingVertical: 10,
                        paddingHorizontal: scale(20),
                        marginBottom: 15, backgroundColor: 'white', width: scale(280),
                    }}>
                        <View style={{ gap: scale(4), alignItems: 'center', flexDirection: 'row' }} >
                            <Text fontWeight={'700'} fontSize={scale(16)}>Year</Text></View>
                        <Feather name="chevron-down" color="black" size={(scale(18))} />
                    </View>
                </TouchableOpacity>
                <View>
                    <View style={{
                        alignSelf: 'center',
                        // flexDirection: 'row',

                        justifyContent: 'center',
                        marginVertical: scale(6),
                        borderRadius: scale(12),
                        borderWidth: scale(1), borderColor: '#13418C',
                        paddingVertical: scale(15),
                        paddingHorizontal: scale(28),
                        marginBottom: 15, backgroundColor: 'white', width: scale(280),
                    }}>
                        <View style={{ marginTop: scale(10) }} >
                            <Text style={{ justifyContent: 'flex-start' }} fontWeight={'700'} fontSize={scale(16)}>Select Color</Text>
                        </View>
                        <View style={{ gap: scale(16), marginVertical: scale(8), paddingVertical: scale(8), justifyContent: 'center', flexDirection: 'row', alignSelf: 'center', width: scale(260), flexWrap: 'wrap' }}>
                            <TouchableOpacity style={{ backgroundColor: '#0F54C4', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#13418C', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#074722', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ elevation: 10, backgroundColor: '#FFFFFF', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#D9D9D9', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#565A63BF', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#000000', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#DDBE77', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#FFDE37', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#F68105', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#E72222', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#611212', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#6F1355', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#F085D9', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#A7CDECE3', width: scale(45), height: scale(45) }}></TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#EEA811', width: scale(45), height: scale(45) }}></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: scale(10),alignItems:'center' }}>
                    <Button onPress={() => navigation.navigate('CarVehicle')}
                        // <Button onPress={() => console.log('yes')}
                        title="Next" color={"#fff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(280)} height={scale(40)} />
                </View>
            </Background>
        </SafeAreaView>
    )
}