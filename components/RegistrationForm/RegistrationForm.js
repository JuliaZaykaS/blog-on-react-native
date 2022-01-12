import React from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

export const RegistrationForm = ({ className }) => {
  return (
    // <View style={`${styles.container} ${className}`}>
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <TextInput placeholder="Логин" style={styles.input}></TextInput>
      <TextInput
        placeholder="Адрес электронной почты"
        style={styles.input}
      ></TextInput>
      <TextInput placeholder="Пароль" style={styles.input}></TextInput>
      <Button title={"Зарегистрироваться"}></Button>
      <Button title={"Уже есть аккаунт? Войти"}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 549,
    width: 375,
    marginTop: 263,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    // letterSpacing: '0.01em',
    color: "#212121",
    marginBottom: 33,
  },
  input: {
    minWidth: 320,
    maxWidth: 343,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
});
