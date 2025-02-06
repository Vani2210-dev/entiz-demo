import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DashBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
        <View style={styles.notificationContainer}>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="chat" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profilePictureContainer}>
            <Image
              source={require('../assets/images/profilePicture.png')} // Replace with your profile picture file name
              style={styles.profilePicture}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Dashboard</Text>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navigator: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginLeft: 16,
  },
  profilePictureContainer: {
    marginLeft: 16,
  },
  profilePicture: {
    width: 32,
    height: 32,
    borderRadius: 5,
  },
  menuButton: {
    marginLeft: 16,
  },
  content: {
    flex: 1,
    marginTop: '10%', // Adjust content to be below the navigator
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});