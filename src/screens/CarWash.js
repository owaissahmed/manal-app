import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import Logo from '../../assets/images/logo.png';
import { scale } from 'react-native-size-matters';
const servicesByVehicle = {
    SALOON: [
        { id: '1', title: 'Car Washing', price: '30.00 AED', icon: Logo },
        { id: '2', title: 'Interior Cleaning', price: '10.00 AED', icon: source = { Logo } },
        { id: '3', title: 'Extra Interior Cleaning', price: '30.00 AED', icon: source = { Logo } },
        { id: '4', title: 'Super Shine', price: '25.00 AED', icon: source = { Logo }, }
    ],
    SUV: [
        { id: '1', title: 'SUV Washing', price: '40.00 AED', icon: source = { Logo } },
        // Add other services...
    ],
    VAN: [
        { id: '1', title: 'Van Washing', price: '45.00 AED', icon: source = { Logo } },
    ],
    BIKE: [
        { id: '1', title: 'Bike Wash', price: '15.00 AED', icon: source = { Logo }, }
    ],
};

const vehicleTypes = ['SALOON', 'SUV', 'VAN', 'BIKE'];

export default function CarWash() {
    const [selectedVehicle, setSelectedVehicle] = useState('SALOON');
const [selectedServiceIds, setSelectedServiceIds] = useState([]);

const toggleService = (id) => {
  setSelectedServiceIds((prev) =>
    prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
  );
};

const renderService = ({ item }) => {
  const isSelected = selectedServiceIds.includes(item.id);

  return (
    <TouchableOpacity
      onPress={() => toggleService(item.id)}
      style={[
        styles.card,
        isSelected && styles.cardSelected,
      ]}
    >
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

    return (
        <View style={styles.container}>
            {/* Vehicle Type Tabs */}
            <View style={styles.tabContainer}>
                {vehicleTypes.map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.tabButton,
                            selectedVehicle === type && styles.activeTab,
                        ]}
                        onPress={() => setSelectedVehicle(type)}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                selectedVehicle === type && styles.activeTabText,
                            ]}
                        >
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Services */}
            <FlatList
                data={servicesByVehicle[selectedVehicle]}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={renderService}
                contentContainerStyle={styles.serviceList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1EAFE',
        paddingTop: 20,
        marginTop: scale(20)
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginBottom: 15,
    },
    tabButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },
    activeTab: {
        backgroundColor: '#A67CDB',
    },
    tabText: {
        color: '#333',
        fontWeight: '600',
    },
    activeTabText: {
        color: '#ffffff',
    },
    serviceList: {
        paddingHorizontal: 10,
    },
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 3,
    },
    icon: {
        width: 48,
        height: 48,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    price: {
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        marginTop: 4,
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
    },
    cardSelected: {
  backgroundColor: '#A67CDB22', // light purple shade
  borderWidth: 2,
  borderColor: '#A67CDB',
},

});
