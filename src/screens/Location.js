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


export default function Location({ navigation }) {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
        <View style={{
          alignItems: 'center',
          marginTop: scale(50),
          // marginBottom: scale(10)
        }}>
        </View>
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
      </Background >
    </SafeAreaView >
  )
}