import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: sizes.padding * 4,
    width: sizes.width,
    alignItems: 'center',
  },
  svg: {
    // alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    letterSpacing: 2,
    marginTop: 50,
    fontFamily: 'Montserrat',
  },
  desc: {
    fontFamily: 'Manrope',
    marginTop: 30,
  },
  textContainer: {
    padding: 10,
    paddingTop: 20,
    width: sizes.width * 0.8,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: sizes.width * 0.4,
    height: 30,
    position: 'absolute',
    bottom: 40,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.secondaryDark,
  },
  textButtonContainer: {
    marginTop: 40,
    alignSelf: 'center',
  },
});
