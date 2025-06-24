import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

const Button = ({ title, onPress, width, height, style, textStyle }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#13418C',
        elevation: 3,
        width: width,
        height: height,
      },
      style,
    ]}
  >
    <Text
      style={[
        {
          color: '#1B337C',
          fontWeight: '700',
          fontSize: scale(15),
          fontFamily: 'InterVariableFont',
        },
        textStyle,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default Button;
