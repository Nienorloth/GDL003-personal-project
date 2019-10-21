import React from 'React';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './screens/Home';



export default function Notebooks({history}) {
    return (
      <View style={styles.container}>
        <Text>This is the notebooks page</Text>
        <Button title='change page' onPress={() => history.push('/screens/Home')} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });