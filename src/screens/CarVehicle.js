import { View, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import AcuraLogo from '../../assets/images/acura-logo.png';
import Apple from '../../assets/images/apple.png';
import Background from '../components/Background';
import Button from '../components/button';
import Text from '../components/Text';
import Feather from 'react-native-vector-icons/Feather';
import TextField from '../components/textinput';
import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image

export default function CarVehicle({ navigation }) {

    const Vehicles =
        [
            { id: 'vehicles_1', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_2', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_3', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_4', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_5', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_6', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_7', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_8', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_9', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_10', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },
            { id: 'vehicles_11', title: 'Acura', logo: AcuraLogo, icon: <Feather name="chevron-right" color="black" size={(scale(18))} /> },

        ]


    const Renderdata = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("CarModel")}>
                <View style={{
                    alignSelf: 'center', alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: scale(6),
                    borderRadius: scale(5),
                    paddingVertical: 10,
                    paddingHorizontal: scale(10),
                    marginBottom: 15, backgroundColor: 'white', width: scale(280),
                }}>
                    <View style={{ gap: scale(4), alignItems: 'center', flexDirection: 'row' }} ><Image source={item.logo} />
                        <Text fontSize={scale(16)}>{item.title}</Text></View>
                    <Text>{item.icon}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} imageOpacity={0.1}>
                <View style={{
                    alignItems: 'center',
                    marginTop: scale(50),
                    marginBottom: scale(10)
                }}>
                    <View style={{
                    }}>
                        <TextField
                            Search
                            fontSize={scale(16)}
                            borderColor='#13418C'
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='Search'
                        />
                    </View>
                </View>
                {/* Main content wrapper */}
                <View style={{
                    alignItems: 'center',
                    padding:scale(16 )
                }}>
                    <FlatList height={scale(500)} scrollEnabled renderItem={Renderdata} data={Vehicles} keyExtractor={(item) => item.id} />
                </View>

            </Background>
        </SafeAreaView>
    );
}
