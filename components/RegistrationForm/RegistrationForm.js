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
name: '',
email: '',
password:'',
}

export const RegistrationForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [regData, setRegData] = useState(initialState)

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    // setRegData(initialState)
  };
  const submitForm=()=>{
    hideKeyboard()
    setRegData(initialState)
    console.log(regData);
  }

  // const onChangeInput = (e)=>{
  // const onChangeInput = (name,value)=>{
  //   // console.log(e.currentTarget);
  //   // const {name,value} = e.currentTarget
  //   switch (name) {
  //     case 'name':
  //       setRegData(prev=> ({...prev, name:value}))
  //       break;
  //     case 'email':
  //       setRegData(prev=> ({...prev, email:value}))
  //       break;
  //     case 'password':
  //       setRegData(prev=> ({...prev, password:value}))
  //       break;
  //   }

  // }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 66 }}
          >
            <Title title={"Регистрация"}></Title>
            <TextInput
              placeholder="Логин"
              style={styles.input}
              value={regData.name}
              name={'name'}
              // onChange={onChangeInput}
              // onChangeText={onChangeInput}
              // onChangeText={(name,value)=>onChangeInput(name,value)}
              onChangeText={(value)=>setRegData(prev=> ({...prev, name:value}))}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
            />
            <TextInput
              placeholder="Адрес электронной почты"
              style={styles.input}
              value={regData.email}
              name={'email'}
              // onChangeText={onChangeInput(name,value)}
              // onChangeText={(name,value)=>onChangeInput(name,value)}
              onChangeText={(value)=>setRegData(prev=> ({...prev, email:value}))}
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
              value={regData.password}
              // onChange={onChangeInput}
              // onChangeText={onChangeInput}
              // name={'password'}
              // onChangeText={onChangeInput(name,value)}
              // onChangeText={(name,value)=>onChangeInput(name,value)}
              onChangeText={(value)=>setRegData(prev=> ({...prev, password:value}))}
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
              <Text style={styles.btnSignupText}>Зарегистрироваться</Text>
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
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // alignItems: "center",
    // justifyContent: "center",
    justifyContent: "flex-end",
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
