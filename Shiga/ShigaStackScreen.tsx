import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import ShigaNewsComponent from './ShigaNewsComponent';
import ShigaNewsWebViewScreen from './ShigaNewsWebViewScreen';

const Stack = createStackNavigator();

export default function ShigaStackScreen() {
    return(
        <Stack.Navigator initialRouteName='ShigaNewsComponent'>
            <Stack.Screen name='ShigaNewsComponent' component={ShigaNewsComponent}/>
            <Stack.Screen name='ShigaNewsWebViewScreen' component={ShigaNewsWebViewScreen}/>
        </Stack.Navigator>
    );
}