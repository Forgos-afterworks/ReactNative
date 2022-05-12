import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet} from "react-native";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import AuthApi from "../services/AuthApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {

    const [login, setLogin] = useState("johan.rousseau39@gmail.com");
    const [password, setPassword] = useState("secret");
    const [loginStyleRequired, setLoginStyleRequired] = useState(styles.required)
    const [passwordStyleRequired, setPasswordStyleRequired] = useState(styles.required)
    const [alert, setAlert] = useState();

    useEffect(() => {
        if (login) setLoginStyleRequired(styles.hidden)
        else setLoginStyleRequired(styles.required)
        if (password) setPasswordStyleRequired(styles.hidden)
        else setPasswordStyleRequired(styles.required)
    }, [login, password])

    const handleLogin = async () => {
        try {
            if (!login && !password) throw new Error("Credentials invalids")
            const data = await AuthApi.login(login, password)
            const token = data.token
            await AsyncStorage.setItem("token", token)

            navigation.replace("Tab")
        } catch (e) {
            setAlert(true)
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connexion</Text>

            { alert && (
                <Text style={styles.alert}>Identifiants invalides</Text>
            )}

            <View style={styles.input}>
                <TextInput icon={"mail"} placeholder={"Entrez votre login"} keyboardType={"email-address"}
                           onChangeText={(e) => setLogin(e)} value={login}/>
                <Text style={loginStyleRequired}>* ce champ est obligatoire</Text>
            </View>
            <View style={styles.input}>
                <TextInput icon={"key"} placeholder={"Entrez votre mot de passe"} secureTextEntry
                           onChangeText={(e) => setPassword(e)} value={password}/>
                <Text style={passwordStyleRequired}>* ce champ est obligatoire</Text>
            </View>
            <View style={styles.btn}>
                <Button title={"Se connecter"} onPress={handleLogin}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    }, title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 40
    }, input: {
        paddingVertical: 10,
        width: "100%"
    }, btn: {
        padding: 10,
        backgroundColor: "#E33636",
        borderRadius: 15
    }, required : {
        color: "red"
    }, hidden: {
        opacity: 0
    }, alert: {
        backgroundColor: "#E33636"
    }
})

export default LoginScreen