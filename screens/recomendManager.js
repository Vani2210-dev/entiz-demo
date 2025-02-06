import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecomendManager = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recomend Manager</Text>
    </View>
  );
};

export default RecomendManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});