// import { View, Image } from 'react-native';
// import React, { useEffect } from 'react';
// import { scale } from 'react-native-size-matters';
// import AlManalText from '../../assets/images/AlManalText.png';
// import Logo from '../../assets/images/logo.png';
// import Background from '../components/Background';
// import Text from '../components/Text';
// import HalfCar from '../../assets/images/halfcar.png'; // low-opacity bg image

// export default function Splash({ navigation }) {
//   useEffect(() => {
//     GoToHome();
//   }, []);

//   function GoToHome() {
//     setTimeout(() => {
//       navigation.replace('Home');
//     }, 3000);
//   }

//   return (
//       <Background height={scale(320)} width={scale(420)} BackgroundImage={HalfCar} >
//       <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
//         <View />
//         <View />
//         <View />
//         {/* Logos View */}
//         <View style={{ alignItems: 'center', marginTop: scale(140), marginBottom: scale(45) }}>
//           <Image source={Logo} style={{ height: scale(100), width: scale(100) }} />
//           <Image source={AlManalText} style={{ marginTop: scale(10) }} />
//         </View>

//         {/* Loading Text */}
//         <View>
//           <Text color={'#1B337C'} fontWeight="700" fontSize={scale(22)}>
//             Loading...
//           </Text>
//         </View>
//       </View>
//     </Background>
//   );
// }


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Calendar from '../components/Calender';
const Splash = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Close modal after selection
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <TouchableOpacity onPress={() => setShowCalendar(true)}>
        <Text style={{ fontSize: 18, padding: 10, backgroundColor: '#ddd' }}>
          {selectedDate ? selectedDate.toDateString() : 'Select Date'}
        </Text>
      </TouchableOpacity>

      <Modal visible={showCalendar} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
            <Calendar
              initialDate={selectedDate || new Date()}
              setSelectedDateNow={handleDateSelect}
            />
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default Splash;
