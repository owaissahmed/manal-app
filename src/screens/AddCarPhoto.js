import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import React ,{useState}from 'react'
import Background from '../components/Background'
import CustomModal from '../components/CustomModal';
import CarSport from '../../assets/images/carSport.png';
import CarWashBackground from '../../assets/images/carWashBackground.png'
import Dubai from "../../assets/images/dubai.png"
import { scale } from 'react-native-size-matters'
import TextField from '../components/textinput'
import Button from '../components/button'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Text from '../components/Text'
export default function AddCarPhoto({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Background height={scale(460)} width={scale(350)} BackgroundImage={CarWashBackground} imageOpacity={1}>
                <ScrollView>
                    <View style={{
                        marginTop: scale(60),
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ alignItems: 'center', justifyContent: 'center', gap: scale(20), backgroundColor: "white", borderRadius: scale(20), height: scale(170), borderColor: 'black', borderWidth: scale(1), borderStyle: 'dashed', marginBottom: scale(18), width: scale(280) }}>
                            <AntDesign style={{ paddingHorizontal: scale(8), paddingVertical: scale(6), borderRadius: scale(10), backgroundColor: '#74B9F8' }} name="plus" color="#ffffff" size={scale(22)} />
                            <Text style={{ textTransform: 'uppercase' }} color={'#770996'} fontWeight="700" fontSize={scale(16)}>
                                attach car photo
                            </Text>
                        </TouchableOpacity >
                        <View style={{ marginBottom: scale(14), alignItems: 'center', justifyContent: 'center', backgroundColor: "white", borderRadius: scale(20), height: scale(60), width: scale(280) }}>
                            <Image style={{ padding: scale(4) }} source={Dubai} />
                        </View>
                        <TextField
                            fontSize={scale(16)}
                            borderColor='white'
                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='PLATE CODE'
                        />
                        <TextField
                            fontSize={scale(16)}
                            borderColor='white'
                            style={{
                                width: scale(280),

                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='PLATE NUMBER'
                        />
                        <TextField
                            fontSize={scale(16)}
                            borderColor='white'

                            style={{
                                width: scale(280),
                                // height: scale(40),
                                backgroundColor: 'white',
                                margin: scale(4)
                            }}
                            placeholder='CITY'
                        />
                        <View style={{ marginTop: scale(20), marginBottom: scale(10) }}>
                            <Button onPress={() => navigation.navigate('AddCar')}
                            // {/* <Button onPress={() => setModalVisible(true)} */}
                                title="CONTINUE" color={"#fff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(280)} height={scale(40)} />
                        </View>
                        {/*  */}
                        <CustomModal
                        // height={scale(600)}
                        // ScrollHeight={scale(800)}
                            visible={modalVisible}
                            onClose={() => setModalVisible(false)}
                            imageSource={CarSport}
                            message="please add your car to complete your order"
                        >
                            <View style={{ marginTop: scale(10) }}>
                                <Button
                                    onPress={() => {
                                        setModalVisible(false);
                                        navigation.navigate('AddCar'); // or another screen
                                    }}
                                    title="ADD A CAR"
                                    color="#fff"
                                    fontWeight="700"
                                    fontSize={scale(16)}
                                    backgroundColor="#72BBFA"
                                    width={scale(260)}
                                    height={scale(40)}
                                />
                            </View>
                        </CustomModal>
                    </View>
                </ScrollView>
            </Background>
        </SafeAreaView>
    )
}