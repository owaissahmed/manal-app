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
import MapView, { Marker } from 'react-native-maps';

export default function Location({ navigation }) {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
        <View style={{ marginTop: scale(30), flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity onPress={() => navigation.navigate("CarModel")}>
            <View style={{
              alignSelf: 'center', alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: scale(6),
              borderRadius: scale(5),
              paddingVertical: 10, backgroundColor: 'white',
              paddingHorizontal: scale(20), borderColor: '#13418C', borderWidth: 1, borderRadius: scale(12),
              marginBottom: 10, width: scale(280),
            }}>
              <View style={{ gap: scale(4), alignItems: 'center', flexDirection: 'row' }} >
                <Text fontSize={scale(16)}>Building Name/Street</Text>
              </View>
              <Feather name="chevron-right" color="black" size={(scale(18))} />
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', marginVertical: scale(10) }}>
            <MapView
              style={{ width: scale(300), height: scale(500), }}
              initialRegion={{
                latitude: 24.8607,         // Karachi, Pakistan
                longitude: 67.0011,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}>
              <Marker
                coordinate={{ latitude: 24.8607, longitude: 67.0011 }}
                title="Karachi"
                description="This is Karachi" />
            </MapView>
          </View>
          <View style={{ marginTop: scale(10), alignSelf: "center", }}>
            <Button onPress={() => navigation.navigate('Payment')} style={{ borderRadius: scale(5) }}
              title="Confirm Location" color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(270)} height={scale(40)} />
          </View>
        </View>
      </Background >
    </SafeAreaView >
  )
}