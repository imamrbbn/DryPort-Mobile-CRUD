import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SplashScreen({ navigation }) {

  setTimeout(() => {
    navigation.replace('Home')
  }, 2000)

    return (
      <View style={styles.container}>
         <Text style={styles.title}>Cikarang Dry Port App</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3dd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: "#065c6f",
    fontSize: 30,
    fontWeight: 'bold'
  }
});