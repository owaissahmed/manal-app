import { View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { scale } from 'react-native-size-matters';
import AlManalText from '../../assets/images/AlManalText.png';
import Check from '../../assets/images/check.png';
import Background from '../components/Background';
import Text from '../components/Text';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image

export default function ThankYou({ navigation }) {
    //   useEffect(() => {
    //     GoToHome();
    //   }, []);

    //   function GoToHome() {
    //     setTimeout(() => {
    //       navigation.replace('Home');
    //     }, 3000);
    //   }

    return (
        <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} >
            <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                {/* Logos View */}
                <View style={{ alignItems: 'center', marginVertical: scale(40), }}>
                    <Image source={Check} style={{ height: scale(100), width: scale(100) }} />
                    <Text style={{ textAlign: 'center', marginTop: scale(25) }} color={'#1B337C'} fontWeight="700" fontSize={scale(32)}>
                        Your order has been placed</Text>
                </View>

                {/* Loading Text */}
                <View>
                    <Text style={{ textAlign: 'center', fontStyle: 'italic', marginHorizontal: scale(38) }} color={'#1B337C'} fontWeight="400" fontSize={scale(26)}>
                        Thank you for trusting AL Manal</Text>
                </View>
            </View>
        </Background>
    );
}
