// import { View, Text, StyleSheet, Image } from 'react-native'
// import React from 'react'
// import { scale } from 'react-native-size-matters'
// import HalfCar from '../../assets/images/halfcar.png'
// import LinearGradient from 'react-native-linear-gradient'

// const Background = ({ children, showImage = true, imageOpacity = 1 }) => (
//   <LinearGradient colors={['#70BEFD', '#AA7EB4']} style={styles.linearGradient}>
//     {children}
//     {showImage && (
//       <Image
//         source={HalfCar}
//         style={[styles.halfCar, { opacity: imageOpacity }]}
//         resizeMode="contain"
//       />
//     )}
//   </LinearGradient>
// )

// const styles = StyleSheet.create({
//   linearGradient: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   halfCar: {
//     height: scale(320),
//     width: scale(420),
//     alignSelf: 'center',
//   },
// })

// export default Background
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from 'react-native-size-matters';
import BackgroundImage from '../../assets/images/halfcar.png'; // low-opacity bg image

const Background = ({ children, showImage = true, imageOpacity = 1 }) => (
    <View style={styles.container}>
        <LinearGradient
            colors={['#70BEFD', '#AA7EB4']}
            style={StyleSheet.absoluteFill}
        />
        {showImage && (
            <Image
                source={BackgroundImage}
                style={[styles.backgroundImage, { opacity: imageOpacity }]}
                resizeMode="contain"
            />
        )}
        <View style={styles.content}>{children}</View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        height: scale(320),
        width: scale(420),
    },
});

export default Background;
