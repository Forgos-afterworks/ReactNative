import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountScreen = ({navigation}) => {

    const handleDisconnect = async () => {
        try {
            await AsyncStorage.clear()
            navigation.replace("Login")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mon compte</Text>
            <Button style={styles.btn} title={"Déconnexion"} onPress={handleDisconnect}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: "center",
        alignSelf: "center"
    }, title: {
        fontWeight: "bold",
        fontSize: 25
    }, btn: {
        flexDirection: "column",
        padding: 10,
        backgroundColor: "#E33636",
        borderRadius: 15,
        marginTop: 25,
        fontSize: 20
    }
})

export default AccountScreen