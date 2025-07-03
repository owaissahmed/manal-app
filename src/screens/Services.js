import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Background from '../components/Background';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import CarWash from '../../assets/images/carWash.png';
import CarSeatClean from '../../assets/images/carSeatClean.png';
import PlusGroup from '../../assets/images/plusGroup.png';
import { s, scale } from 'react-native-size-matters';
import Button from '../components/button';
import Text from '../components/Text';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image
import Footer from '../components/Footer';
const Services = ({ navigation }) => {
    const address = 'Gulshan e Iqbal Karachi';
    const startingAddress = address.substring(0, 12) + '......';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
                <View style={{ flex: 1, alignItems: 'center',justifyContent:"space-between", marginTop: scale(30) }}>
                    <View
                        style={{
                            flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end',marginTop: scale(10), marginRight: scale(15),
                        }}>
                        <Ionicons name="location-outline" color="black" size={(scale(16))} />
                        <Text fontWeight='400' fontSize={scale(16)} color='#13418C'>{startingAddress}</Text>
                        <Feather name="chevron-down" color="black" size={(scale(18))} />
                    </View>
                    <View style={{ gap: scale(20), marginTop: scale(-100) }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CarWash')}>
                            <View
                                style={{
                                   flexDirection:'row',justifyContent:'space-around',paddingHorizontal:scale(10),alignItems:'center', width: scale(280), paddingVertical: scale(20), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(20), backgroundColor: 'white',
                                }}>
                                <Image source={CarWash} style={{ alignSelf: 'center' }} />
                                <Text fontWeight='700' fontSize={scale(22)} color='#13418C'
                                    style={{
                                         marginTop: scale(3),
                                    }}>
                                    Car Washing
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View
                                style={{
                                   flexDirection:'row',justifyContent:'space-around',paddingHorizontal:scale(10),alignItems:'center', width: scale(280), paddingVertical: scale(20), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(20), backgroundColor: 'white',
                                }}><Image source={CarSeatClean} style={{ alignSelf: 'center' }} />
                                <Text fontWeight='700' fontSize={scale(22)} color='#13418C'
                                    style={{
                                        textAlign: 'center', marginTop: scale(3),
                                    }}>
                                    Car Vacumming
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ marginTop:scale(-100), width: scale(280), paddingHorizontal: scale(30), paddingVertical: scale(20), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), backgroundColor: 'white', }}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <View>
                                <Text fontWeight='700' fontSize={scale(16)} color='#13418C'>
                                    BOOK A CAR WASH
                                </Text>
                                <Text fontWeight='400' fontSize={scale(15)} color='#3A3A3A'>
                                    Select your vehicles
                                </Text>
                            </View>
                            <Feather name="chevron-down" color="gray" size={(scale(18))} />
                        </View>
                        <View style={{ marginTop: scale(6), alignSelf: "center", paddingHorizontal: scale(30) }}>
                            <Button onPress={() => navigation.navigate('CarWash')} style={{ borderRadius: scale(5) }}
                                title="ORDER NOW" color={"#ffffff"} fontWeight="700" fontSize={scale(15)} backgroundColor={"#74BAF8"} width={scale(220)} height={scale(40)} />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: scale(20), paddingVertical: scale(5), borderColor: '#13418C', backgroundColor: 'white',
                        }}>
                        <MaterialIcons style={{ padding: scale(4) }} name="notifications-none" color="gray" size={(scale(28))} />
                        <View style={{ marginTop: scale(-30) }}>
                            <TouchableOpacity onPress={() => navigation.navigate('AddCarPhoto')} style={{ alignItems: 'center', }}>
                                <Image source={PlusGroup} />
                                {/* <Feather style={{ backgroundColor: '#1B337C',padding:scale(6),borderRadius:scale(100)}} name="plus" color="white" size={28} /> */}
                                <Text fontWeight='700' fontSize={scale(20)} color='#13418C' style={{
                                    textAlign: 'center',
                                }}>Add Car</Text>
                            </TouchableOpacity>
                        </View>
                        <FontAwesome6 style={{ padding: scale(6) }} name="bars" color="gray" size={(scale(22))} />
                    </View>
                </View>
                {/* <Footer /> */}
            </Background>
        </SafeAreaView>
    );
};

export default Services;
