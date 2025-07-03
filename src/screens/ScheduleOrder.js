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
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Acura from "../../assets/images/acura.png"
import Footer from '../components/Footer';
import CalendarModal from '../components/Calender';
import CustomBottomSheet from '../components/BottomSheet';
// import Dropdown from '../components/Dropdown';
export default function ScheduleOrder({ navigation }) {
    useFocusEffect(useCallback(() => {
        setChooseCar(true);
    }, []))
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const [chooseCar, setChooseCar] = useState(true);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [isSheetVisible, setIsSheetVisible] = useState(false);

    const name = 'Ali Khan';
    const startingName = name.substring(0, 2) + '...';

    const handleSave = (date) => {
        setSelectedDate(date);      // ⬅️ Save the selected date
        setShowCalendar(false);     // ⬅️ Close the calendar modal
    };

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };



    const address = [
        { label: 'HOME', id: '01' },
        { label: 'OFFICE', id: '02' },
        { label: 'OTHERS', id: '03' },
    ];





    const handleAddressSelect = (addressKey) => {
        setSelectedAddress(addressKey);
    };

    const times = [
        "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
        "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
        "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"
    ]


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
                <View style={{ marginTop: scale(30), flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
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
                        style={{ marginTop: scale(-120), justifyContent: 'center', backgroundColor: 'white', width: scale(280), paddingHorizontal: scale(10), paddingVertical: scale(10), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), }}>
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
                    <View style={{ marginTop: scale(-100), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: scale(280), }}>
                        <TouchableOpacity onPress={() => setShowCalendar(true)}>
                            <View style={{ backgroundColor: 'white', borderRadius: scale(10), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: scale(10), width: scale(130) }}>
                                <Text color={"#13418C"} fontWeight="700" fontSize={scale(14)}
                                >{selectedDate ? formatDate(selectedDate) : 'Select Date'}</Text>
                                <Fontisto name="date" color="#13418C" size={(scale(16))} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsSheetVisible(true)} >
                            <View style={{ backgroundColor: 'white', borderRadius: scale(10), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: scale(10), width: scale(130) }}>
                                <Text color={"#13418C"} fontWeight="700" fontSize={scale(14)}
                                >{selectedTime ? selectedTime : "Select Time"}</Text>
                                <Fontisto name="clock" color="#13418C" size={(scale(16))} />
                            </View>
                        </TouchableOpacity>
                        {/* ⬇️ Calendar modal with handlers */}
                        <CalendarModal
                            visible={showCalendar}
                            onClose={() => setShowCalendar(false)}
                            onSave={handleSave}
                        />
                        <CustomBottomSheet isVisible={isSheetVisible} onClose={() => setIsSheetVisible(false)}>
                            {times.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        setSelectedTime(item);
                                        setIsSheetVisible(false);
                                    }}
                                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}
                                >
                                    <Text style={{ fontSize: 16 }}>{item}</Text>
                                    {selectedTime === item && (
                                        <Feather name="check" size={20} color="#007bff" />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </CustomBottomSheet>
                    </View>
                    <View
                        style={{ marginTop: scale(-100), justifyContent: 'center', backgroundColor: 'white', width: scale(280), paddingHorizontal: scale(10), paddingVertical: scale(10), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(10), }}>
                        <View
                            style={{ flexDirection: 'row', gap: scale(6) }}>
                            <View>
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
                    <Footer TotalPrice={'50.00 AED'} Tax={'Incl. 5% VAT'} ButtonText={'Next'} onPress={() => navigation.navigate('Location')} />
                </View>
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
                            <Button onPress={() => { setModalVisible(false); setProfileVisible(true); }} title="Skip" color="#fff" fontWeight="700" fontSize={scale(16)} backgroundColor="#72BBFA" width={scale(120)} height={scale(40)} />
                            <Button onPress={() => { setModalVisible(false); setProfileVisible(true); }} title="Next" color="#fff" fontWeight="700" fontSize={scale(16)} backgroundColor="#72BBFA" width={scale(120)} height={scale(40)} />
                        </View>
                    </View>
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
                </CustomModal>

            </Background >
        </SafeAreaView >
    )
}

