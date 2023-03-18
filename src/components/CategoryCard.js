import React from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import { COLORS, FONTS } from '../constants';


function CategoryCard({ category, emoji, onPressCategory }) {
  return (
    <TouchableOpacity onPress={() => onPressCategory(category)}
      activeOpacity={0.8}
      underlayColor={COLORS.secundary}>
        <View style={{
            flexDirection: 'row',
            backgroundColor: COLORS.primary,
            padding: 20,
            marginHorizontal: 15,
            marginVertical: 10,
            alignItems: 'center',
            borderRadius: 10,
            
          }}>
            {/* Icon */}
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: 25,
                color: COLORS.lighter,
                marginRight: 15
            }}>{emoji}</Text>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: 25,
                color: COLORS.lighter
            }}>{category}</Text> 

        </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
