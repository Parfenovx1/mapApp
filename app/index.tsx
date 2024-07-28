import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'
import { useNavigation } from 'expo-router'

const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2
}

const App = () => {
    const mapRef = useRef<MapView>(null)
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={jumpTo}>
                    <View style={{ padding: 10 }}>
                        <Text>Focus</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }, [])


    const Region = {
        latitude: 46.47,
        longitude: 30.70,
        latitudeDelta: 2,
        longitudeDelta: 2
    }

    const jumpTo = () => {
        mapRef.current?.animateCamera({ center: Region, zoom: 10 }, { duration: 3000 })
    }
    return (
        <View style={{ flex: 1 }}>
            <MapView ref={mapRef} style={StyleSheet.absoluteFill} showsMyLocationButton initialRegion={INITIAL_REGION} provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE} />
        </View>
    )
}


export default App