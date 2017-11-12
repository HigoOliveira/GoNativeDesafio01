import { Platform } from 'react-native';

module.exports = {
  marginVertical: 10,
  marginHorizontal: 20,
  marginBase: 5,
  /* Post Values */
  widthPost: '100%',
  paddingPost: 20,
  radiusPost: 5,
  shadowOffsetHorizontalPost: 10,
  shadowOffsetVerticalPost: 2,
  shadowOpacityPost: '100%',
  /* HR Values */
  heightHR: 1,
  marginVerticalHR: 10,
  /* Header */
  shadowOffsetHorizontalHeader: 10,
  shadowOffsetVerticalHeader: 2,
  shadowOpacityHeader: 10,
  shadowRadiusHeader: 5,
  fontTitleHeader: 16,
  heightHeader: (Platform.OS === 'ios') ? 64 : 54,
};
