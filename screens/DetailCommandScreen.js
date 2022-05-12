import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList, Picker} from "react-native";
import CommandsApi from "../services/CommandsApi";
import CommandDeclinaison from "../components/CommandDeclinaison";

const DetailCommandScreen = ({route: {params}}) => {

    const [commandDeclinaisons, setCommandDeclinaisons] = useState()
    const [statuts, setStatuts] = useState()
    const [selectedValue, setSelectedValue] = useState(params.item.idStatut.nom)
    const idCommand = params.item.idCommande
    const fetchCommandDeclinaisons = async () => {
        const data = await CommandsApi.getCommandDeclinaisonByCommandId(idCommand)
        setCommandDeclinaisons(data)
    }
    const fetchStatut = async () => {
        const data = await CommandsApi.getAllStatut()
        setStatuts(data)
    }
    useEffect(() => {
        fetchCommandDeclinaisons()
        fetchStatut()
    }, [])

    const _pickerItem = () => {
        statuts.map((statut) => {
                <Picker.Item label={statut.nom} value={statut.idStatut}/>
            }
        )
    }

    const renderItem = ({item}) => {
        return <CommandDeclinaison item={item}/>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détail de la commande {idCommand}</Text>
            <Text style={styles.content}>Table {params.item.idTable.nom}</Text>
            <Text>État : {selectedValue}</Text>
            <FlatList data={commandDeclinaisons} renderItem={renderItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    }, title: {
        fontWeight: "bold",
        fontSize: 25
    }, content: {
        fontSize: 15
    }, row: {
        flexDirection: "row"
    }
})

export default DetailCommandScreen