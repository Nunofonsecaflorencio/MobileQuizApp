import React from 'react';
import {
  View, Text, StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from "./navegation";
import { COLORS, FONTS } from './constants';


function App() {
  return (
    <NavigationContainer>
      <StatusBar 
      backgroundColor={COLORS.primary}
      barStyle='light-content'
      />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
