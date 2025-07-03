import React from 'react';
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const CustomBottomSheet = ({ isVisible, onClose, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.sheet}>
              <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
              >
                {children}
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: SCREEN_HEIGHT * 0.4, // 40% of screen height
    padding: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
