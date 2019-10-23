import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';


export default function Home({history}) {
  return (
    <View style={styles.container}>
      <Image source={require('../img/logo.png')}></Image>
      <Button style={ styles.button } title='Ir a cuadernos' onPress={() => history.push('/Notebooks')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#fff',
    backgroundColor: '#ed5107'
  }
});
