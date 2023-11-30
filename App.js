import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Open up App.js to start working on your app!</Text>
            <Image source={require("./ddong2.png")} style={styles.local_image}></Image>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        color: "red",
        fontSize: 20,
        whiteSpace: "nowrap",
    },
    local_image: {
        width: 100,
        height: 100,
    },
});
