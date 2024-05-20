import CreateJourneyScreen from './screens/CreateJourneyScreen';
import JourneysScreen from './screens/JourneysScreen';
import HomeJourneyScreen from './screens/HomeJourneyScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState, useEffect, useRef } from 'react';

const StackTrip = createNativeStackNavigator(); 

const MyStack = () => {
    const Home = useRef(HomeJourneyScreen);
    const CreateTrips = useRef(CreateJourneyScreen);
    const ListTrips = useRef(JourneysScreen);
    
  return (
      <StackTrip.Navigator>
        <StackTrip.Screen
          name="Home"
          component={Home.current}
          options={{title: 'Carnet de voyage'}}
        />
        <StackTrip.Screen 
          name="CreateTrips" 
          component={CreateTrips.current} 
          options={{title: 'Créer un voyage'}}/>
        <StackTrip.Screen 
          name="ListTrips" 
          component={ListTrips.current} 
          options={{title: 'Voir mes voyages'}} />
      </StackTrip.Navigator>
  );
};

export default MyStack;