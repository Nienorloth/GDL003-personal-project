import React from 'React';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({history}) {
    return (
      <View style={styles.container}>
        <Text>This is the home page</Text>
        <Button title='change page' onPress={() => history.push('/Notebooks')} />
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