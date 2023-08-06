import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export const Header = ({title}) => (
  <View style={styles.root}>
    <Text style={styles.text}>{title}</Text>
  </View>
);
