/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignupScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
