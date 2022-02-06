// import * as Font from "expo-font";
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";
import { LoginScreen } from "./Screens/LoginScreen";
// import { AppLoading } from "expo";
// import AppLoading from 'expo-app-loading';
import { useState, useEffect } from "react";

// const loadFonts = async () => {
//   await Font.loadAsync({
  //     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  //     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  //   });
  // };

  // console.log(loadFonts());
  const margins = 16*2;
  // const window = Dimensions.get("window").width;
  // console.log(window);
// const screen = Dimensions.get("screen");

export default function App() {
  // const [dimensions, setDimensions] = useState({ window });
  const [dimensions, setDimensions] = useState(Dimensions.get('window').width - margins);

  useEffect(() => {
    // const subscription = Dimensions.addEventListener(
    //   "change",
    //   ({ window }) => {
    //     setDimensions({ window:window.width });
    //   }
    // );
    // return () => subscription?.remove();
    const onChange = ()=>{
      const width = Dimensions.get('window').width -16*2;
      // const width = Dimensions.get('window').width - margins;
      setDimensions(width)

    }
    // Dimensions.addEventListener('change', onChange)
    const subscription = Dimensions.addEventListener('change', onChange)

    return () => subscription?.remove()
    // {


      // Dimensions.removeEventListener('change', onChange)
    // };
  }, []);
  const [loaded] = useFonts({
    // RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    // RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    // RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  })
  if(!loaded){
    return null
  }

  // const [dimensions, setDimensions] = useState(Dimensions.get('window').width-16*2);



  // const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  // if (!isFontsLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsFontsLoaded(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <View style={styles.container}>
      {/* <RegistrationScreen></RegistrationScreen> */}
<LoginScreen></LoginScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: 'RobotoRegular',
    // fontWeight: '900',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
