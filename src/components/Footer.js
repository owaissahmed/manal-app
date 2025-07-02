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
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/FontAwesome';
import Button from '../components/button';
export default function Footer({ paddingVertical, TotalPrice, Tax,ButtonText ,marginTop,onPress}) {
    return (
        <View
            style={{
                marginTop:marginTop,paddingVertical: paddingVertical, paddingTop: scale(20), paddingHorizontal: scale(30), alignItems: "center", alignSelf: 'center', justifyContent: "space-between", width: ("100%"), borderTopStartRadius: scale(20), borderTopEndRadius: scale(20), backgroundColor: 'white',
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
                            {TotalPrice}
                        </Text>
                        <Text fontWeight='400' fontSize={scale(12)} color='#FF1919' style={{ marginTop: scale(-5) }}>
                            {Tax}
                        </Text>
                    </View>
                </View>
                {/* () => setModalVisible(true) */}
                <View style={{ marginTop: scale(6), alignSelf: "center", }}>
                    <Button onPress={onPress} style={{ borderRadius: scale(5) }}
                        title={ButtonText} color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(120)} height={scale(40)} />
                </View>
            </View>
        </View>
    )
}

