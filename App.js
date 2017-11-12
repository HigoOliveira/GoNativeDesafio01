/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import { styles } from './components/styles';
import Post from './components/Post';
import Header from './components/Header';

import './config/ReactotronConfig';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const author = 'Higo de Oliveira Ribeiro';
const title = 'Aprendendo React Native';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title,
        author,
        text,
      },
      {
        id: 2,
        title,
        author,
        text,
      },
      {
        id: 2,
        title,
        author,
        text,
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="GoNative App" />
        <ScrollView style={styles.scrollView} >
          <View style={styles.space} />
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
          <View style={styles.space} />
        </ScrollView>
      </View>
    );
  }
}
