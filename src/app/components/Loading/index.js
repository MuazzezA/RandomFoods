import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
import Time from '../../../assets/svg/time.svg';
import {colors} from '../../utils/theme';

export const LoadingData = () => (
  <View style={styles.container}>
    <Time />
    <ActivityIndicator size="large" color={colors.secondaryDark} />
  </View>
);
