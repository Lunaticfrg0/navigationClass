import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from  '../navigation/HomeStack';
import AboutStack from  '../navigation/AboutStack';
import ContactStack from  '../navigation/ContactStack';

const Tab = createBottomTabNavigator();

//Forma con Tab Navigation
export default function Navigation() {
  return (
    <Tab.Navigator>
     <Tab.Screen 
     name="home" 
     //El usar un HomeStack nos permite usar el tab navigation y el stack de manera simultanea
     ///Permitiendonos tener varias pantallas dentro del mismo Tab
     component={HomeStack} 
     options={{title: 'Home'}} />
     <Tab.Screen name="about" component={AboutStack} options={{title: 'About'}} />
     <Tab.Screen name="contact" component={ContactStack} options={{title: 'Contact'}} />

    </Tab.Navigator>
  );
}
