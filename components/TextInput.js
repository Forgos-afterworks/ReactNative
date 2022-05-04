import React from "react";
import {Entypo as Icon} from "@expo/vector-icons"
import {View, StyleSheet, TextInput as RNTextInput} from "react-native";

const TextInput = ({icon, ...otherProps}) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={24} color={"#223e4b"} style={styles.icon}/>
            <RNTextInput
                style={styles.input}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#2E4857",
        borderRadius: 20,
        borderWidth: 1
    }, icon: {
        padding: 10
    }, input: {
        padding: 10
    }
})

export default TextInput