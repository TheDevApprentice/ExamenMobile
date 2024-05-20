import CreateJourneyScreen from './screens/CreateJourneyScreen';
import JourneysScreen from './screens/JourneysScreen';
import HomeJourneyScreen from './screens/HomeJourneyScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import MyStack from "./MyStack";
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const Stack = createNativeStackNavigator(); 
  const tripJsonValue = JSON.stringify([]);
  AsyncStorage.setItem('trips', tripJsonValue)
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
};

export default App;