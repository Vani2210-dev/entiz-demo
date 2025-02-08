import React, { useState, useEffect } from 'react'; 
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import { projectData, statusCounts } from './data/projectData'; // Import projectData from the data folder

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ProjectManager = () => {
  const route = useRoute();
  const [showSubNav, setShowSubNav] = useState(false);
  const [showProject, setShowProject] = useState({}); // Change to an object
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (route.params?.option) {
      setSelectedOption(route.params.option);
      filterProjects(route.params.option); // Filter projects based on selected option
    }
  }, [route.params?.option]);

  const toggleSubNav = () => {
    setShowSubNav(!showSubNav);
  };

  const toggleProject = (index) => {
    setShowProject(prevState => ({
      ...prevState,
      [index]: !prevState[index] // Toggle the specific project footer
    }));
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowSubNav(false);
    filterProjects(option); // Filter projects when an option is clicked
  };

  const filterProjects = (option) => {
    const filtered = projectData.filter(project => project.status === option).slice(0, 5); // Limit to first 5 projects
    setFilteredProjects(filtered);
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
          <Icon name="keyboard-double-arrow-down" size={24} color="white" />
          <Text style={styles.projectOptionText}>Projects</Text>
        </TouchableOpacity>
      </View>
      {showSubNav && (
        <View style={styles.subNavContainer}>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#3A82EF' }]} onPress={() => handleOptionClick('Ongoing')}>
            <Icon name="assignment" size={24} color="white" />
            <Text style={styles.projectOptionText}>Ongoing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#EE3CD2' }]} onPress={() => handleOptionClick('Delayed')}>
            <Icon name="assignment-return" size={24} color="white" />
            <Text style={styles.projectOptionText}>Delayed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#FFB038' }]} onPress={() => handleOptionClick('Deadline')}>
            <Icon name="assignment-late" size={24} color="white" />
            <Text style={styles.projectOptionText}>Deadline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#FF495F' }]} onPress={() => handleOptionClick('Slowed')}>
            <Icon name="assignment-returned" size={24} color="white" />
            <Text style={styles.projectOptionText}>Slowed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subNavButton, { backgroundColor: '#5EE173' }]} onPress={() => handleOptionClick('Completed')}>
            <Icon name="assignment-turned-in" size={24} color="white" />
            <Text style={styles.projectOptionText}>Completed</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={[styles.selectedOptionText, {backgroundColor: 'white'}]}>List of {selectedOption} Projects</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {filteredProjects.map((project, index) => (
          <View key={index} style={styles.flexRow}>
            <View style={styles.flexRowHeader}>
              <View style={styles.projectId}>
                <Text style={styles.projectIdHeader}>Mã dự án</Text>
                <Text style={styles.projectIdText}>{project.id}</Text>
              </View>
              <View style={styles.projectName}>
                <Text style={styles.projectNameHeader}>Tên dự án</Text>
                <Text style={styles.projectNameText}>{project.name}</Text>
              </View>
              <View style={styles.projectIcon}>
                <TouchableOpacity style={styles.projectIconButton}>
                  <Icon name="visibility" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.projectIconButton}>
                  <Icon name="mode-edit" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.projectIconButton}>
                  <Icon name="delete" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.projectIconButton} onPress={() => toggleProject(index)}>
                  <Icon name="expand-circle-down" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.flexRowContents}>
              <Text style={styles.projectContentText}><Icon name="portrait" size={16} color="#BE1E2D" /> Manager: {project.manager}</Text>
              <Text style={styles.projectContentText}><Icon name="access-time" size={16} color="#BE1E2D" /> Start Day: {project.startDay}</Text>
              <Text style={styles.projectContentText}><Icon name="access-time-filled" size={16} color="#BE1E2D" /> End Day: {project.endDay}</Text>
              <Text style={styles.projectContentText}><Icon name="location-on" size={16} color="#BE1E2D" /> Location: {project.location}</Text>
            </View>
            <View style={[styles.flexRowFooter,
              { height: showProject[index] ? 'auto' : 0 },
              { minHeight: showProject[index] ? '70%': 0},
              { zIndex: showProject[index] ? 2 : 0 },
            ]}>
              <View style={styles.projectFooterDes}>
                <Text style={styles.projectFooterText}><Icon name="menu-book" size={16} color="#BE1E2D" /> Description: {project.description}</Text>
              </View>
              <View style={styles.projectFooterBox}>
                <View style={styles.projectFooter1}>
                  <Text style={styles.projectFooterText}><Icon name="emoji-emotions" size={16} color="#BE1E2D" /> Employee: {project.employee}</Text>
                  <Text style={styles.projectFooterText}><Icon name="attach-money" size={16} color="#BE1E2D" /> Budget: {project.budget}</Text>
                  <Text style={styles.projectFooterText}><Icon name="attach-money" size={16} color="#BE1E2D" /> Estimate: {project.estimate}</Text>
                </View>
                <View style={styles.projectFooter2}>
                  <Text style={styles.projectFooterText}><Icon name="attach-money" size={16} color="#BE1E2D" /> Acceptance: {project.acceptance}</Text>
                  <Text style={styles.projectFooterText}><Icon name="attach-money" size={16} color="#BE1E2D" /> Payment: {project.payment}</Text>
                  <Text style={styles.projectFooterText}><Icon name="incomplete-circle" size={16} color="#BE1E2D" /> Process: {project.process}%</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 20,
    padding: 10,
    margin: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  projectOptionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginLeft: 8,
  },
  subNavContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 0, // Remove any bottom margin
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
  scrollViewContent: {
    paddingTop: 0, // Remove top padding
  },
  selectedOptionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  flexRow: {
    height: screenHeight * 0.2, // 20% of the screen height
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BE1E2D',
  },
  flexRowHeader: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    width: '100%', // 10% of the screen width
    height: '30%',
    backgroundColor: '#BE1E2D',
    borderRadius: 10,
  },
  projectId: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#BE1E2D',
    borderWidth: 1,
    borderRadius: 10,
  },
  projectIdHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  projectIdText: {
    color: 'white',
    fontSize: 14,
  },
  projectName: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: '#BE1E2D',
    borderBottomColor: '#BE1E2D',
    borderWidth: 1,
  },
  projectNameHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  projectNameText: {
    color: 'white',
    fontSize: 14,
  },
  projectIcon: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#BE1E2D',
    borderWidth: 1,
  },
  projectIconButton: {
    padding: 5,
    borderRadius: 5,
    fontSize: 10,
  },
  flexRowContents: {
    position: 'absolute',
    flexDirection: 'column',
    top: '30%',
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  projectContentText: {
    fontWeight: 'bold',
    color: 'black',
  },
  flexRowFooter: {
    alignItems: 'baseline',
    position: 'absolute',
    top: '30%',
    flexDirection: 'column',
    width: '100%',
    height: '70%', 
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#BE1E2D',
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  projectFooterDes: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  projectFooterBox: {
    flexDirection: 'row',
    paddingTop: 0,
    padding: 10
  },
  projectFooter1: {
    flex: 3,
    flexDirection: 'column',
  },
  projectFooter2: {
    flex: 3,
    flexDirection: 'column',
  },
  projectFooterText: {
    fontWeight: 'bold',
  }
});
