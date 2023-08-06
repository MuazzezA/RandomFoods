import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  primary: {
    backgroundColor: colors.secondaryLight,
    borderRadius: sizes.radius,
    padding: sizes.padding,
    margin: sizes.padding,
    height: sizes.container,
    width: sizes.width - sizes.container * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.medium,
    fontWeight: 'bold',
    color: colors.black,
  },
  secondary: {
    backgroundColor: '#acbddd',
    borderRadius: sizes.radius,
    padding: sizes.padding,
    margin: sizes.padding,
    height: sizes.container,
    width: sizes.width * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
