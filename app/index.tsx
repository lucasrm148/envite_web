import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RoutesInvite from "./src/Routes/ConviteRoutes"
import { EventContextProvider } from './src/States/ConfirmeUserState';
export default function App() {
  return (
    <View style={{flex:1}}>
      <EventContextProvider>
      <RoutesInvite/>    
      </EventContextProvider>
    
      <StatusBar style="auto" />
    </View>
  );
}


