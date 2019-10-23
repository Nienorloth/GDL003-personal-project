import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Notebooks({history}) {
    return (
      <View>
      <Image source={require('../img/insects.png')} style={styles.img}></Image>
      <Image source={require('../img/plants.png')} style={styles.img}></Image>
      <Image source={require('../img/fossils.png')} style={styles.img}></Image>
        <Button title='Home' onPress={() => history.push('/')} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    img: {
      flex: 1,
      width: '',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });