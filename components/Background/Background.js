import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export const Background = ({ image, children }) => {
  return (
    <View style={styles.container}>
      {image ? (
        <ImageBackground source={image} style={styles.imageBack}>
          {children}
        </ImageBackground>
      ) : (
        { children }
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center"
  },
});
