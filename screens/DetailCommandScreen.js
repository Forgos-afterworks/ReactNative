import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import CommandsApi from "../services/CommandsApi";
import CommandDeclinaison from "../components/CommandDeclinaison";
import Button from "../components/Button";

const DetailCommandScreen = ({route: {params}}) => {

    const [commandDeclinaisons, setCommandDeclinaisons] = useState()
    const [statut, setStatut] = useState(params.item.idStatut)
    const idCommand = params.item.idCommande
    const [changeStatut, setChangeStatut] = useState(false)
    const fetchCommandDeclinaisons = async () => {
        const data = await CommandsApi.getCommandDeclinaisonByCommandId(idCommand)
        setCommandDeclinaisons(data)
    }
    const fetchStatut = async () => {
        const data = await CommandsApi.getStatutByIdCommand(idCommand)
        setStatut(data)
    }
    useEffect(() => {
        fetchCommandDeclinaisons()
        fetchStatut()
    }, [changeStatut])

    const renderItem = ({item}) => {
        return <CommandDeclinaison item={item}/>
    }

    const handleNextStatut = async (nextIdStatut) => {
        await CommandsApi.updateCommand(idCommand, { "idStatut": nextIdStatut})
        setChangeStatut(!changeStatut)
    }

    const _normalPath = () => {
        const idStatut = statut.idStatut
        let nextIdStatut = 1
        let titleBtn = "Nouvelle commande"
        if (idStatut === 1) {
            nextIdStatut = 2
            titleBtn = "Acceptée"
        } else if (idStatut === 2) {
            nextIdStatut = 4
            titleBtn = "En préparation"
        } else if (idStatut === 4) {
            nextIdStatut = 5
            titleBtn = "Attente de livraison"
        } else if (idStatut === 5) {
            nextIdStatut = 6
            titleBtn = "Livrée"
        } else if (idStatut === 6) {
            nextIdStatut = 7
            titleBtn = "Payéee"
        } else if (idStatut === 7) {
            nextIdStatut = 11
            titleBtn = "Réclamation"
        }
        if (idStatut === 1 || idStatut === 2 || idStatut === 4 || idStatut === 5 || idStatut === 6 || idStatut === 7 ) {
            return <Button style={styles.btn} title={titleBtn} onPress={() => handleNextStatut(nextIdStatut)}/>
        }
    }
    const _refusePath = () => {
        if (statut.idStatut === 1) {
            return <Button style={styles.btn} title={"Refuser"} onPress={() => handleNextStatut(3)}/>
        }
    }
    const _outOfStockPath = () => {
        if (statut.idStatut === 1) {
            return <Button style={styles.btn} title={"Rupture de stock"} onPress={() => handleNextStatut(10)}/>
        }
    }
    const _clientGoOutAvLPath = () => {
        const idStatut = statut.idStatut
        if (idStatut === 1 || idStatut === 2 || idStatut === 4 || idStatut === 5) {
            return <Button style={styles.btn} title={"Client partis avant livraison"}
                           onPress={() => handleNextStatut(8)}/>
        }
    }
    const _clientGoOutApLPath = () => {
        if (statut.idStatut === 6) {
            return <Button style={styles.btn} title={"Client partis après livraison"}
                           onPress={() => handleNextStatut(11)}/>
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détail de la commande {idCommand}</Text>
            <Text style={styles.content}>Table {params.item.idTable.nom}</Text>
            <Text>État : {statut.nom}</Text>

            <View style={styles.row}>
                {_normalPath()}
                {_refusePath()}
                {_outOfStockPath()}
            </View>
            {_clientGoOutAvLPath()}
            {_clientGoOutApLPath()}

            <FlatList data={commandDeclinaisons} renderItem={renderItem}
                      keyExtractor={item => Math.random()}/>
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
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    }, btn: {
        padding: 6,
        borderRadius: 15,
        marginEnd: 10,
        backgroundColor: "#E33636",
        fontSize: 18,
        marginTop: 7,
        alignItems: "center",
        alignSelf: "center"
    }
})

export default DetailCommandScreen