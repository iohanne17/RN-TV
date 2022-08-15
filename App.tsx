import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {init} from '@noriginmedia/norigin-spatial-navigation';
import Home from './src/screens/home';

init({
  // options
});

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
});

export default App;
