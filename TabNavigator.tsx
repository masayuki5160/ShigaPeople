import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Screens
import ShigaHomeScreen from './Shiga/ShigaHomeScreen';
import AreasHomeScreen from './Areas/AreasHomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="ShigaHomeScreen" component={ShigaHomeScreen}/>
          <Tab.Screen name="AreasHomeScreen" component={AreasHomeScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}