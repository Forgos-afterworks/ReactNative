import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CommandScreen from "../screens/CommandScreen";
import { Feather, Ionicons  } from '@expo/vector-icons';
import AccountScreen from "../screens/AccountScreen";
import DetailCommandStackNavigator from "./DetailCommandStackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={"CommandNavigator"}
                       screenOptions={{
                           headerStyle: {
                               backgroundColor: "#213B8E"
                           }, headerTitleStyle: {
                               color: "white",
                               fontWeight: "bold"
                           }, headerTitleAlign: "center",
                           tabBarStyle: {
                               backgroundColor: "#213B8E",
                               borderRadius: 15,
                               fontWeight: "bold",
                               marginBottom: 10,
                               marginHorizontal: 15
                           }, tabBarActiveTintColor: "#E33636",
                           tabBarInactiveTintColor: "#FFF"
                       }}>
            <Tab.Screen name={"CommandNavigator"} component={DetailCommandStackNavigator}
                        options={{
                            headerTitle: "Commandes",
                            tabBarIcon: ({color, focused}) => <Feather name="shopping-cart" size={focused ? 28 : 24}
                                                                       color={color}/>
                        }}/>
            <Tab.Screen name={"Account"} component={AccountScreen}
                        options={{
                            headerTitle: "Mon compte",
                            tabBarIcon: ({color, focused}) => <Ionicons name="person" size={focused ? 28 : 24}
                                                                       color={color}/>
                        }}/>
        </Tab.Navigator>
    )
}

export default TabNavigator