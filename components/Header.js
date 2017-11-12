import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import { styles } from './styles';

const Header = ({ title }) => (
  <View style={styles.containerHeader}>
    <Text style={styles.titleHeader}>{title}</Text>
  </View>
);
export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
