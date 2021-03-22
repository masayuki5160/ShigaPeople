import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import AreasListScreen from './AreasListScreen';

export default class AreasHomeScreen extends React.Component {
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
            <Stack.Navigator initialRouteName='AreasListScreen'>
                <Stack.Screen name='AreasListScreen' component={AreasListScreen}/>
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