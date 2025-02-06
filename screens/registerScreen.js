import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleRegister = () => {
    Alert.alert('Registration Successful');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require('../assets/images/loginBackground.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>
            BUILD TODAY, CREATE VALUE TOMORROW
          </Text>
          <Text style={styles.inputTitle}>Tên</Text>
          <LinearGradient colors={['#BE1E2D', '#F7941D']} style={styles.inputBorder} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
            </View>
          </LinearGradient>
          <Text style={styles.inputTitle}>Email hoặc Số điện thoại</Text>
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
          <TouchableOpacity onPress={handleRegister}>
            <LinearGradient colors={['#BE1E2D', '#F7941D']} style={styles.button} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={styles.buttonText}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.switchText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;

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