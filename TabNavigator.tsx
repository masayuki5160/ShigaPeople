import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Screens
import AreaStackScreen from './AreaStackScreen';
import ShigaHomeScreen from './Shiga/ShigaHomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="滋賀県" component={ShigaHomeScreen}/>
          <Tab.Screen name="市町村" component={AreaStackScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}