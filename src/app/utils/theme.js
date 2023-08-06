import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const colors = {
  primary: '#A1C298',
  primaryDark: '#A0C49D',
  primaryLight: '#F7FFE5',
  secondary: '#03dac6',
  secondaryDark: '#018786',
  secondaryLight: '#b1f2e8',
  error: '#b00020',
  white: '#ffffff',
  black: '#000000',
};

const sizes = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 28,
  padding: 8,
  radius: 10,
  container: 40,
  width: width,
  height: height,
};

export {sizes, colors};
