import { StyleSheet, View, Text, Pressable } from "react-native";

export default function TripItem(props){
    return (
        <Pressable>
            <View style = {styles.tripItem}>
                <Text style = {styles.tripText}>{props.name}</Text>
                <Text style = {styles.tripText}>{props.date}</Text>
                <Image source={{ uri: props.imageTrip }} style={styles.previewImage} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    tripItem:{
        margin:5,
        padding:10,
        borderRadius:5,
        backgroundColor:"blue"
    },
    tripText:{
        color:"white",
        textAlign:"center"
    }
});