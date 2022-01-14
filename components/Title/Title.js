import React from 'react'
import { Text, StyleSheet } from "react-native";

export const Title = ({title}) => {
    return (
        <Text style={styles.title}>
            {title}
        </Text>
    )
}

const styles=StyleSheet.create({
    title:{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 30,
            lineHeight: 35,
            textAlign: "center",
            // letterSpacing: '0.01em',
            color: "#212121",
            marginBottom: 33,

    }
})
