import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

module.exports = {
  /* APP Component */
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  space: {
    margin: metrics.marginBase,
  },
  /* Header Component Style */
  containerHeader: {
    backgroundColor: colors.white,
    height: metrics.heightHeader,
    maxHeight: metrics.heightHeader,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadowColorHeader,
    shadowOffset: {
      width: metrics.shadowOffsetHorizontalHeader,
      height: metrics.shadowOffsetHorizontalHeader,
    },
    shadowOpacity: metrics.shadowOpacityHeader,
    shadowRadius: metrics.shadowRadiusHeader,
  },
  titleHeader: {
    fontSize: fonts.title,
    fontWeight: 'bold',
    color: colors.colorTitleHeader,
  },
  /* HR Component Style */
  containerHR: {
    height: metrics.heightHR,
    backgroundColor: colors.backgroundHR,
    marginTop: metrics.marginVerticalHR,
    marginBottom: metrics.marginVerticalHR,
  },
  /* Post Component Style */
  containerPost: {
    backgroundColor: colors.white,
    padding: metrics.paddingPost,
    borderRadius: metrics.radiusPost,
    marginLeft: metrics.marginHorizontal,
    marginRight: metrics.marginHorizontal,
    marginTop: metrics.marginVertical,
    marginBottom: metrics.marginVertical,
    shadowColor: colors.shadowColorPost,
    shadowOffset: {
      width: metrics.shadowOffsetHorizontalPost,
      height: metrics.shadowOffsetVerticalPost,
    },
    shadowOpacity: metrics.shadowOpacity,
    shadowRadius: metrics.radiusPost,
  },
  titlePost: {
    color: colors.titleColorPost,
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorPost: {
    color: colors.authorColorPost,
  },
  textPost: {
    color: colors.textColorPost,
  },
};
