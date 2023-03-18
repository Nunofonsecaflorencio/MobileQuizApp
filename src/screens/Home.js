import React from 'react';
import {
  View, Text, ScrollView, Linking
} from 'react-native';
import { COLORS, FONTS, ROUTES, GAME } from '../constants';
import { CategoryCard } from '../components';

import changeNavigationBarColor from 'react-native-navigation-bar-color';







function Home({ navigation }) {

  changeNavigationBarColor('transparent')

  const goToQuiz = category => {
    const parsedCategory = GAME.parseCategoryString(category)
    GAME.fetchQuestions(parsedCategory)
      .then(json => (
        navigation.navigate(ROUTES.QUIZ, {category: category, questions: json})
      ))
      .catch(reason => console.log(reason))
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.background, 
    }}>
    
    <ScrollView style={{
      marginTop: 30,
      marginBottom: 50,
    }}
    decelerationRate='fast'>
    {
      GAME.categories.map(([category, emoji]) => (
        <CategoryCard 
          key={category}
          category={category}
          emoji={emoji}
          onPressCategory={(category) => goToQuiz(category)} />
      ))
    }

    <View style={{
        backgroundColor: COLORS.background, 
        alignItems: 'center',
        marginVertical: 10
      }}>
      <Text style={{
          fontFamily: FONTS.light,
          fontSize: 18,
          color: COLORS.lighter
        }}>Made by <Text style={{
            color: COLORS.secundary,
            textDecorationLine: 'underline',
        }}
          onPress={() => Linking.openURL('https://www.instagram.com/nuno2f')}
        >Nuno Fonseca</Text></Text>
    </View>
    </ScrollView>

    </View>
  );
};

export default Home;
