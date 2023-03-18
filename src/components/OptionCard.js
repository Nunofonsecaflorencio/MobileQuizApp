import React from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import { COLORS, FONTS } from '../constants';


function OptionCard({ index, option, onPressOption }) {

  return (
    <TouchableOpacity onPress={() => onPressOption(index)}
      activeOpacity={0.8}
      underlayColor={COLORS.secundary}>
        <View style={{
            flexDirection: 'row',
            backgroundColor: COLORS.tertiary,
            padding: 15,
            marginVertical: 10,
            alignItems: 'center',
            borderRadius: 10,
            
          }}>

            <Text style={{
                fontFamily: FONTS.bold,
                fontSize: 25,
                color: COLORS.lighter,
                marginRight: 15,
                backgroundColor: COLORS.secundary,
                paddingHorizontal: 5,
                borderRadius: 10,
            }}>{String.fromCharCode(65 + index)}</Text>

            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: 20,
                color: COLORS.darker,
                marginRight: 20,
            }}
            adjustsFontSizeToFit={true}
            numberOfLines={2}
            >{option}</Text> 

        </View>
    </TouchableOpacity>
  );
};

export default OptionCard;
