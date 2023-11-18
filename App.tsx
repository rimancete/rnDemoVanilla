/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function App(): JSX.Element {
  const getUserLocationHandler = async () => {
    Geolocation.getCurrentPosition(info => console.log(info));
  };
  return (
    <View style={styles.container}>
      <Button title="GetLocation" onPress={getUserLocationHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
