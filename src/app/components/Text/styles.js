import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';

export default StyleSheet.create({
  text: {
    fontSize: 14,
    letterSpacing: 0.5,
    color: colors.black,
    fontFamily: 'Manrope',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: colors.secondaryDark,
    fontFamily: 'Manrope',
    textDecorationLine: 'underline',
  },
});
