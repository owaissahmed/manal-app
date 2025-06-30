import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native';
import Logo from '../../assets/images/logo.png';
import { scale } from 'react-native-size-matters';
import Background from '../components/Background';
import Text from '../components/Text';
import FullCar from '../../assets/images/fullcar.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Button from '../components/button';
const servicesByVehicle = {
    SALOON: [
        { id: 'saloon_1', title: 'Car Washing', price: '30.00 AED', icon: Logo },
        { id: 'saloon_2', title: 'Interior Cleaning', price: '10.00 AED', icon: Logo },
        { id: 'saloon_3', title: 'Extra Interior Cleaning', price: '30.00 AED', icon: Logo },
        { id: 'saloon_4', title: 'Super Shine', price: '25.00 AED', icon: Logo, },
        { id: 'saloon_5', title: 'Car Washing', price: '30.00 AED', icon: Logo },
        { id: 'saloon_6', title: 'Interior Cleaning', price: '10.00 AED', icon: Logo },
        { id: 'saloon_7', title: 'Interior Cleaning', price: '10.00 AED', icon: Logo },

    ],
    SUV: [
        { id: 'suv_1', title: 'SUV Washing', price: '40.00 AED', icon: Logo },
        // Add other services...
    ],
    VAN: [
        { id: 'van_1', title: 'Van Washing', price: '45.00 AED', icon: Logo },
    ],
    BIKE: [
        { id: 'bike_1', title: 'Bike Wash', price: '15.00 AED', icon: Logo, }
    ],
};

const vehicleTypes = ['SALOON', 'SUV', 'VAN', 'BIKE'];

export default function CarWash({navigation}) {
    const [selectedVehicle, setSelectedVehicle] = useState('SALOON');
    const [selectedServiceIds, setSelectedServiceIds] = useState([]);


    const toggleService = (id) => {
        setSelectedServiceIds((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );

    };

    const renderService = ({ item }) => {
        const isSelected = selectedServiceIds.includes(item.id);

        return (
            <TouchableOpacity
                onPress={() => toggleService(item.id)}
                style={[
                    {
                        flex: 1,
                        margin: scale(4),
                        backgroundColor: '#fff',
                        padding: scale(8),
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: "center",
                        elevation: 3,
                    },
                ]}
            >
                <Image source={item.icon} style={{ width: scale(50), height: scale(50) }} />
                <Text color={'#13418C'} fontWeight={700} fontSize={scale(14)} style={{ paddingVertical: scale(6) }}>{item.price}</Text>
                <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: 'center', }}>
                    <View style={{ width: scale('100') }}><Text color={'#13418C'} fontWeight={700} fontSize={scale(14)} style={{ textAlign: 'center' }}>{item.title}</Text></View>
                    {isSelected && <Ionicons style={{ padding: scale(2) }} name="checkmark-circle-outline" color="#3A3A3A" size={scale(26)} />}</View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(480)} width={scale(460)} BackgroundImage={FullCar} imageOpacity={0.1}>
                <View
                    style={{
                        // alignItems: 'center',
                        paddingVertical: scale(30),
                    }}
                ><View style={{ flexDirection: 'row', marginTop: scale(20), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'white', width: scale(320), height: scale(45), }}>
                        <View></View>
                        <Text style={{ textTransform: 'uppercase' }} color={'#3A3A3A'} fontWeight={700} fontSize={scale(16)}>
                            subscribe & save up to 50%
                        </Text>
                        <FontAwesome style={{ padding: scale(6) }} name="arrow-right" color="#3A3A3A" size={scale(20)} />
                    </View>
                    <View style={{ padding: scale(4), flexDirection: 'row', marginTop: scale(10), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-around', }}>
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
                        marginVertical: scale(6),
                        borderRadius: scale(5),
                        paddingVertical: scale(6),
                        marginBottom: 15, backgroundColor: 'white', width: scale(320),
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

                    {/* Services */}
                    <FlatList
                        data={servicesByVehicle[selectedVehicle]}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        // backgroundColor={'lightblue'}
                        scrollEnabled
                        height={selectedServiceIds.length > 0 ? scale(400) : scale(500)}
                        renderItem={renderService}
                        contentContainerStyle={{ paddingHorizontal: scale(10) }}
                    />
                </View>
                {selectedServiceIds.length > 0 &&
                    <View
                        style={{
                            paddingHorizontal: scale(10), flexDirection: "row", alignItems: "center", alignSelf: 'center', justifyContent: "space-between", marginTop: scale(-20), width: ("100%"), paddingHorizontal: scale(20), paddingVertical: scale(20), borderTopStartRadius: scale(10), borderTopEndRadius: scale(10), backgroundColor: 'white',
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
                            <Button onPress={() => navigation.navigate('AddCar')} style={{ borderRadius: scale(5) }}
                                title="Next" color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(100)} height={scale(40)} />
                        </View>
                    </View>
                }
            </Background>
        </SafeAreaView>
    );
}
