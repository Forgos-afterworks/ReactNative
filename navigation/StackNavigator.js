import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const LogInStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Login"} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={"Login"} component={LoginScreen}/>
            <Stack.Screen name={"Tab"} component={TabNavigator}/>
        </Stack.Navigator>
    )
}

export default LogInStackNavigator