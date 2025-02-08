import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PieChart } from 'react-native-chart-kit';
import { Svg, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { projectData, statusCounts } from './data/projectData'; // Import project data and status counts


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DashBoard = () => {
  const navigation = useNavigation();

  const data = [
    {
      name: 'Ongoing',
      population: statusCounts.Ongoing || 0,
      color: '#3A82EF',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Delayed',
      population: statusCounts.Delayed || 0,
      color: '#EE3CD2',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Deadline',
      population: statusCounts.Deadline || 0,
      color: '#FFB038',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Slowed',
      population: statusCounts.Slowed || 0,
      color: '#FF495F',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Completed',
      population: statusCounts.Completed || 0,
      color: '#5EE173',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
  ];

  const totalJobs = data.reduce((sum, job) => sum + job.population, 0);

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
            <Image
              source={require('../assets/images/profilePicture.png')} // Replace with your profile picture file name
              style={styles.profilePicture}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <View style={styles.chartContainer}>
            <PieChart
              data={data}
              width={screenWidth - 40}
              height={200}
              chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
            <Svg style={styles.svgOverlay}>
              <Circle cx="27%" cy="50%" r="15%" fill="white" />
            </Svg>
            <View style={styles.centerTextContainer}>
              <Text style={styles.centerText}>{totalJobs}</Text>
            </View>
          </View>
          <View style={styles.optionContainer}>
            <View style={styles.projectOptionContainer}>
              <TouchableOpacity
                style={styles.projectOptionButton}
                onPress={() => navigation.navigate('Project Manager')}
              >
                <View style={styles.projectOptionRow}>
                  <Icon name="assignment" size={24} color="#3A82EF" />
                  <Text style={[styles.projectOptionPopulation, { color: '#3A82EF' }]}>{data[0].population}</Text>
                </View>
                <Text style={styles.projectOptionText}>Ongoing Project</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.projectOptionButton}
                onPress={() => navigation.navigate('Project Manager')}
              >
                <View style={styles.projectOptionRow}>
                  <Icon name="assignment-return" size={24} color="#EE3CD2" />
                  <Text style={[styles.projectOptionPopulation, { color: '#EE3CD2' }]}>{data[1].population}</Text>
                </View>
                <Text style={styles.projectOptionText}>Delayed Project</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.projectOptionButton}
                onPress={() => navigation.navigate('Project Manager')}
              >
                <View style={styles.projectOptionRow}>
                  <Icon name="assignment-late" size={24} color="#FFB038" />
                  <Text style={[styles.projectOptionPopulation, { color: '#FFB038' }]}>{data[2].population}</Text>
                </View>
                <Text style={styles.projectOptionText}>Deadline Project</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.projectOptionButton}
                onPress={() => navigation.navigate('Project Manager')}
              >
                <View style={styles.projectOptionRow}>
                  <Icon name="assignment-returned" size={24} color="#FF495F" />
                  <Text style={[styles.projectOptionPopulation, { color: '#FF495F' }]}>{data[3].population}</Text>
                </View>
                <Text style={styles.projectOptionText}>Slowed Project</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.projectOptionButton}
                onPress={() => navigation.navigate('Project Manager')}
              >
                <View style={styles.projectOptionRow}>
                  <Icon name="assignment-turned-in" size={24} color="#5EE173" />
                  <Text style={[styles.projectOptionPopulation, { color: '#5EE173' }]}>{data[4].population}</Text>
                </View>
                <Text style={styles.projectOptionText}>Completed Project</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.jobOptionContainer}>
              <TouchableOpacity style={styles.jobOptionButton}>
                <Icon name="event-note" size={24} color="gray" />
                <Text style={styles.jobOptionText}>All job</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.jobOptionButton}>
                <Icon name="event" size={24} color="#3A82EF" />
                <Text style={styles.jobOptionText}>Ongoing job</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.jobOptionButton}>
                <Icon name="event-busy" size={24} color="#FFB038" />
                <Text style={styles.jobOptionText}>Deadline job</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.jobOptionButton}>
                <Icon name="event-repeat" size={24} color="#FF495F" />
                <Text style={styles.jobOptionText}>Recomend job</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.jobOptionButton}>
                <Icon name="event-available" size={24} color="#5EE173" />
                <Text style={styles.jobOptionText}>Completed jobs</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
  scrollViewContent: {
    paddingTop: '10%', // Adjust content to be below the navigator
  },
  content: {
    top: '5%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20%',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  chartContainer: {
    width: screenWidth - 40,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
  svgOverlay: {
    position: 'absolute',
  },
  centerTextContainer: {
    width: '40%',
    position: 'absolute',
    top: '50%',
    left: '14%',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  projectOptionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    top: 20,
  },
  projectOptionButton: {
    top: 0,
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10, 
  },
  projectOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectOptionPopulation: {
    marginLeft: 8,  
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  projectOptionText: {
    marginTop: 8,
    fontSize: 16,
    color: '#000',
  },
  jobOptionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    top: 20,
  },
  jobOptionButton: {
    top: 0,
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  jobOptionText: {
    marginTop: 8,
    fontSize: 16,
    color: '#000',
  },
});