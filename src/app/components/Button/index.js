import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export const Button = ({onPress, title, preset, ...rest}) => (
  <TouchableOpacity
    onPress={onPress}
    style={preset ? styles[preset] : styles.primary}
    {...rest}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
