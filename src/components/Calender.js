// components/CalendarModal.js
import React, { useState, useEffect } from 'react';
import {
    View,
    TouchableOpacity,
    Modal,
    StyleSheet,
    ScrollView,
    Keyboard, TouchableWithoutFeedback
} from 'react-native';
import CustomDropdown from './Dropdown';
import Text from './Text';
import { scale } from 'react-native-size-matters';
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const CalendarModal = ({ visible, onClose, onSave }) => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);
    const [displayMonth, setDisplayMonth] = useState(today.getMonth());
    const [displayYear, setDisplayYear] = useState(today.getFullYear());
    const [openDropdown, setOpenDropdown] = useState(null); // 'month' | 'year' | null


    useEffect(() => {
        if (visible) {
            setSelectedDate(today);
            setDisplayMonth(today.getMonth());
            setDisplayYear(today.getFullYear());
        }
    }, [visible]);

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfWeek = (year, month) => {
        const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
        return firstDay === 0 ? 6 : firstDay - 1; // Make Mon = 0
    };

    const renderCalendar = () => {
        const totalDays = getDaysInMonth(displayYear, displayMonth);
        const firstDay = getFirstDayOfWeek(displayYear, displayMonth);
        // const isPastDate = new Date(displayYear, displayMonth, i) < new Date(today.setHours(0, 0, 0, 0));

        const cells = [];

        // Empty cells before the first day
        for (let i = 0; i < firstDay; i++) {
            cells.push(<View key={`empty-${i}`} style={styles.dayCell} />);
        }

        // Actual day cells
        for (let i = 1; i <= totalDays; i++) {
            const date = new Date(displayYear, displayMonth, i);
            const isToday =
                i === today.getDate() &&
                displayMonth === today.getMonth() &&
                displayYear === today.getFullYear();

            const isSelected =
                i === selectedDate.getDate() &&
                displayMonth === selectedDate.getMonth() &&
                displayYear === selectedDate.getFullYear();

            const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0));

            cells.push(
                <TouchableOpacity
                    key={i}
                    style={styles.dayCell}
                    disabled={isPastDate}
                    onPress={() => {
                        if (!isPastDate) setSelectedDate(date);
                    }}
                >
                    <View
                        style={[
                            styles.circle,
                            isToday && styles.todayCircle,
                            isSelected && styles.selectedCircle,
                            isPastDate && { opacity: 0.7 }, // faded style for past dates
                        ]}
                    >
                        <Text
                            style={[
                                styles.dayText,
                                (isSelected || isToday) && styles.selectedText,
                                isPastDate && { color: '#999' },
                            ]}
                        >
                            {i}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }


        return cells;
    };

    const getYears = () => {
        const years = [];
        const currentYear = today.getFullYear();
        for (let i = currentYear + 50; i >= currentYear - 50; i--) {
            years.push(i.toString());
        }
        return years;
    };


    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={() => {
                setOpenDropdown(null);
                onClose(); // This should close the modal as before
            }}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback onPress={() => { setOpenDropdown(null); }}>
                        <View style={styles.modalContainer}>
                            {/* Dropdowns */}
                            <View style={styles.dropdownRow}>
                                <CustomDropdown
                                    label="Month"
                                    items={months}
                                    selectedValue={months[displayMonth]}
                                    open={openDropdown === 'month'}
                                    onOpen={() => setOpenDropdown(openDropdown === 'month' ? null : 'month')}
                                    onSelect={(monthName) => {
                                        setDisplayMonth(months.indexOf(monthName));
                                        setOpenDropdown(null);
                                    }}
                                    highlightValue={months[new Date().getMonth()]}
                                />
                                <CustomDropdown
                                    label="Year"
                                    items={getYears()}
                                    selectedValue={displayYear.toString()}
                                    open={openDropdown === 'year'}
                                    onOpen={() => setOpenDropdown(openDropdown === 'year' ? null : 'year')}
                                    onSelect={(yearStr) => {
                                        setDisplayYear(parseInt(yearStr));
                                        setOpenDropdown(null);
                                    }}
                                    highlightValue={new Date().getFullYear().toString()}
                                />
                            </View>

                            {/* Weekday headers */}
                            <View style={styles.weekRow}>
                                {daysOfWeek.map((day, index) => (
                                    <Text key={index} style={styles.weekday}>
                                        {day}
                                    </Text>
                                ))}
                            </View>

                            {/* Calendar grid */}
                            <ScrollView>
                                <View style={styles.daysContainer}>{renderCalendar()}</View>
                            </ScrollView>

                            {/* Save button only */}
                            <View style={styles.buttonRow}>
                                <TouchableOpacity
                                    style={styles.saveButton}
                                    onPress={() => onSave(selectedDate)}
                                >
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );

};

export default CalendarModal;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: '#00000088',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        padding: scale(15),
        maxHeight: '90%',
    },
    dropdownRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(10),
        marginBottom: scale(5),
    },
    weekday: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#555',
    },
    daysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        // backgroundColor:'red',
        alignItems: 'center'
    },
    dayCell: {
        width: '14.28%',
        aspectRatio: 1, // Keep square cells
        justifyContent: 'center',
        alignItems: 'center',
    },

    circle: {
        width: scale(32),
        height: scale(32),
        // borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    todayCircle: {
        backgroundColor: '#d0e6ff',
    },

    selectedCircle: {
        backgroundColor: '#72BBFA',
    },

    dayText: {
        color: '#333',
        fontSize: scale(13),
    },

    selectedText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        // marginTop: 15,
    },
    saveButton: {
        backgroundColor: '#72BBFA',
        paddingVertical: scale(10),
        paddingHorizontal: scale(20),
        borderRadius: 8,
        width: '80%'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: scale(16)
    },
});
