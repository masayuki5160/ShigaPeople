import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import OtsuNewsScreen from './OtsuNewsScreen';

export default class OtsuHomeScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const Stack = createStackNavigator()
        return (
            <Stack.Navigator initialRouteName='OtsuNewsScreen'>
                <Stack.Screen name='OtsuNewsScreen' component={OtsuNewsScreen}/>
            </Stack.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
        flex: 1
    },
  });