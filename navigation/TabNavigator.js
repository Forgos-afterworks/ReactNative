import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AccueilScreen from "../screens/AccueilScreen";
import { Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={AccueilScreen}
                       screenOptions={{
                           headerStyle: {
                               backgroundColor: "#2E4657"
                           }, headerTitleStyle: {
                               color: "white",
                               fontWeight: "bold"
                           }, headerTitleAlign: "center",
                           tabBarStyle: {
                               backgroundColor: "#2E4657",
                               borderRadius: 15,
                               fontWeight: "bold",
                               marginBottom: 10,
                               marginHorizontal: 15
                           }, tabBarActiveTintColor: "#F18F01",
                           tabBarInactiveTintColor: "#FFF"
                       }}>
            <Tab.Screen name={"Posts"} component={AccueilScreen}
                        options={{
                            headerTitle: "Liste des posts",
                            tabBarIcon: ({color, focused}) => <Feather name="file" size={focused ? 28 : 24}
                                                                       color={color}/>
                        }}/>
        </Tab.Navigator>
    )
}

export default TabNavigator