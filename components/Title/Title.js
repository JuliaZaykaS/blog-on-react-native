import React from 'react'
import { Text, StyleSheet } from "react-native";

export const Title = ({title,style}) => {
    // console.log(style);
    return (
        <Text style={{...styles.title, ...style}}>
        {/* // <Text style={[...styles.title, style].join(' ')}> */}
            {title}
        </Text>
    )
}

const styles=StyleSheet.create({
    title:{
            fontFamily: "Roboto-Medium",
            // fontFamily: "Roboto",
            // fontFamily: "Roboto-Bold",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 30,
            lineHeight: 35,
            textAlign: "center",
            // letterSpacing: '0.01em',
            color: "#212121",
            // marginBottom: 33,

    }
})
