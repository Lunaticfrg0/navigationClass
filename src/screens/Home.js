import React from 'react';
import {  View, Text, Button} from "react-native";

export default function Home(props){
    const {navigation} = props;
    return (
        <View>
            <Text>Estamos en el Home</Text>
            <Button title = "Ir a AboutPage" onPress = { () => navigation.navigate("about")}/>
            <Button title = "Ir a ContactPage" onPress = { () => navigation.navigate("contact")}/>
        
            <Button 
            title = "Ir a CoursestPage" 
            //navigation.navigate("contact", {screen: 'courses'}) nos permite navegar directamente a stacks que aun no han cargado
            //Primero indicamos el stack en donde esta y luego el nombre de la screen.
            onPress = { () => navigation.navigate("contact", {screen: 'courses'})}/>
        </View>
    )
}