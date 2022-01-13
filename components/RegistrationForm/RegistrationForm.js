import React from "react";
import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

export const RegistrationForm = ({ className }) => {
  return (
    // <View style={`${styles.container} ${className}`}>
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Регистрация</Text>
        <TextInput placeholder="Логин" style={styles.input} />
        <TextInput placeholder="Адрес электронной почты" style={styles.input} />
        <TextInput
          placeholder="Пароль"
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity style={[styles.button, styles.btnSignup ]} activeOpacity={0.7}>
          <Text style={styles.btnSignupText}>Зарегистрироваться</Text>

        </TouchableOpacity>
        {/* <Button title="Зарегистрироваться" style={styles.button} color="#FF6C00"/> */}
        {/* <Button title="Уже есть аккаунт? Войти" color='transparent'/> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnLoginText}>Уже есть аккаунт? Войти</Text>

        </TouchableOpacity>
        {/* <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    minHeight: 549,
    // width: 375,
    marginTop: 263,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginHorizontal: 16,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    // letterSpacing: '0.01em',
    color: "#212121",
    marginBottom: 33,
  },
  input: {
    // minWidth: 320,
    // maxWidth: 343,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    // marginHorizontal: 16,
  },
  button:{
    borderRadius: 100,
    padding: 16,
    justifyContent:'center',
    alignItems:'center',


  },
  btnSignup:{
    backgroundColor:"#FF6C00",

  },
  btnSignupText:{
    color: '#FFFFFF',
    // textAlign: 'center',
  },
  btnLoginText:{
    // textAlign: 'center',
    color: '#1B4371',

  }
  // btnSignup:{
  //   backgroundColor:"#FF6C00"

  // }
});
