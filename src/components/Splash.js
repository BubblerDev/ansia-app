import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Ansia</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#42d1f4',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },

  title: {
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});