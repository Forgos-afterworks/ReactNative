import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import CommandsApi from "../services/CommandsApi";
import Command from "../components/Command";

const CommandScreen = () => {

    const [commands, setCommands] = useState([])
    const fetchCommands = async () => {
        const data = await CommandsApi.getAllCommands()
        console.log(data)
        setCommands(data)
    }
    useEffect(() => {
        fetchCommands()
    }, [])

    //A faire le je vais à la page de plus d'informations
    const moreInformation = (key) => {
        console.log(key)
    }

    const renderItem = ({item}) => {
        return <Command command={item}/>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des commandes</Text>
            <FlatList data={commands} renderItem={renderItem}/>
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
    }
})

export default CommandScreen