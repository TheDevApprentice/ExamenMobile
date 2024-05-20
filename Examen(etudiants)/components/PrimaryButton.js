import {View, Text, Pressable, StyleSheet} from "react-native";

export default function PrimaryButton(props){
    return(
        <View style={styles.outercontainer}>
            <Pressable 
                style={({pressed})=> pressed? [styles.innerContainer,styles.pressed]: styles.innerContainer}
                onPress={props.onPress}
                android_ripple={{color:"black"}}
                testID= {props.testID}
            >
                <Text style={styles.text}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    outercontainer:{
        marginTop: 15,
        borderRadius:25,
        overflow:"hidden"
    },
    innerContainer:{
        backgroundColor:"blue",
        paddingVertical:10,
        paddingHorizontal:15,
        elevation:10, 
        width: 250,
        height: 40
    },
    text:{
        textAlign:"center",
        color: "white"
    },
    pressed:{
        opacity:0.75
    }
});