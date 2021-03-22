import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Screens
import ShigaHomeScreen from './Shiga/ShigaHomeScreen';
import AreasListScreen from './Areas/AreasListScreen';
import OtsuNewsScreen from './Otsu/OtsuNewsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function stackScreen() {
  return(
    <Stack.Navigator initialRouteName='AreasListScreen'>
      <Stack.Screen name='AreasListScreen' component={AreasListScreen}/>
      <Stack.Screen name='OtsuNewsScreen' component={OtsuNewsScreen}/>
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="滋賀県" component={ShigaHomeScreen}/>
          <Tab.Screen name="市町村" component={stackScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}