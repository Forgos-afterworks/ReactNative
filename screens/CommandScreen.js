import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import CommandsApi from "../services/CommandsApi";
import Command from "../components/Command";

const CommandScreen = (props) => {

    const [commands, setCommands] = useState([])
    const fetchCommands = async () => {
        const data = await CommandsApi.getAllCommands()
        setCommands(data)
    }
    useEffect(() => {
        fetchCommands()
    }, [])

    const renderItem = ({item}) => {
        return <Command item={item} {...props}/>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des commandes</Text>
            <FlatList data={commands} renderItem={renderItem} keyExtractor={item => item.idCommande}/>
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