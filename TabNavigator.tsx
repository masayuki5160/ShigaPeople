import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
// import Screens
import AreaStackScreen from './AreaStackScreen';
import ShigaStackScreen from './Shiga/ShigaStackScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="滋賀県"
            component={ShigaStackScreen}
            options={{
              //tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="infocirlceo" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen 
            name="市一覧"
            component={AreaStackScreen}
            options={{
              //tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Feather name="list" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}