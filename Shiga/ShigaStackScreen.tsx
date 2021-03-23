import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import ShigaNewsViewModel from './ShigaNewsViewModel';
import ShigaNewsWebViewScreen from './ShigaNewsWebViewScreen';

const Stack = createStackNavigator();

export default function ShigaStackScreen() {
    return(
        <Stack.Navigator initialRouteName='ShigaNewsViewModel'>
            <Stack.Screen name='ShigaNewsViewModel' component={ShigaNewsViewModel}/>
            <Stack.Screen name='ShigaNewsWebViewScreen' component={ShigaNewsWebViewScreen}/>
        </Stack.Navigator>
    );
}