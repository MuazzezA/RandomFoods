import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View} from 'react-native';

export const OnBoardingScreen = () => {
  const setOnBoarding = async () => {
    try {
      await AsyncStorage.setItem('@completeOnBoarding', 'true');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setOnBoarding();
  }, []);

  return <View></View>;
};
