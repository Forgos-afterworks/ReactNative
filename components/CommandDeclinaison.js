import React from "react";
import {Text, View, StyleSheet} from "react-native";

const CommandDeclinaison = ({item}) => {
    return (
        <View style={styles.commandDeclinaison}>
            <Text style={styles.title}>
                {item.idProduitDeclinaison.idProduit.nom} - {item.idProduitDeclinaison.idDeclinaison.nom} x {item.quantitee}
            </Text>
            <Text>
                Prix de cette commande {item.prixHt}€
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    commandDeclinaison: {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#E33636",
            borderRadius: 10,
            padding: 10,
            flexDirection: "column",
            marginTop: 10
        }, title: {
            fontWeight: "bold",
            fontSize: 15,
            flexDirection: "row"
        }
    }
)

export default CommandDeclinaison;