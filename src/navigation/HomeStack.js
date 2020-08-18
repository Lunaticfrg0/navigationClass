import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import About, { AboutStack } from "../screens/About";

const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "home"
            //El utilizar tab nos permite navegar dentro de otras pantallas sin salir del tab de home
             component = {Home} 
             options = {{title: "Home"}}/>
            <Stack.Screen name = "about" component = {About} options = {{title: "About"}}/>
        </Stack.Navigator>
    )
}