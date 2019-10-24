import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';   
import Home from './screens/Home';
import Notebooks from './screens/Notebooks';


export default function App() {
  return (
    <NativeRouter>
    <View style={styles.container}>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/Notebooks' component={ Notebooks } />
       </Switch>
    </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
