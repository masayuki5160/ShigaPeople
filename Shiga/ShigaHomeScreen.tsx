import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import ShigaNewsScreen from './ShigaNewsScreen';

export default class ShigaHomeScreen extends React.Component {
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
            <NavigationContainer>
                <Stack.Navigator initialRouteName='ShigaNewsScreen'>
                    <Stack.Screen
                    name='ShigaNewsScreen'
                    component={ShigaNewsScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
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