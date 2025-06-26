import React from 'react';
import { Text as RNText } from 'react-native';
import { scale } from 'react-native-size-matters';

const Text = ({
    children,
    color = color,
    fontWeight = fontWeight,
    fontSize = fontSize,
    fontFamily = 'InterVariableFont',
    style,
    ...props
}) => {
    return (
        <RNText
            allowFontScaling={false}
            style={[
                {
                    color,
                    fontWeight,
                    fontSize,
                    fontFamily,
                },
                style,
            ]}
            {...props}
        >
            {children}
        </RNText>
    );
};

export default Text;
