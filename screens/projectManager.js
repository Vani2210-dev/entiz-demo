import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;

const ProjectManager = () => {
  const [showSubNav, setShowSubNav] = useState(false);

  const toggleSubNav = () => {
    setShowSubNav(!showSubNav);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
        <View style={styles.notificationContainer}>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications" size={24} color="#F7941D" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="chat" size={24} color="#F7941D" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profilePictureContainer}>
            <Icon name="person" size={24} color="#F7941D" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.projectOptionButton, { backgroundColor: '#000' }]} onPress={toggleSubNav}>
          <Text style={styles.projectOptionText}>Projects</Text>
        </TouchableOpacity>
      </View>
      {showSubNav && (
        <View style={styles.subNavContainer}>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#3A82EF' }]}>
            <Icon name="assignment" size={24} color="white" />
            <Text style={styles.projectOptionText}>On Going</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#EE3CD2' }]}>
            <Icon name="assignment-return" size={24} color="white" />
            <Text style={styles.projectOptionText}>Delayed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#FFB038' }]}>
            <Icon name="assignment-late" size={24} color="white" />
            <Text style={styles.projectOptionText}>Deadline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#FF495F' }]}>
            <Icon name="assignment-returned" size={24} color="white" />
            <Text style={styles.projectOptionText}>Slowed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#5EE173' }]}>
            <Icon name="assignment-turned-in" size={24} color="white" />
            <Text style={styles.projectOptionText}>Completed</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.text}>Project Manager</Text>
      </View>
    </View>
  );
};

export default ProjectManager;

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: '15%', // Adjust to be below the navigator
  },
  projectOptionButton: {
    flex: 1,
    paddingTop: 20,
    padding: 10,
    margin: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  projectOptionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subNavContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  subNavButton: {
    width: '90%',
    padding: 10,
    margin: 2,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});