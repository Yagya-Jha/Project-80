import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import DailyPic from './Screens/DailyPic';
import StarMap from './Screens/StarMap';
import SpaceCrafts from './Screens/SpaceCrafts';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown: false}}>
      <Stack.Screen name = "Home" component = {Home}></Stack.Screen>
      <Stack.Screen name = "SpaceCrafts" component = {SpaceCrafts}></Stack.Screen>
      <Stack.Screen name = "DailyPic" component = {DailyPic}></Stack.Screen>
      <Stack.Screen name = "StarMap" component = {StarMap}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
