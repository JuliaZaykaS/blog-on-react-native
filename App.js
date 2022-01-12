import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {RegistrationScreen} from './Screens/RegistrationScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen></RegistrationScreen>
      {/* <ImageBackground source={require("./assets/images/photo-BG.jpg")} style={styles.background}> */}

            {/* </ImageBackground> */}
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background:{
    flex: 1,
    // resizeMode: 'cover',
    justifyContent: 'center'

},
});
