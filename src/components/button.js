import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from './Text';

const Button = ({ title, onPress, width, height, style, fontSize, fontWeight, backgroundColor, color }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        backgroundColor: backgroundColor,
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
    <Text color={color} fontWeight={fontWeight}
      fontSize={fontSize}
    >{title}</Text>
  </TouchableOpacity>
);

export default Button;
