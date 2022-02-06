import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Title } from "../Title/Title";

const initialState = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [loginData, setLoginData] = useState(initialState);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const submitForm = () => {
    hideKeyboard();
    setLoginData(initialState);
    console.log(regData);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 66 }}
          >
            <Title title={"Войти"} style={styles.title}></Title>
            <TextInput
              placeholder="Адрес электронной почты"
              style={styles.input}
              value={loginData.email}
              name={"email"}
              // onChangeText={onChangeInput(name,value)}
              // onChangeText={(name,value)=>onChangeInput(name,value)}
              onChangeText={(value) =>
                setLoginData((prev) => ({ ...prev, email: value }))
              }
              // onChangeText={onChangeInput}
              // onChange={onChangeInput}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
            />
            <TextInput
              placeholder="Пароль"
              style={styles.input}
              secureTextEntry={true}
              value={loginData.password}
              // onChange={onChangeInput}
              // onChangeText={onChangeInput}
              // name={'password'}
              // onChangeText={onChangeInput(name,value)}
              // onChangeText={(name,value)=>onChangeInput(name,value)}
              onChangeText={(value) =>
                setLoginData((prev) => ({ ...prev, password: value }))
              }
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
            />
            <TouchableOpacity
              style={[styles.button, styles.btnSignup]}
              activeOpacity={0.7}
              // onPress={()=>{hideKeyboard()}}
              // onPress={hideKeyboard}
              onPress={submitForm}
              // onPress={()=>{setIsShowKeyboard(false)}}
            >
              <Text style={styles.btnSignupText}>Войти</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button} onPress={()=>{setIsShowKeyboard(false)}}> */}
            <TouchableOpacity style={styles.button} onPress={hideKeyboard}>
              {/* <TouchableOpacity style={styles.button} onPress={()=>{hideKeyboard()}}> */}
              <Text style={styles.btnLoginText}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    minHeight: 549,
    // width: 375,
    marginTop: 263,
    // marginTop: 32,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // alignItems: "center",
    justifyContent: "center",
    // justifyContent: "flex-end",
  },
  form: {
    marginHorizontal: 16,
  },
  title: {
    // fontFamily: "Roboto-Medium",
    // fontFamily: "Roboto-Bold",
    // fontFamily: "RobotoBold",
    // fontStyle: "normal",
    // fontStyle: "italic",
    // fontWeight: '700',
    // fontSize: 30,
    // lineHeight: 35,
    // letterSpacing: 0.01em,
    // color: "#212121",
    marginBottom: 33,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontFamily: 'Roboto-Regular',
    // fontFamily: 'RobotoRegular',
fontStyle: 'normal',
fontWeight: '400',
fontSize: 16,
lineHeight: 19,
color: '#BDBDBD',
  },
  button: {
    borderRadius: 100,
    padding: 16,
    // justifyContent: "center",
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
