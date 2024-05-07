import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CustomAvatar() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/belay.png')} style={{ marginLeft: 10, width: 82, height: 80, borderRadius: 50, marginTop: -40 }} />
            <TouchableOpacity style={{ width: 40, height: 40, marginLeft: 30, marginTop: -20 }}>
                <View style={{ backgroundColor: 'rgba(0, 128, 128, 0.5)', borderRadius: 50, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    <MaterialCommunityIcons name="pencil" size={18} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
    },
});
