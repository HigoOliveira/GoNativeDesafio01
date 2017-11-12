import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';
import HR from './HR';

const Post = ({ post }) => (
  <View style={styles.containerPost}>
    <Text style={styles.titlePost}>{post.title}</Text>
    <Text style={styles.authorPost}>{post.author}</Text>
    <HR />
    <Text style={styles.textPost}>{post.text}</Text>
  </View>
);
export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
