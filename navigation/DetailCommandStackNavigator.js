import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailCommandScreen from "../screens/DetailCommandScreen";
import CommandScreen from "../screens/CommandScreen";

const Stack = createNativeStackNavigator();

const DetailCommandStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"Command"} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={"Command"} component={CommandScreen}/>
            <Stack.Screen name={"DetailCommand"} component={DetailCommandScreen}/>
        </Stack.Navigator>
    )
}

export default DetailCommandStackNavigator