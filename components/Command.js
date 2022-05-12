import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native";

const Command = ({item, navigation}) => {
    return (
        <TouchableOpacity onPress={(e) => {
            navigation.navigate("DetailCommand", {item})
        }}>
            <View style={styles.command}>
                <Text style={styles.title}>
                    Commande n° {item.idCommande}
                </Text>
                <Text style={styles.alignItemEnd}>
                    Table n° {item.idTable.nom}
                </Text>
                <Text>
                    État de la commande : {item.idStatut.nom}
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
        }, alignItemEnd: {
            alignItems: "flex-end"
        }
    }
)

export default Command;