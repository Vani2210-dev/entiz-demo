import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashBoard from './screens/dashBoard';
import ProjectManager from './screens/projectManager';
import JobManager from './screens/jobManager';
import RecomendManager from './screens/recomendManager';
import ReportManager from './screens/reportManager';
import Administration from './screens/administration';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/images/logo.png')} style={styles.logo} />
      </View>
      <DrawerItem
        label="Dash Board"
        icon={() => <Icon name="dashboard" size={24} color="gray" />}
        onPress={() => props.navigation.navigate('Dash Board')}
      />
      <DrawerItem
        label="Project Manager"
        icon={() => <Icon name="folder" size={24} color="gray" />}
        onPress={() => props.navigation.navigate('Project Manager')}
      />
      <DrawerItem
        label="Job Manager"
        icon={() => <Icon name="work" size={24} color="gray" />}
        onPress={() => props.navigation.navigate('Job Manager')}
      />
      <DrawerItem
        label="Recomend Manager"
        icon={() => <Icon name="thumb-up" size={24} color="gray" />}
        onPress={() => props.navigation.navigate('Recomend Manager')}
      />
      <DrawerItem
        label="Report Manager"
        icon={() => <Icon name="bar-chart" size={24} color="gray" />}
        onPress={() => props.navigation.navigate('Report Manager')}
      />
      <DrawerItem
        label="Administration"
        icon={() => <Icon name="settings" size={24} color="gray" />}
        onPress={() => props.navigation.navigate('Administration')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dash Board"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Dash Board" component={DashBoard} />
      <Drawer.Screen name="Project Manager" component={ProjectManager} />
      <Drawer.Screen name="Job Manager" component={JobManager} />
      <Drawer.Screen name="Recomend Manager" component={RecomendManager} />
      <Drawer.Screen name="Report Manager" component={ReportManager} />
      <Drawer.Screen name="Administration" component={Administration} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});