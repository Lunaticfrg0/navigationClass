import React from 'react';
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default function App(){

  return(
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});
