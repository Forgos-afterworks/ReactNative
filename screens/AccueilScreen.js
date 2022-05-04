import React from "react";
import {View, Text, StyleSheet} from "react-native";

const AccueilScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Accueil de l'application</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AccueilScreen