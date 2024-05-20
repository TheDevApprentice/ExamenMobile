import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrimaryButton from '../components/PrimaryButton';

const CreateJourneyScreen = ({navigation}) => {
    const [image, setImage] = useState("");
    const [tripName, setTripName] = useState("");
    const [tripDate, setTripDate] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    const save = async () => {
        const trip = {
            name : tripName, 
            date : tripDate, 
            imageTrip: image
        }

        console.log(trip)

        if(trip.name !== "" && trip.date !== ""){
            if(AsyncStorage.getItem('trips')){
                console.log("trip just after create still in create", trip)
                await AsyncStorage.setItem('trips', JSON.stringify(trip));
            }
            else{
                console.log("trip just after create still in create", trip)
                await AsyncStorage.setItem('trips', JSON.stringify(trip));
            }

            navigation.navigate('ListTrips');
        }
        else{
            alert("Vueillez remplir les champs avant de vouloir sauvgarder.")
        }
    };

    return (
        <View style={styles.container}>            
 
            <View style={styles.sub_container}>            
                <TextInput
                    placeholder='Voyage a Rome'
                    value={tripName}
                    style={styles.input}
                    onChangeText={setTripName}
                />
                <TextInput
                    style={styles.input}
                    value={tripDate}
                    onChangeText={setTripDate}
                    placeholder='Date de départ'
                />
            </View>

            <View style={styles.sub_container}>  
            {
            image !== "" ? 
                <Image source={{ uri: image }} style={styles.previewImage} />
                : 
                null
            }          
              
            </View>
            <View style={styles.sub_container}>            
                <PrimaryButton testID="btnSelectPicture" onPress={pickImage}>Selectionner une photo</PrimaryButton>
                <PrimaryButton testID="btnAddTrip" onPress={save}>Enregistrer le voyage</PrimaryButton>
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
    input: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderRadius: 10, 
        padding: 9
    },
    previewImage: {
        width: 250,
        height: 250,
    },
});

export default CreateJourneyScreen;