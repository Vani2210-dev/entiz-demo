import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <LinearGradient colors={['#BE1E2D', '#F7941D']} style={styles.gradientBorder} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <View style={styles.innerContainer}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
            <Text style={styles.title}>
              BUILD TODAY, CREATE VALUE TOMORROW
            </Text>
            <LinearGradient colors={['#BE1E2D', '#F7941D']} style={styles.inputBorder} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email or Phone"
                  value={emailOrPhone}
                  onChangeText={setEmailOrPhone}
                />
              </View>
            </LinearGradient>
            <LinearGradient colors={['#BE1E2D', '#F7941D']} style={styles.inputBorder} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Icon name={isPasswordVisible ? 'visibility' : 'visibility-off'} size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <TouchableOpacity onPress={handleLogin}>
              <LinearGradient colors={['#BE1E2D', '#F7941D']} style={styles.button} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text style={styles.buttonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.switchText}>Don't have an account? Register</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  gradientBorder: {
    padding: 2,
    borderRadius: 10,
    width: '100%',
    maxWidth: 400,
  },
  innerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    width: '100%',
  },
  inputBorder: {
    width: '100%',
    borderRadius: 4,
    marginVertical: 8,
    padding: 1,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0,
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  switchText: {
    color: '#007BFF',
    marginTop: 16,
    fontSize: 16,
  },
});