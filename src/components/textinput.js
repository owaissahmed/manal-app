import {
    TextInput as RNTextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    PixelRatio,
} from 'react-native';
import React, { useState, useRef } from 'react';
// import Colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Text from './Text';
import { scale } from 'react-native-size-matters';

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => fontScale >= 1 ? (size / fontScale) : (size);

const TextField = ({
    initialValue,
    label,
    error,
    labelColor,
    renderRightComponent,
    secureTextEntry,
    ShowSecureTextEntry,
    multiline,
    info,
    infoContent,
    isCustom = false,
    style,
    multilineStyle,
    fontSize = fontSize,
    borderColor,
    customSet = () => { },
    ...otherProps
}) => {
    const [isFocused, setFocused] = useState(false);
    const [value, setValue] = useState(initialValue);
    const [isSecureVisible, setSecureVisible] = useState(secureTextEntry);
    const [infoModalShow, setInfoModalShow] = useState(false)

    const inputRef = useRef(null);

    const iscustomeFunction = (event) => {
        const s = otherProps.keyboardType == 'numeric' ? event.replace(/[^0-9.]|(?<=\.\d{2})\d|(?<=\.\d*)\./g, '') : event
        setValue(s);
        isCustom && customSet(s);
    }

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                {label && <Text>{label}</Text>}
                {info &&
                    <TouchableOpacity onPress={() => setInfoModalShow(!infoModalShow)} >
                        <MaterialCommunityIcons
                            name='information'
                            color={'black'}
                            size={22}
                        />
                    </TouchableOpacity>
                }
            </View>
            <View style={[
                styles.inputContainer,
                style, { marginTop: label ? '2%' : "5%", borderColor: borderColor || '#13418C' },
                // isFocused && styles.inputContainerActive,
                error && styles.inputContainerError,
            ]}
            >
                <RNTextInput
                    defaultValue={initialValue}
                    value={value}
                    style={[
                        styles.input,
                        multiline && styles.textarea, multilineStyle
                    ]}
                    autoCapitalize="none"
                    allowFontScaling={false}
                    onFocus={() => setFocused(true)}
                    onEndEditing={() => setFocused(false)}
                    ref={(ref) => { inputRef.current = ref }}
                    onChangeText={iscustomeFunction}
                    underlineColorAndroid="transparent"
                    secureTextEntry={isSecureVisible}
                    placeholderTextColor={'grey'}
                    fontSize={fontSize}
                    multiline={multiline}
                    borderColor={borderColor}
                    {...otherProps}
                />
                {renderRightComponent && (
                    <View
                        style={styles.rightContainer}
                    >
                        {renderRightComponent()}
                    </View>
                )}

                {ShowSecureTextEntry && (
                    <View
                        style={styles.rightContainer}
                    >
                        <TouchableOpacity onPress={() => setSecureVisible(!isSecureVisible)}>
                            <Icon
                                name={isSecureVisible ? 'eye-off' : 'eye'}
                                color={'black'}
                                size={(scale(18))}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};


TextField.defaultProps = {
    value: null,
    error: null,
    label: null,
    labelColor: 'gray100',
    initialValue: '',
    renderRightComponent: null,
    multiline: false,
    infoContent: '',
    multilineStyle: null
};

export default TextField;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 12,
        borderWidth: 1,
        // borderColor: '#13418C',
        backgroundColor: 'white'
    },
    input: {
        // paddingVertical: 14,
        paddingHorizontal: 15,
        color: "#000000",
        fontSize: scale(15),
        flex: 1,
        // fontFamily: 'CHANGAN-REGULAR',
    },
    _inputContainerActive: {
        borderColor: '#13418C',
    },
    get inputContainerActive() {
        return this._inputContainerActive;
    },
    set inputContainerActive(value) {
        this._inputContainerActive = value;
    },
    inputContainerError: {
        borderColor: 'red',
        borderWidth: 1
    },
    rightContainer: {
        marginRight: 15,
    },
    textarea: {
        // minHeight: scale(150),
        // textAlignVertical: 'top'
    },
});
