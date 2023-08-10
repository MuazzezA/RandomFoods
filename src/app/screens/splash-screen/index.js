import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing} from 'react-native';
import SplashSvg from '../../../assets/svg/splash-2.svg';
import styles from './styles';

export const SplashScreen = ({isComplate, navigation}) => {
  console.log('splash:isComplate : ', isComplate);
  const size = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.timing(size, {
      toValue: styles.svg.width,
      duration: 1100,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
    });
  };
  const animatedStyles = {
    width: size,
    height: size,
  };

  useEffect(() => {
    animate();
    setTimeout(() => {
      if (isComplate === true) {
        navigation.navigate('home');
      } else {
        navigation.navigate('onbording');
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.animatedContainer}>
        <Animated.View style={animatedStyles}>
          <SplashSvg width="100%" height="100%" />
        </Animated.View>
      </View>
      <Animated.Text style={[styles.text, {opacity}]}>
        Bugün Menüde Ne Var?
      </Animated.Text>
    </View>
  );
};
