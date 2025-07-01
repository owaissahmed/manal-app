
import React from 'react';
import { Modal, View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import Fontisto from "react-native-vector-icons/Fontisto";

const CustomModal = ({
  visible,
  onClose,
  closeIcon,
  imageSource,
  message,
  children,
  height,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
  ScrollHeight,
  borderRadius, //   width = scale(280),
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer, { height, width }]}>
          {closeIcon &&
            <Fontisto
              onPress={onClose}
              style={styles.closeIcon}
              name="close"
              color="#000"
              size={scale(28)}
            />
          }
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.scrollContent} style={{ borderRadius: borderRadius, height: ScrollHeight, backgroundColor: backgroundColor, borderWidth: borderWidth, borderColor: borderColor }}>
            {/* Optional Image */}
            {imageSource && (
              <Image
                source={imageSource}
                style={styles.image}
                resizeMode="contain"
              />
            )}

            {/* Optional Message */}
            {message && (
              <Text allowFontScaling={false}
                style={styles.modalText}>

                {message}
              </Text>
            )}

            {/* Injected Custom Content */}
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    borderRadius: scale(10),
    overflow: 'hidden',
    // marginVertical: scale
  },
  closeIcon: {
    marginVertical: scale(8),
    alignSelf: 'flex-end',
    borderRadius: scale(20),
    // paddingHorizontal: scale(8),
    // paddingTop: scale(6),
    backgroundColor: 'white'
  },
  scrollContent: {
    paddingVertical: scale(10),
    alignItems: 'center',
    // marginTop: scale(6),
    // paddingHorizontal: scale(20),
    // paddingBottom: scale(20),
    // borderColor:'black',
    // borderRadius: scale(15),
  },
  image: {
    height: scale(140),
    width: scale(140),
    marginBottom: scale(10),
  },
  modalText: {
    marginBottom: scale(10),
    marginHorizontal: scale(10),
    fontSize: scale(15),
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'uppercase',
    lineHeight: scale(24),
  },
});

