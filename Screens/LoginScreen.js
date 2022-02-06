import React from 'react'
import {View, TextInput, ImageBackground, StyleSheet, Text} from 'react-native';
import { Background } from '../components/Background/Background';
import { LoginForm } from '../components/LoginForm/LoginForm';

const image = require('../assets/images/photo.jpg')
export const LoginScreen = () => {
    return (
            <Background image={image}>
                <LoginForm ></LoginForm>

            </Background>

    )
}

const styles = StyleSheet.create({
    // form:{
        // marginTop: 263,



    // }

})
