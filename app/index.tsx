import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2
}

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <MapView style={StyleSheet.absoluteFill} initialRegion={INITIAL_REGION} />
        </View>
    )
}


export default App