import { View, Text, SafeAreaView, Image } from 'react-native';
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

const Services = ({ navigation }) => {
    const address = 'Gulshan e Iqbal Karachi';
    const startingAddress = address.substring(0, 12) + '......';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background imageOpacity={0.1}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', marginTop: scale(30) }}>
                    <View
                        style={{
                            flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginRight: scale(15), paddingTop: scale(10)
                        }}>
                        <Ionicons name="location-outline" color="black" size={20} />
                        <Text style={{fontFamily: 'InterVariableFont', color: '#13418C' }}>{startingAddress}</Text>
                        <Feather name="chevron-down" color="black" size={22} />
                    </View>
                    <View style={{ gap: scale(15), marginBottom: scale(10) }}>
                        <View
                            style={{
                                width: scale(175), paddingVertical: scale(16), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(20), backgroundColor: 'white',
                            }}>
                            <Image source={CarWash} style={{ alignSelf: 'center' }} />
                            <Text
                                style={{
                                    fontFamily: 'InterVariableFont', fontSize: scale(22), fontWeight: '700', textAlign: 'center', color: '#1B337C', marginTop: scale(3),
                                }}>
                                Car {'\n'}Washing
                            </Text>
                        </View>
                        <View
                            style={{ width: scale(175), paddingVertical: scale(16), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(20), backgroundColor: 'white', }}>
                            <Image source={CarSeatClean} style={{ alignSelf: 'center' }} />
                            <Text
                                style={{
                                    fontFamily: 'InterVariableFont', fontSize: scale(22), fontWeight: '700', color: '#1B337C', textAlign: 'center', marginTop: scale(3),
                                }}>
                                Car{'\n'}Vacumming
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ width: scale(280), paddingHorizontal: scale(20), paddingVertical: scale(10), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(20), backgroundColor: 'white', }}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <View>
                                <Text
                                    style={{
                                        fontFamily: 'InterVariableFont', fontSize: scale(14), fontWeight: '700', color: '#1B337C', marginTop: scale(3),
                                    }}>
                                    BOOK A CAR WASH
                                </Text>
                                <Text
                                    style={{ fontFamily: 'InterVariableFont', fontSize: scale(13), }}>
                                    Select your vehicles
                                </Text>
                            </View>
                            <Feather name="chevron-down" color="black" size={22} />
                        </View>

                        <View style={{ marginTop: scale(6), alignSelf: 'center' }}>
                            <Button backgroundColor={'#74BAF8'} textStyle={{ color: 'white' }} onPress={() => navigation.navigate('CarWash')} title="ORDER NOW" width={scale(250)} height={scale(40)} />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', alignSelf: 'center', paddingHorizontal: scale(20), paddingVertical: scale(5), borderColor: '#13418C', backgroundColor: 'white',
                        }}>
                        <MaterialIcons style={{ padding: scale(4) }} name="notifications-none" color="gray" size={32} />
                        <View style={{ alignItems: 'center', marginTop: scale(-15) }}>
                            <Image source={PlusGroup} />
                            {/* <Feather style={{ backgroundColor: '#1B337C',padding:scale(6),borderRadius:scale(100)}} name="plus" color="white" size={28} /> */}
                            <Text style={{
                                fontFamily: 'InterVariableFont', fontSize: scale(18), fontWeight: '700', textAlign: 'center', color: '#1B337C',
                            }}>Add Car</Text>
                        </View>
                        <FontAwesome6 style={{ padding: scale(6) }} name="bars" color="gray" size={26} />
                    </View>



                </View>
            </Background>
        </SafeAreaView>
    );
};

export default Services;
