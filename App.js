import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import './src/services/api';
import './src/config/reactotronConfig';
import './src/config/axiosConfig';
import './src/config/navigationConfig';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste - Se isso aparecer, o problema está em outra tela</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});