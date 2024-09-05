import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }} >
  <Tab.Screen 
    name="Home" 
    component={HomeScreen} 
    options={{
      tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
    }} 
  />
  <Tab.Screen 
    name="Search" 
    component={SearchScreen} 
    options={{
      tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />
    }} 
  />
</Tab.Navigator>
);

export default BottomTabNavigator;
