import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

export const Text = ({children, onPress, ...props}) => {
  return (
    <RNText
      style={onPress ? styles.buttonText : styles.text}
      onPress={onPress}
      {...props}>
      {children}
    </RNText>
  );
};
