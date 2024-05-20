import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TripItem from '../components/TripItem';

const JourneysScreen = ({navigation}) => {
  const [trips, setTrips] = useState([]);
  
  useEffect(() => {
    // const jsonValue = AsyncStorage.getItem('trips');
    // jsonValue != null ? JSON.parse(jsonValue) : null;
    // setTrips(jsonValue);
    // console.log(jsonValue)

    // A décommenter, je me suis arreter la parce que je n'arrive pas à lire la donnée dans l'asyncstorage et donc je ne sais pas si j'ai résussis à la mettre
    // Je soulève le point que j'ai suivis ce site https://react-native-async-storage.github.io/async-storage/docs/usage
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        {trips === [] ? 
          (
            <Text style={styles.title}>Aucun voyage à afficher</Text>
          )
        :
          (
              <FlatList 
              data={trips}
              renderItem = {itemTrip => {return(
                <TripItem 
                  text={itemTrip.item.text}
                  date={itemTrip.item.date}
                  imageTrip={itemTrip.item.imageTrip}
                  keyValue={itemTrip.item.key} 
                  />
              )}}
            />
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
},
sub_container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#fff"
},
  todosContainer:{
    flex:7
  },
  journeyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  journeyImage: {
    width: 50,
    height: 50,
  }
});

export default JourneysScreen;