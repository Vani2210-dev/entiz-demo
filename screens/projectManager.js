import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProjectManager = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Project Manager</Text>
    </View>
  );
};

export default ProjectManager;

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