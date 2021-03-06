import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
      style={styles.itemContainer}>
        {/* <View style={styles.leftContainer}/> */}
        <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
        <View style={styles.rightContainer}/>
      </View>
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
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row"
  }, 
  leftContainer: {
    backgroundColor: "red",
    width: 100

  }, 
  rightContainer: {
    backgroundColor: "blue",
    flex: 1
  }
});
