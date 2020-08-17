import React from 'react';
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
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
      <SafeAreaView>
        <Text>Hola mundo</Text>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});
