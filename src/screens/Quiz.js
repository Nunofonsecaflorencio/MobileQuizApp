import React, { useEffect, useState }from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, GAME } from '../constants';
import { OptionCard } from '../components';


function Quiz({navigation, route}) {
  const [index, setIndex] = useState(0);
  const [isReveled, setIsReveled] = useState(true);
  const { category, questions } = route.params
  const [options, setOptions] = useState([]);

  useEffect(() => {
    GAME.sortByDifficulty(questions)
  }, [])

  useEffect(()=>{
    // Show Modal if ended.
    const allOptions = [questions[index].correctAnswer, ...questions[index].incorrectAnswers]
    setOptions(allOptions)
  }, [index])


  const goToNext = () => {
    if (isReveled) {
      setIndex(prev => (prev + 1) % questions.length) // TODO
    }
  }

  const chooseOption = optionIndex => {
    // TODO
  }

  return (
    <View style={{
      flex: 1,
      padding: 20,
      backgroundColor: COLORS.background
    }}>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        marginTop: 30,
        marginBottom: 15,
        borderBottomColor: COLORS.tertiary,
        borderBottomWidth: 2,
      }}>
        <Text style={{
          color: COLORS.lighter,
          fontFamily: FONTS.medium,
          fontSize: 25,
        }}><Text style={{ color: COLORS.secundary }}>{index + 1}</Text> / {questions.length}</Text>

        <Text style={{
          color: COLORS.lighter,
          fontFamily: FONTS.regular,
          fontSize: 25,
        }}>{questions[index].difficulty?.toUpperCase()}</Text>
      </View>



      <Text style={{
          color: COLORS.lighter,
          fontFamily: FONTS.medium,
          fontSize: 30,
          
        }}
          adjustsFontSizeToFit={true}
          numberOfLines={4}
        >{questions[index].question}</Text>  

      <View style={{
        flex: 4,
        marginTop: 20,
        marginBottom: 20
      }}>
        {
          options.map((option, i) => (
            <OptionCard
              key={i}
              index={i}
              option={option}
              onPressOption={optionIndex => chooseOption(optionIndex)}
            />
          ))
        }
      </View>

      <TouchableOpacity style={{
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: COLORS.secundary,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 50,
        paddingVertical: 15,
      }}
        onPress={goToNext} 
        >
        <Text  style={{
          color: COLORS.lighter,
          fontFamily: FONTS.regular,
          fontSize: 20,
        }}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quiz;
