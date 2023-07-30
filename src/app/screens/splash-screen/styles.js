import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 100,
  },
  svg: {
    width: width * 0.8,
    height: width * 1.2,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  animatedContainer: {
    width: width,
    height: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
