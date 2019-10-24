import React, { Component } from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';
import { Link } from 'react-router-native';

export default function Notebooks({history}) {
    return (
      <View>
      <Link to='./insectsNotebook'><Image source={require('../img/insects.png')} style={styles.img} /></Link>
      <Link to='./plantsNotebook'><Image source={require('../img/plants.png')} style={styles.img} /></Link>
      <Link to='./fossilsNotebook'><Image source={require('../img/fossils.png')} style={styles.img} /></Link> 
        <Button title='Home' onPress={() => history.push('/')} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    img: {
      flex: 1,
      width: '50',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });