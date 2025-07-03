// import React, { useState } from 'react';
// import { View, TouchableOpacity, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native';
// import { scale } from 'react-native-size-matters';
// import Background from '../components/Background';
// import Text from '../components/Text';
// import FullCar from '../../assets/images/fullcar.png'
// import Week from '../../assets/images/week.png'
// import Daily from '../../assets/images/daily.png'
// import Year from '../../assets/images/year.png'
// import Month from '../../assets/images/month.png'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Octicons from 'react-native-vector-icons/Octicons';
// import Feather from 'react-native-vector-icons/FontAwesome';
// import Button from '../components/button';
// export default function Footer({ paddingVertical, TotalPrice, Tax,ButtonText ,marginTop,onPress}) {
//     return (
//         <View
//             style={{
//                 marginTop:marginTop,paddingVertical: paddingVertical, paddingTop: scale(20), paddingHorizontal: scale(30), alignItems: "center", alignSelf: 'center', justifyContent: "space-between", width: ("100%"), borderTopStartRadius: scale(20), borderTopEndRadius: scale(20), backgroundColor: 'white',
//             }}>
//             <View>
//                 <Octicons name="horizontal-rule" style={{ marginTop: scale(-20) }} color="silver" height={scale(40)} size={(scale(60))} />
//             </View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: scale(280), marginTop: scale(20) }}>
//                 <View
//                     style={{}}>
// <View>
//     <Text fontWeight='700' fontSize={scale(16)} color='#3A3A3A'
//         style={{
//             marginVertical: scale(3),
//         }}>
//         Total
//     </Text>
//     <Text fontWeight='400' fontSize={scale(15)} color='#3A3A3A'>
//         {TotalPrice}
//     </Text>
//     <Text fontWeight='400' fontSize={scale(12)} color='#FF1919' style={{ marginTop: scale(-5) }}>
//         {Tax}
//     </Text>
// </View>
//                 </View>
//                 {/* () => setModalVisible(true) */}
// <View style={{ marginTop: scale(6), alignSelf: "center", }}>
//     <Button onPress={onPress} style={{ borderRadius: scale(5) }}
//         title={ButtonText} color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(120)} height={scale(40)} />
// </View>
//             </View>
//         </View>
//     )
// }



import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Alert, Linking } from 'react-native';
// import Colors from '../../themes/Colors';
// import Text from '../form/Text';
import Text from './Text';
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Button from '../components/button';
import { scale } from 'react-native-size-matters';
// import GlobalContext from '../../context/GlobalContext';

const Footer = ({ style, TotalPrice, Tax,ButtonText ,onPress }) => {
    const route = useRoute()
    const navigation = useNavigation()
    // const { openWhatsAppChat } = useContext(GlobalContext)

    return (
        <View style={[style, styles.container]}>
            <View style={styles.Tabbar}>
                <View>
                    <Octicons name="horizontal-rule" style={{ marginTop: scale(-20) }} color="silver" height={scale(40)} size={(scale(60))} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
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
                    <View style={{ marginTop: scale(6), alignSelf: "center", }}>
                        <Button style={{ borderRadius: scale(5) }}
                            title={ButtonText} onPress={onPress} color={"#ffffff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(120)} height={scale(40)} />
                    </View>
                </View>
                {/* <TouchableOpacity activeOpacity={0.7} style={styles.tabitem}>
                    <MaterialCommunityIcons
                        name='home'
                        color={route.name == 'Home' ? 'pink' : 'yellow'}
                        size={scale(28)}
                    />
                    <Text style={route.name == 'Home' ? styles.activetxt : styles.inactivetxt} font={12} >Home</Text>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.7} style={styles.tabitem} >
                    <Image
                        style={[styles.img, route.name == 'PartListing' ? styles.activeimg : styles.inActiveimg]}
                        source={require('../../assets/images/apple.png')} />
                    <Text style={route.name == 'PartListing' ? styles.activetxt : styles.inactivetxt} font={12}>Listing</Text>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.8} style={styles.tabitem}  >
                    <FontAwesome5
                        name={'tools'}
                        color={route.name == 'ScheduleMaintenance' ? 'pink' : 'yellow'}
                        size={scale(25)}
                    />
                    <Text style={route.name == 'ScheduleMaintenance' ? styles.activetxt : styles.inactivetxt} font={12}>Appointment</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    // onPress={() => openWhatsAppChat()}
                    activeOpacity={0.7} style={styles.tabitem}>
                    <Image
                        style={[styles.img, route.name == 'Chat' ? styles.activeimg : styles.inActiveimg]}
                        source={require('../../assets/images/google.png')} />
                    <Text style={route.name == 'Chat' ? styles.activetxt : styles.inactivetxt} font={12}>Chat</Text>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.7} style={styles.tabitem}>
                    <Image
                        style={[styles.img, route.name == 'Profile' ? styles.activeimg : styles.inActiveimg]}
                        source={require('../../assets/images/google.png')} />

                    <Text style={route.name == 'Profile' ? styles.activetxt : styles.inactivetxt} font={12}>Profile</Text>
                </TouchableOpacity> */}
            </View >
        </View >
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    Tabbar: {
        // flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingVertical: scale(10),
        // justifyContent: 'space-around',
        paddingHorizontal: scale(5),
        borderTopStartRadius: scale(20), borderTopEndRadius: scale(20), backgroundColor: 'white',
    },
    tabitem: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 3
    },
    activetxt: {
        color: 'pink',
    },
    inactivetxt: {
        color: 'silver',
        // fontFamily: "CircularStd-Medium",
    },
    img: {
        width: scale(25), height: scale(25), resizeMode: 'contain'
    },
    activeimg: {
        tintColor: 'lightblue'
    },
    inActiveimg: {
        // tintColor: 'yellow'
    }
});