import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, FONTS, ROUTES } from '../constants';
import { Home, Quiz } from "../screens";
import { HomeHeader } from '../components';
import { View, Text } from 'react-native';


const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
      <Stack.Navigator initialRouteName={ROUTES.HOME}
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.lighter,
          headerTitleStyle: {
            fontFamily: FONTS.regular,
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen name={ROUTES.HOME} component={Home} 
          options={{
            header: () => <HomeHeader  />
          }}
        />
        <Stack.Screen name={ROUTES.QUIZ} component={Quiz} 
          options={({ route }) => ({ title: route.params?.category })}
        />
      </Stack.Navigator>
    );
  }
  
export default StackNavigator;