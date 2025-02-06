import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    Alert.alert('Login Successful');
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={require('../assets/images/loginBackground.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>
            BUILD TODAY, CREATE VALUE TOMORROW
          </Text>
          <Text style={styles.inputTitle}>Tên đăng nhập</Text>
          <LinearGradient colors={['#BE1E2D', '#F7941D']} style={styles.inputBorder} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </LinearGradient>
          <Text style={styles.inputTitle}>Mật khẩu</Text>
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
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

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
    width: '100%', // Ensure the container takes full width
  },
  innerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with 80% opacity
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    color: '#262262',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    width: '100%',
  },
  inputTitle: {
    color: '#000',
    fontSize: 16,
    textAlign: 'left',
    width: '100%',
    marginTop: 10,
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
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  switchText: {
    color: '#000',
    marginTop: 16,
    fontSize: 16,
  },
});