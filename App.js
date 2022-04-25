import { View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import DrawerNavigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular' : require("./assets/fonts/Nunito-Regular.ttf"),
  'nunito-bold' : require("./assets/fonts/Nunito-ExtraBold.ttf")
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  if(fontsLoaded) {
    return (
      DrawerNavigator()
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)} 
        onError={() => console.log('error')}
      />
    );
  }
}

