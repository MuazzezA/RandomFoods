import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Animated} from 'react-native';
import {Text} from '../../components';
import foods from '../../config/foods.json';
import TimeSvg from '../../../assets/svg/time.svg';
import Success from '../../../assets/svg/success.svg';
import Food from '../../../assets/svg/food.svg';

import styles from './styles';
import {sizes} from '../../utils/theme';

const slides = [
  {
    key: 0,
    svg: <TimeSvg width={300} height={300} />,
    title: 'Hoşgeldin!',
    text: foods.texts.onboard1,
  },
  {
    key: 1,
    svg: <Food width={300} height={300} />,
    title: 'Neler Var?',
    text: foods.texts.onboard2,
  },
  {
    key: 2,
    svg: <Success width={300} height={300} />,
    title: 'Başlayalım!',
    text: foods.texts.onboard3,
  },
];

export const OnBoardingScreen = ({navigation}) => {
  const scrollX = new Animated.Value(0);

  const setOnBoarding = async () => {
    try {
      await AsyncStorage.setItem('@completeOnBoarding', 'complate');
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = () => (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment={'center'}
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: true,
      })}>
      {slides.map(item => (
        <View key={item.key} style={styles.container}>
          <View style={styles.svg}>{item.svg}</View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.text}</Text>
          </View>
          {item.key === 2 && (
            <View style={styles.textButtonContainer}>
              <Text
                onPress={() => {
                  setOnBoarding().then(() => {
                    navigation.navigate('home');
                  });
                }}>
                Tamamla
              </Text>
            </View>
          )}
        </View>
      ))}
    </Animated.ScrollView>
  );

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, sizes.width);

    return (
      <View style={styles.dotContainer}>
        {slides.map(item => {
          const opacity = dotPosition.interpolate({
            inputRange: [item.key - 1, item.key, item.key + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [item.key - 1, item.key, item.key + 1],
            outputRange: [1, 2, 1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={item.key}
              opacity={opacity}
              style={[styles.dot, {transform: [{scaleX: dotSize}]}]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {renderItem()}
      {renderDots()}
    </View>
  );
};
