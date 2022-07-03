import * as React from 'react';
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './screens/OnboardingScreen';
import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={style.container}>
    <NavigationContainer>
      {/* <StatusBar hidden /> */}
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen options={{headerShown:false}} name="OnBoarding" component={OnBoarding} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>

  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
})
export default App;