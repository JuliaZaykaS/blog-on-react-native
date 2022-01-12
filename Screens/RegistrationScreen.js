import React from 'react'
import {View, TextInput, ImageBackground, StyleSheet, Text} from 'react-native';
import { Background } from '../components/Background/Background';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';



const image = require('../assets/images/photo.jpg')
// const image = {uri: 'https://stroy-podskazka.ru/images/article/croppedtop/718-344/2019/03/voronoj-kon-osobennosti-masti-46.jpg'}
export const RegistrationScreen = () => {
    return (
            <Background image={image}>
                <RegistrationForm style={styles.form}></RegistrationForm>

            </Background>

    )
}

const styles = StyleSheet.create({
    form:{
        marginTop: 263,



    }

})
