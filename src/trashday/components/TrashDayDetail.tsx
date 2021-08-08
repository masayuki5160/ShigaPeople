import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { List, Text, Divider } from 'react-native-paper';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {GarbageSchedule} from './GarbageType';

const detail = (garbage: GarbageSchedule) => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}

export default detail;