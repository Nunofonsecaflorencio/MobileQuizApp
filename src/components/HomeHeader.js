import React from 'react';
import {
  View, Text
} from 'react-native';
import { COLORS, FONTS } from '../constants';


function HomeHeader() {
  return (
    <View style={{ 
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        paddingVertical: 70,
        justifyContent: 'center',
        }}>
      
      <Text style={{
            fontFamily: FONTS.medium,
            fontSize: 40,
            color: COLORS.lighter
          }}>Quiz Game</Text>
    </View>
  );
};

export default HomeHeader;
