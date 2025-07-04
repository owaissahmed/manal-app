import { View, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { scale } from 'react-native-size-matters';
import AcuraLogo from '../../assets/images/acura-logo.png';
import Apple from '../../assets/images/apple.png';
import Background from '../components/Background';
import Button from '../components/button';
import Text from '../components/Text';
import Feather from 'react-native-vector-icons/Feather';
import TextField from '../components/textinput';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image
import CustomBottomSheet from '../components/BottomSheet';

export default function CarModel({ navigation }) {
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [isSheetYearVisible, setIsSheetYearVisible] = useState(false);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedYears, setSelectedYears] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const colors = [
        '#0F54C4', '#A020F0', '#074722', '#FFFFFF', '#D9D9D9',
        '#565A63', '#000000', '#DDBE77', '#FFDE37', '#F68105',
        '#E72222', '#611212', '#6F1355', '#F085D9', '#A7CDECE3',
        '#EEA811'
    ];

    const carModels = ["Toyota Land Cruiser", "Toyota Camry", "Toyota Corolla", "Nissan Patrol", "Nissan Altima", "Nissan Sunny", "Mitsubishi Pajero", "Mitsubishi Outlander", "Hyundai Tucson", "Hyundai Elantra", "Kia Sportage", "Kia Seltos", "Honda Civic", "Honda Accord", "Chevrolet Tahoe", "Chevrolet Malibu", "Ford Explorer", "Ford Mustang", "Mercedes-Benz G-Class", "BMW X5", "Lexus RX", "Land Rover Defender", "Jeep Wrangler", "Mazda CX-5", "Volkswagen Tiguan", "Audi Q5", "Porsche Cayenne", "Infiniti QX60", "Tesla Model 3", "GMC Yukon"
    ];

    const carYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000
    ];


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
                <View style={{
                    alignItems: 'center',
                    marginTop: scale(60),
                }}>
                    <TouchableOpacity onPress={() => setIsSheetVisible(true)}>
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
                                <Text fontWeight={'700'} fontSize={scale(16)}>{selectedModel ? selectedModel : "Select Model"}</Text></View>
                            <Feather name="chevron-down" color="black" size={(scale(18))} />
                        </View>
                    </TouchableOpacity>
                    <CustomBottomSheet isVisible={isSheetVisible} onClose={() => setIsSheetVisible(false)}>
                        {carModels.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setSelectedModel(item);
                                    setIsSheetVisible(false);
                                }}
                                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}
                            >
                                <Text style={{ fontSize: 16 }}>{item}</Text>
                                {selectedModel === item && (
                                    <Feather name="check" size={20} color="#007bff" />
                                )}
                            </TouchableOpacity>
                        ))}
                    </CustomBottomSheet>
                    <TouchableOpacity onPress={() => setIsSheetYearVisible(true)}>
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
                                <Text fontWeight={'700'} fontSize={scale(16)}>{selectedYears ? selectedYears : "Select Year"}</Text></View>
                            <Feather name="chevron-down" color="black" size={(scale(18))} />
                        </View>
                    </TouchableOpacity>
                    <CustomBottomSheet isVisible={isSheetYearVisible} onClose={() => setIsSheetYearVisible(false)}>
                        {carYears.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setSelectedYears(item);
                                    setIsSheetYearVisible(false);
                                }}
                                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}
                            >
                                <Text style={{ fontSize: 16 }}>{item}</Text>
                                {selectedYears === item && (
                                    <Feather name="check" size={20} color="#007bff" />
                                )}
                            </TouchableOpacity>
                        ))}
                    </CustomBottomSheet>
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
                                {colors.map((color, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => setSelectedColor(color)}
                                        style={{
                                            width: scale(45),
                                            height: scale(45),
                                            elevation:12,
                                            backgroundColor: color,
                                            borderWidth: selectedColor === color ? 3 : 0,
                                            borderColor: selectedColor === color ? '#13418C' : 'transparent',
                                            borderRadius: scale(6),
                                        }}
                                    />
                                ))}</View>
                        </View>
                    </View>
                    <View style={{ marginTop: scale(10), alignItems: 'center' }}>
                        <Button onPress={() => navigation.navigate('ScheduleOrder')}
                            // <Button onPress={() => console.log('yes')}
                            title="Next" color={"#fff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(280)} height={scale(40)} />
                    </View>
                </View>
            </Background>
        </SafeAreaView>
    )
}