import React from 'react';
import StackNavigator from './StackNavigator'; // Import the StackNavigator

export default function App() {
  return (
    <StackNavigator /> // Remove the ProjectProvider wrapper
  );
}