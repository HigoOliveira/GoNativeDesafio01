import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const HR = ({ style }) => (<View style={[styles.containerHR, style]} />);
export default HR;

HR.propTypes = {
  style: PropTypes.array,
};

HR.defaultProps = {
  style: [],
};
