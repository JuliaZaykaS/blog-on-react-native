import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Title } from "../Title/Title";

export const RegistrationForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{...styles.form, marginBottom: isShowKeyboard ? 32 : 66}}>
          <Title title={"Регистрация"}></Title>
          <TextInput
            placeholder="Логин"
            style={styles.input}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          />
          <TextInput
            placeholder="Адрес электронной почты"
            style={styles.input}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          />
          <TextInput
            placeholder="Пароль"
            style={styles.input}
            secureTextEntry={true}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          />
          <TouchableOpacity
            style={[styles.button, styles.btnSignup]}
            activeOpacity={0.7}
          >
            <Text style={styles.btnSignupText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnLoginText}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  button: {
    borderRadius: 100,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSignup: {
    backgroundColor: "#FF6C00",
  },
  btnSignupText: {
    color: "#FFFFFF",
  },
  btnLoginText: {
    color: "#1B4371",
  },
});
