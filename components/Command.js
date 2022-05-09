import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native";

const Command = ({command, moreInformation}) => {
    console.log(command);

    return (
        <TouchableOpacity onPress={(e) => moreInformation(command.idCommande)}>
            <View style={styles.command}>
                <Text style={styles.title}>
                    Commande n° {command.idCommande}
                </Text>
                <Text>
                    Table n° {command.idTable.nom}
                </Text>
                <Text>
                    État de la commande : {command.idStatut.nom}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
        command: {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#E33636",
            borderRadius: 10,
            padding: 10,
            flexDirection: "column",
            marginTop: 10
        }, title: {
            fontWeight: "bold",
            fontSize: 15
        }
    }
)

export default Command;