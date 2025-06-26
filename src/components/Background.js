
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from 'react-native-size-matters';
// import BackgroundImage from '../../assets/images/halfcar.png'; // low-opacity bg image

const Background = ({ children, showImage = true,BackgroundImage, width,height,imageOpacity = 1 }) => (
    <View style={styles.container}>
        <LinearGradient
            colors={['#70BEFD', '#AA7EB4']}
            style={StyleSheet.absoluteFill}
        />
        {showImage && (
            <Image
                source={BackgroundImage}
                style={[styles.backgroundImage, {width,height, opacity: imageOpacity }]}
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
        // height: scale(320),
        // width: scale(420),
    },
    content: {
        flex: 1,
        // justifyContent: 'center',   // center vertically
        // alignItems: 'center',       // center horizontally
    },

});

export default Background;
