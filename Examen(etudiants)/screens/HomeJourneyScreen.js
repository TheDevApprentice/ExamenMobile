import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const HomeJourneyScreen = ({navigation}) => {
    const addTrip = async () => {
        navigation.navigate('CreateTrips')
    };

    const seeTrip = async () => {
        navigation.navigate('ListTrips')
    };
    return (
        <View style={styles.container}>
            <Image style={styles.previewImage} source={require('./../assets/diary.png')} />
            <PrimaryButton testID="btnAddTripHome" onPress={addTrip}>Ajouter un nouveau voyage</PrimaryButton>
            <PrimaryButton testID="btnSeeTripsHome" onPress={seeTrip}>Voir mes voyages</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 240, height: 240,
        border: "1px solid black", 
        borderRadius: 15
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    title: {
        height: 40,
        width: 250,
    },
    previewImage: {
        width: 250,
        height: 250,
    },
});

export default HomeJourneyScreen;