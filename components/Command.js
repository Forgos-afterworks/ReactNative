import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import {TouchableOpacity} from "react-native";

const Command = ({command, moreInformation}) => {
    console.log(command);

    return (
        <View style={styles.todo}>
            <TouchableOpacity onPress={(e) => moreInformation(command.idCommande)}>
                <FontAwesome5 name="trash" size={18} color="black"/>
            </TouchableOpacity>
            <Text style={styles.text}>
                Commande n° {command.idCommande}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
        todo: {
            borderWidth: 1,
            borderStyle: "dashed",
            borderColor: "coral",
            borderRadius: 10,
            padding: 15,
            marginBottom: 13,
            flexDirection: "row",
            alignItems: "center"
        }, text: {
            marginLeft: 14
        }
    }
)

export default Command;