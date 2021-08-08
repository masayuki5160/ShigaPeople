import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { List, Text, Divider } from 'react-native-paper';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {TrashDayDetail} from './TrashDayDetail';
import {GarbageSchedule} from './GarbageType';

const sampleGarbageSchedule: GarbageSchedule = {
    burnable: [
        {weekOfMonth: 1, dayOfWeek: '火曜日'},
        {weekOfMonth: 2, dayOfWeek: '火曜日'},
        {weekOfMonth: 3, dayOfWeek: '火曜日'},
        {weekOfMonth: 4, dayOfWeek: '火曜日'},
        {weekOfMonth: 5, dayOfWeek: '火曜日'},
        {weekOfMonth: 1, dayOfWeek: '金曜日'},
        {weekOfMonth: 2, dayOfWeek: '金曜日'},
        {weekOfMonth: 3, dayOfWeek: '金曜日'},
        {weekOfMonth: 4, dayOfWeek: '金曜日'},
        {weekOfMonth: 5, dayOfWeek: '金曜日'},
    ],
    notburnable: [
        {weekOfMonth: 1, dayOfWeek: '水曜日'},
    ],
    can: [
        {weekOfMonth: 1, dayOfWeek: '月曜日'},
        {weekOfMonth: 3, dayOfWeek: '月曜日'},
    ],
    plastic: [
        {weekOfMonth: 1, dayOfWeek: '木曜日'},
        {weekOfMonth: 2, dayOfWeek: '木曜日'},
        {weekOfMonth: 3, dayOfWeek: '木曜日'},
        {weekOfMonth: 4, dayOfWeek: '木曜日'},
        {weekOfMonth: 5, dayOfWeek: '木曜日'},
    ],
    paper: [
        {weekOfMonth: 2, dayOfWeek: '水曜日'},
        {weekOfMonth: 4, dayOfWeek: '水曜日'},
    ],
    bottle: [
        {weekOfMonth: 3, dayOfWeek: '水曜日'},
    ],
    plasticbottle: [
        {weekOfMonth: 2, dayOfWeek: '月曜日'},
        {weekOfMonth: 4, dayOfWeek: '月曜日'},
    ],
}

// Appendix: https://www.city.otsu.lg.jp/soshiki/030/1703/g/gomi_calendar/index.html
const areas = [
    {
        name: '堅田・平野',
        area: '堅田1～2丁目、本堅田1～6丁目、衣川1～3丁目、今堅田1～3丁目、におの浜1～4丁目、西の庄、馬場1～3丁目、鶴の里、石場、松本1～2丁目、打出浜、竜が丘、池の里',
        garbage: sampleGarbageSchedule,
    },
    {
        name: '小松1・木戸1・和邇1・真野北・石山',
        area: '大津地域',
    },
    {
        name: '藤尾・山中比叡平・瀬田東',
        area: '大津地域',
    },
    {
        name: '仰木・雄琴・逢坂・中央',
        area: '大津地域',
    },
    {
        name: '滋賀・瀬田',
        area: '大津地域',
    },
    {
        name: '坂本・大石・田上',
        area: '大津地域',
    },
    {
        name: '唐崎・瀬田北',
        area: '大津地域',
    },
    {
        name: '小松2・和邇2・小野(水明・朝日・湖青1～2丁目)・日吉台・膳所',
        area: '大津地域',
    },
    {
        name: '長等・瀬田南',
        area: '大津地域',
    },
    {
        name: '木戸2・和邇3・仰木の里・富士見・南郷',
        area: '大津地域',
    },
    {
        name: '葛川・伊香立・真野・晴嵐',
        area: '大津地域',
    },
    {
        name: '下阪本・上田上・青山',
        area: '大津地域',
    },
];

// TODO: propsでエリア渡す
const OtsuTrashDay = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList
            style={styles.list}
            data={areas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View>
                    <List.Item
                        title={item.name}
                        description={item.area}
                        left={(props) => <List.Icon {...props} icon="newspaper-variant-outline" />}
                        onPress={() => {
                            navigation.navigate("TrashDayDetail", {garbage: item.garbage});
                        }}
                    />
                    <Divider />
                </View>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      flex: 1,
    },
});

export default OtsuTrashDay;