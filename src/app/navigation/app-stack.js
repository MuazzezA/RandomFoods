import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, OnBoardingScreen, SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

const isOnBoarding = async () => {
  // try {
  //   const onBoarding = await AsyncStorage.getItem('@completeOnBoarding');
  //   return onBoarding === 'true' ? true : false;
  // } catch (error) {
  //   return false;
  // }
  return false;
};

const AppStack = () => {
  useEffect(() => {
    isOnBoarding().then(res => {
      console.log(res);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* {isOnBoarding ? (
          <>
            <Stack.Screen name="splash">
              {props => <SplashScreen {...props} onboarding={isOnBoarding} />}
            </Stack.Screen>
            <Stack.Screen name="home" component={HomeScreen} />
          </>
        ) : ( */}
        <>
          <Stack.Screen name="splash">
            {props => <SplashScreen {...props} onboarding={isOnBoarding} />}
          </Stack.Screen>
          <Stack.Screen name="onbording" component={OnBoardingScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
        </>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
