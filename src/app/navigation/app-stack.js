import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, OnBoardingScreen, SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [isCompleteOnBoarding, setIsCompleteOnBoarding] = useState();

  const isOnBoarding = async () => {
    try {
      const isComplete = await AsyncStorage.getItem('@completeOnBoarding');

      if (isComplete === 'complate') {
        setIsCompleteOnBoarding(true);
      } else {
        setIsCompleteOnBoarding(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isOnBoarding();
  }, []);

  useEffect(() => {
    console.log('app:isCompleteOnBoarding : ', isCompleteOnBoarding);
  }, [isCompleteOnBoarding]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash">
          {props => (
            <SplashScreen {...props} isComplate={isCompleteOnBoarding} />
          )}
        </Stack.Screen>
        <Stack.Screen name="onbording" component={OnBoardingScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
