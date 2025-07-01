import { View, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
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


export default function ScheduleOrder({ navigation }) {
    useFocusEffect(useCallback(() => {
        setChooseCar(true);
    }, []))


    const [modalVisible, setModalVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const [chooseCar, setChooseCar] = useState(true);

    const name = 'Ali Khan';
    const startingName = name.substring(0, 2) + '...';

    const days = [
        { key: 'MON', label: 'Mon', date: '01' },
        { key: 'TUE', label: 'Tue', date: '02' },
        { key: 'WED', label: 'Wed', date: '03' },
        { key: 'THU', label: 'Thu', date: '04' },
        { key: 'FRI', label: 'Fri', date: '05' },
    ];

    const address = [
        { label: 'HOME', id: '01' },
        { label: 'OFFICE', id: '02' },
        { label: 'OTHERS', id: '03' },
    ];


    const timeSlotsByDay = {
        MON: [
            { id: 'mon_1', time: '12:00 PM' },
            { id: 'mon_2', time: '02:00 PM' },
            { id: 'mon_3', time: '04:00 PM' },
        ],
        TUE: [
            { id: 'tue_1', time: '10:00 AM' },
            { id: 'tue_2', time: '01:00 PM' },
            { id: 'tue_3', time: '05:00 PM' },
        ],
        WED: [
            { id: 'wed_1', time: '09:00 AM' },
            { id: 'wed_2', time: '12:00 PM' },
        ],
        THU: [
            { id: 'thu_1', time: '11:00 AM' },
            { id: 'thu_2', time: '03:00 PM' },
        ],
        FRI: [
            { id: 'fri_1', time: '10:00 AM' },
            { id: 'fri_2', time: '01:00 PM' },
        ],
    };

    const [selectedDay, setSelectedDay] = useState('MON');
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleDaySelect = (dayKey) => {
        setSelectedDay(dayKey);
        setSelectedTime(null); // Reset time when day changes
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleAddressSelect = (addressKey) => {
        setSelectedAddress(addressKey);
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
                <View style={{
                    alignItems: 'center',
                    marginTop: scale(50),
                    // marginBottom: scale(10)
                }}>
                    <View style={{ marginVertical: scale(10), flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingVertical: scale(10), width: scale(280) }}>
                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderRadius: scale(20),
                            borderWidth: scale(1), borderColor: '#13418C',
                            backgroundColor: 'white',
                            width: scale(130), height: scale(135),
                        }}>
                            <View style={{ alignItems: 'center', gap: scale(4) }} >
                                <Text fontWeight={'700'} style={{ color: '#13418C' }} fontSize={scale(14)}>Auto-Designation</Text>
                                <Text style={{ textAlign: 'center', paddingHorizontal: scale(4) }} fontSize={scale(13)}>We'll designate you the best </Text>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderRadius: scale(20),
                            borderWidth: scale(1), borderColor: '#13418C',
                            backgroundColor: 'white',
                            width: scale(130), height: scale(135),
                        }}>
                            <View style={{ gap: scale(4), alignItems: 'center', justifyContent: 'center' }} >
                                <Image source={Profile} />
                                <View style={{ flexDirection: 'row', marginTop: scale(4), alignItems: 'center', gap: scale(2) }}>
                                    <Text fontWeight={'500'} fontSize={scale(13)}>{startingName}</Text>
                                    <AntDesign name="star" color="#FFDE37" size={(scale(18))} />
                                    <Text fontWeight={'500'} fontSize={scale(13)}>3.8</Text>
                                </View>
                                <Text style={{ marginTop: scale(-2) }} fontWeight={'500'} fontSize={scale(12)}>View Details</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{ marginBottom: scale(10), justifyContent: 'center', backgroundColor: 'white', width: scale(280), paddingHorizontal: scale(10), paddingVertical: scale(10), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), }}>
                        <View
                            style={{ flexDirection: 'row', gap: scale(6) }}>
                            <View>
                                <AntDesign name="pushpin" style={{ padding: scale(4) }} color="gray" size={(scale(18))} />
                            </View>
                            <View style={{ paddingHorizontal: scale(6), gap: scale(2), width: scale(220) }}>
                                <Text fontWeight='700' fontSize={scale(16)}
                                    style={{
                                        // marginTop: scale(3),
                                    }}>
                                    Date & Time</Text>
                                <Text fontWeight='400' fontSize={scale(15)} color='#3A3A3A'>
                                    When would you prefer your order ?</Text>
                            </View>
                        </View>
                    </View>

                    <ScrollView
                        contentContainerStyle={{ marginVertical: scale(12) }}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Day selector */}
                        <FlatList
                            horizontal
                            data={days}
                            keyExtractor={(item) => item.key}
                            contentContainerStyle={{ gap: scale(6), width: scale(280), justifyContent: 'center' }}
                            renderItem={({ item }) => {
                                const isSelected = selectedDay === item.key;
                                return (
                                    <TouchableOpacity
                                        onPress={() => handleDaySelect(item.key)}
                                        style={{
                                            justifyContent: 'center',
                                            backgroundColor: isSelected ? '#A188C0' : '#fff',
                                            // paddingVertical: 10,
                                            // paddingHorizontal: 14,
                                            borderRadius: 20,
                                            // marginRight: 10,
                                            borderColor: isSelected ? "#A188C0" : '#13418C',
                                            borderWidth: 1,
                                            alignItems: 'center',
                                            height: scale(45),
                                            width: scale(50),
                                            // width:scale
                                        }}
                                    >
                                        <Text color={isSelected ? '#fff' : '#3A3A3A'}>{item.label}</Text>
                                        <Text style={{ fontWeight: '700' }} fontSize={scale(14)} color={isSelected ? '#fff' : '#3A3A3A'}>{item.date}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />

                        {/* Time slots */}
                        {selectedDay && (
                            <>
                                <FlatList
                                    horizontal
                                    data={timeSlotsByDay[selectedDay] || []}
                                    keyExtractor={(item) => item.id}
                                    contentContainerStyle={{ gap: scale(10), width: scale(280), justifyContent: 'center', marginTop: scale(15) }}
                                    renderItem={({ item }) => {
                                        const isSelected = selectedTime === item.time;
                                        return (
                                            <TouchableOpacity
                                                onPress={() => handleTimeSelect(item.time)}
                                                style={{
                                                    justifyContent: 'center',
                                                    backgroundColor: isSelected ? '#A188C0' : '#fff',
                                                    // paddingVertical: 10,
                                                    // paddingHorizontal: 14,
                                                    borderRadius: 20,
                                                    // marginRight: 10,
                                                    borderColor: isSelected ? "#A188C0" : '#13418C',
                                                    borderWidth: 1,
                                                    alignItems: 'center',
                                                    height: scale(30),
                                                    width: scale(85),
                                                    // width:scale
                                                }}
                                            >
                                                <Text style={{ color: isSelected ? '#fff' : '#3A3A3A', fontWeight: '500' }}>
                                                    {item.time}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    }}
                                />
                            </>
                        )}
                    </ScrollView>
                    <View
                        style={{ justifyContent: 'center', backgroundColor: 'white', width: scale(280), paddingHorizontal: scale(10), paddingVertical: scale(10), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), }}>
                        <View
                            style={{ flexDirection: 'row', gap: scale(6) }}>
                            <View style={{ justifyContent: 'center' }}>
                                <FontAwesome name="circle-thin" style={{ padding: scale(4) }} color="gray" size={(scale(16))} />
                            </View>
                            <View style={{ paddingHorizontal: scale(6), gap: scale(2), width: scale(200), }}>
                                <Text fontWeight='700' fontSize={scale(16)}
                                    style={{
                                        color: '#13418C',
                                    }}>
                                    Flexi Order<Text style={{ color: "#FF1919" }}> (4% off)</Text></Text>
                                <Text fontSize={scale(15)} color='#3A3A3A'>
                                    Delivery Anytime during working hours</Text>
                            </View>
                        </View>
                    </View>
                    {!modalVisible && !profileVisible && !chooseCar &&(
                        <View
                            style={{
                                marginTop: scale(10), paddingBottom: scale(100), paddingHorizontal: scale(30), alignItems: "center", alignSelf: 'center', justifyContent: "space-between", width: ("100%"), paddingVertical: scale(20), borderTopStartRadius: scale(20), borderTopEndRadius: scale(20), backgroundColor: 'white',
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
                                    <Button onPress={() => navigation.navigate('Payment')} style={{ borderRadius: scale(5) }}
                                        title="Next" color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(100)} height={scale(40)} />
                                </View>
                            </View>
                        </View>
                  )  }

                    <CustomModal
                        // height={scale(400)}
                        width={scale(300)}
                        // ScrollHeight={scale(800)}
                        visible={chooseCar}
                        closeIcon
                        backgroundColor={'#FFFFFF'}
                        borderWidth={scale(1)}
                        borderRadius={scale(12)}
                        borderColor={'black'}
                        onClose={() => setChooseCar(false)}
                    // imageSource={CarSport}
                    // message="please add your car to complete your order"
                    >
                        <View style={{ marginTop: scale(10), marginBottom: scale(20) }}>
                            <Text fontWeight='700' fontSize={scale(24)} color='#770996' style={{ textTransform: 'uppercase', padding: scale(4) }}>
                                choose your car(s):
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: scale(10), alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: "white", borderRadius: scale(20), height: scale(90), width: scale(280) }}>
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
                        <View style={{ marginVertical: scale(20) }}>
                            <Button
                                onPress={() => {
                                    setChooseCar(false)
                                    setModalVisible(true);
                                     // or another screen
                                }}
                                title="DONE"
                                color="#fff"
                                fontWeight="700"
                                fontSize={scale(16)}
                                backgroundColor="#72BBFA"
                                width={scale(260)}
                                height={scale(40)}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign style={{ alignSelf: 'center' }} name="plus" color="#8828A3" size={scale(22)} />
                            <View>
                                <Text fontWeight='700' fontSize={scale(20)} color='#770996' style={{ textTransform: 'uppercase', padding: scale(4) }}>
                                    Add a Car
                                </Text>
                            </View>
                        </View>
                    </CustomModal>

                    <CustomModal
                        width={scale(300)}
                        backgroundColor={'#fff'}
                        // borderWidth={scale(3)}
                        // borderRadius={scale(12)}
                        // borderColor={'#3A3A3A69'}
                        visible={modalVisible}
                    >

                        <View style={{ marginTop: scale(10) }}>
                            <View style={{ alignItems: 'center' }}>
                                <Octicons name="horizontal-rule" style={{ marginTop: scale(-20) }} color="#770996" height={scale(40)} size={(scale(60))} />
                            </View>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(60), alignItems: 'center', flexDirection: 'row' }} >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}><Ionicons name="location-outline" color="grey" size={(scale(16))} />
                                            <Text fontSize={scale(16)} color={"grey"}>  Your Current location</Text></View>
                                        <Feather name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <Text fontWeight='700' fontSize={scale(16)} color='#3A3A3A' style={{ padding: scale(4) }}>
                                Additional Address Details
                            </Text>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(45), alignItems: 'center', flexDirection: 'row' }} >
                                        <Text fontSize={scale(16)} color={"grey"}>Building Name/Street</Text>
                                        <Feather style={{}} name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(45), alignItems: 'center', flexDirection: 'row' }} >
                                        <Text fontSize={scale(16)} color={"grey"}>Villa/Apartment Number</Text>
                                        <Feather style={{}} name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(45), alignItems: 'center', flexDirection: 'row' }} >
                                        <Text fontSize={scale(16)} color={"grey"}>Notes</Text>
                                        <Feather style={{}} name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text fontWeight='700' fontSize={scale(15)} color='#3A3A3A' style={{ padding: scale(4) }}>
                                    Additional Address Details (Optional)
                                </Text>
                            </View>
                            <FlatList
                                style={{ marginVertical: scale(5) }}
                                horizontal
                                data={address}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ width: scale(260), justifyContent: 'space-between', }}
                                renderItem={({ item }) => {
                                    const isSelected = selectedAddress === item.id;
                                    return (
                                        <TouchableOpacity
                                            onPress={() => handleAddressSelect(item.id)}
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: isSelected ? '#A188C0' : '#fff',
                                                borderRadius: 20,
                                                borderColor: isSelected ? "#A188C0" : '#13418C',
                                                borderWidth: 1,
                                                height: scale(35),
                                                width: scale(75),
                                            }}
                                        >
                                            <Text color={isSelected ? '#fff' : '#3A3A3A'}>{item.label}</Text>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: scale(10) }}>
                                <Button
                                    onPress={() => {
                                        setModalVisible(false);
                                        setProfileVisible(true); // open second modal immediately
                                    }}
                                    title="Skip"
                                    color="#fff"
                                    fontWeight="700"
                                    fontSize={scale(16)}
                                    backgroundColor="#72BBFA"
                                    width={scale(120)}
                                    height={scale(40)}
                                />
                                <Button
                                    onPress={() => {
                                        setModalVisible(false);
                                        setProfileVisible(true);
                                        // navigation.navigate('AddCarPhoto'); // or another screen
                                    }}
                                    title="Next"
                                    color="#fff"
                                    fontWeight="700"
                                    fontSize={scale(16)}
                                    backgroundColor="#72BBFA"
                                    width={scale(120)}
                                    height={scale(40)}
                                />
                            </View>
                        </View>

                        {/* </View> */}
                    </CustomModal>
                    <CustomModal
                        closeIcon
                        onClose={() => setProfileVisible(false)}
                        width={scale(300)}
                        backgroundColor={'#fff'}
                        // borderWidth={scale(3)}
                        borderRadius={scale(12)}
                        // borderColor={'#3A3A3A69'}
                        visible={profileVisible}
                    >

                        <View style={{ marginTop: scale(10) }}>
                            <View>
                                <Text fontWeight='700' fontSize={scale(24)} color='#3A3A3A' style={{ paddingHorizontal: scale(4) }}>
                                    0123456789
                                </Text>
                                <Text fontWeight='700' fontSize={scale(18)} color='#70BEFD' style={{ paddingHorizontal: scale(4) }}>
                                    Complete Profile
                                </Text>
                            </View>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(45), alignItems: 'center', flexDirection: 'row' }} >
                                        <Text fontSize={scale(16)} color={"grey"}>My Rides</Text>
                                        <Feather style={{}} name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(45), alignItems: 'center', flexDirection: 'row' }} >
                                        <Text fontSize={scale(16)} color={"grey"}>My Orders</Text>
                                        <Feather style={{}} name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(45), alignItems: 'center', flexDirection: 'row' }} >
                                        <Text fontSize={scale(16)} color={"grey"}>Payment</Text>
                                        <Feather style={{}} name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(45), alignItems: 'center', flexDirection: 'row' }} >
                                        <Text fontSize={scale(16)} color={"grey"}>Content</Text>
                                        <Feather style={{}} name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ marginVertical: scale(10), }}>
                                    <View style={{ width: scale(260), paddingHorizontal: scale(10), justifyContent: 'space-between', backgroundColor: 'white', borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), height: scale(45), alignItems: 'center', flexDirection: 'row' }} >
                                        <Text fontSize={scale(16)} color={"grey"}>FAQs</Text>
                                        <Feather style={{}} name="chevron-right" color="grey" size={(scale(18))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* </View> */}
                    </CustomModal>
                </View>
            </Background >
        </SafeAreaView >
    )
}