import React from 'react'
import {View, TextInput, ImageBackground, StyleSheet, Text} from 'react-native';


export const RegistrationScreen = () => {
    const image = require('../assets/images/photo.jpg')
    return (
        <View style={styles.container}>
            {/* <ImageBackground source={require("../assets/images/photo-BG.jpg")} style={styles.background}> */}
            <ImageBackground source={image} style={styles.background}>
            <Text>Hello world</Text>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    background:{
        flex: 1,
        // resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:'center',

    }
})
