import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { List, Text, Divider } from 'react-native-paper';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {GarbageSchedule} from './GarbageType';

const detail = ({ route, navigation }) => {
    const {garbage} = route.params;
    console.log(garbage.burnable[0].dayOfWeek);

    // TODO: ゴミ出し情報を表示
    // TODO: プッシュ通知のサブスクライブ or ローカルプッシュ通知の登録
    return (
        <View>
            <Text>{garbage.burnable[0].dayOfWeek}</Text>
        </View>
    );
}

export default detail;