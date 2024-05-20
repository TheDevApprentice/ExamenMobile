import { View, Text, Pressable, StyleSheet } from "react-native";

function CustomButton({ children, whenPressed }) {
  return (
    <View style={styles.outterContainer}>
      <Pressable
        onPress={whenPressed}
        style={styles.innerContainer}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 25,
    margin: 4,
    overflow: "hidden",
    width: 300,
  },
  innerContainer: {
    backgroundColor: "purple",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
});