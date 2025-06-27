// import React, { useState } from 'react';
// import { Modal, View, Text, StyleSheet, ScrollView, Image } from 'react-native';
// import { scale } from 'react-native-size-matters';
// import Fontisto from "react-native-vector-icons/Fontisto"
// import CarSport from '../../assets/images/carSport.png';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Button from '../components/button';
// const CarSelection = () => {
//     const [modalVisible, setModalVisible] = useState(false);

//     return (
//         <View style={styles.container}>
//             <Button title="Open Modal" onPress={() => setModalVisible(true)} />
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <View style={styles.modalBackground}>
//                     <View style={styles.modalContainer}>
//                         <Fontisto onPress={() => setModalVisible(false)} style={{ alignSelf: 'flex-end', paddingHorizontal: scale(8), paddingVertical: scale(6), borderRadius: scale(10), }} name="close" color="#000" size={scale(32)} />
//                         <ScrollView contentContainerStyle={styles.scrollContent}>
//                             <Image source={CarSport} style={{ padding:0,height: scale(140), width: scale(140) }} />
//                             {/* <AntDesign style={{ alignSelf: 'flex-end', paddingHorizontal: scale(6), paddingVertical: scale(6), borderRadius: scale(50), backgroundColor: '#74B9F8' }} name="plus" color="#ffffff" size={scale(22)} /> */}
//                             <Text style={styles.modalText} color={'#000'} fontSize={scale(15)}>
//                                 please add your car to complete your order
//                             </Text>
//                             {/* ...repeat text for testing */}
//                             <View style={{ marginTop: scale(10) }}>
//                                 <Button onPress={() => navigation.navigate('CarSelection')}
//                                     // <Button onPress={() => console.log('yes')}
//                                     title="ADD A CAR" color={"#fff"} fontWeight="700" fontSize={scale(16)} backgroundColor={"#72BBFA"} width={scale(260)} height={scale(40)} />
//                             </View></ScrollView>
//                     </View>
//                 </View>
//             </Modal>

//         </View>
//     );
// };

// export default CarSelection;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     modalBackground: {
//         flex: 1,
//         //   backgroundColor: 'rgba(0,0,0,0.5)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContainer: {
//         //   backgroundColor: 'white',
//         borderRadius: 10,
//         width: scale(280),
//         height: scale(360), // fixed height set here!
//         //   overflow: 'hidden', // clip scroll overflow
//     },
//     scrollContent: {
//         paddingBottom: scale(10),
//         paddingHorizontal: scale(20),
//         alignItems: 'center',
//         backgroundColor: "white",
//         borderColor: 'black',
//         borderWidth: scale(5),
//         borderRadius: scale(12)
//     },

//     modalText: {
//         marginBottom: 15,
//         fontSize: scale(15),
//         textAlign: 'center', fontWeight: '600', textTransform: 'uppercase',
//         lineHeight: scale(28)
//     }
// });



import React, { useState } from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import CustomModal from '../components/CustomModal';
import CarSport from '../../assets/images/carSport.png';
import Button from '../components/button'; // your custom Button component
import { useNavigation } from '@react-navigation/native';

const CarSelection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        imageSource={CarSport}
        message="please add your car to complete your order"
      >
        <View style={{ marginTop: scale(10) }}>
          <Button
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('CarSelection'); // or another screen
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
  );
};

export default CarSelection;


