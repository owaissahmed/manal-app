// components/CustomDropdown.js
import React, { useState,useEffect } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Text from './Text';
import { scale } from 'react-native-size-matters';
const CustomDropdown = ({ label, items, selectedValue, onSelect, open, onOpen, highlightValue }) => {
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        setShowList(open);
    }, [open]);

    const handleSelect = (item) => {
        onSelect(item);
        setShowList(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownButton}
                onPress={onOpen}
            >
                <Text style={styles.selectedText}>{label}: {selectedValue}</Text>
                {showList ? (
                    <Feather name="chevron-up" color="black" size={scale(18)} />
                ) : (
                    <Feather name="chevron-down" color="black" size={scale(18)} />
                )}
            </TouchableOpacity>

            {showList && (
                <View style={styles.dropdownList}>
                    <FlatList
                        data={items}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            const isHighlighted = item === highlightValue;
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.dropdownItem,
                                        isHighlighted && styles.highlightItem
                                    ]}
                                    onPress={() => handleSelect(item)}
                                >
                                    <Text style={isHighlighted ? styles.highlightText : {}}>{item}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            )}
        </View>
    );
};



export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginVertical: scale(5),
  },
  dropdownButton: {
    padding: scale(10),
    backgroundColor: '#eee',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2, // Add zIndex to ensure dropdown stays above others
  },
  selectedText: {
    fontWeight: 'bold',
    color: 'black',
  },
  dropdownList: {
    position: 'absolute',
    top: 45, // adjust depending on button height
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 10, // ensures dropdown overlays
    elevation: 5,
    maxHeight: 150,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  highlightItem: {
    backgroundColor: '#72BBFA',
},
highlightText: {
    fontWeight: 'bold',
    color: '#fff',
},
});
