import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../utils/theme';

export default StyleSheet.create({
  root: {
    flex: 1,

    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodText: {
    fontSize: sizes.medium,
    fontWeight: 'bold',
    color: colors.error,
  },
  listContainer: {
    marginTop: sizes.padding,
    marginBottom: sizes.padding * 5,
    backgroundColor: colors.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: sizes.shadowOpacity,
    shadowRadius: sizes.shadowRadius,
    elevation: sizes.elevation,
    borderRadius: sizes.radius,
  },
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: sizes.padding,
  },
  text: {
    fontSize: sizes.medium,
    fontWeight: 'bold',
    color: colors.black,
    lineHeight: sizes.large,
    marginVertical: sizes.padding,
  },
  error: {
    fontSize: sizes.small,
    color: colors.error,
  },
});
