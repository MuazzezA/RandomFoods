import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  root: {
    backgroundColor: colors.secondaryDark,
    height: sizes.container,
    width: sizes.width,
    alignSelf: 'center',
    borderBottomRightRadius: sizes.radius * 2,
  },
  text: {
    fontSize: sizes.medium,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    margin: sizes.padding,
    letterSpacing: 1,
  },
});
