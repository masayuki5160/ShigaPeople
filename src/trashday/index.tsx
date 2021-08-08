import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { List, Text, Divider } from 'react-native-paper';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import OtsuTrashDay from './components/OtsuTrashDay';

// TODO: propsで渡す
const areas = [
    {
      name: '大津市',
      area: '大津地域',
      screen: 'OtsuTrashDay',
    },
    {
      name: '草津市',
      area: '南部地域',
      screen: 'KusatsuNewsViewModel',
    },
    {
      name: '守山市',
      area: '南部地域',
      screen: '',
    },
    {
      name: '栗東市',
      area: '南部地域',
      screen: 'RittoNewsViewModel',
    },
    {
      name: '野洲市',
      area: '南部地域',
      screen: 'YasuNewsViewModel',
    },
    {
      name: '甲賀市',
      area: '甲賀地域',
      screen: 'KokaNewsViewModel',
    },
    {
      name: '湖南市',
      area: '甲賀地域',
      screen: '',
    },
    {
      name: '東近江市',
      area: '東近江地域',
      screen: 'HigashiomiNewsViewModel',
    },
    {
      name: '近江八幡市',
      area: '東近江地域',
      screen: '',
    },
    {
      name: '日野町',
      area: '東近江地域',
      screen: 'HinoNewsViewModel',
    },
    {
      name: '竜王町',
      area: '東近江地域',
      screen: '',
    },
    {
      name: '彦根町',
      area: '湖東地域',
      screen: '',
    },
    {
      name: '愛荘町',
      area: '湖東地域',
      screen: '',
    },
    {
      name: '豊郷町',
      area: '湖東地域',
      screen: 'ToyosatoNewsViewModel',
    },
    {
      name: '甲良町',
      area: '湖東地域',
      screen: 'KouraNewsViewModel',
    },
    {
      name: '多賀町',
      area: '湖東地域',
      screen: 'TagaNewsViewModel',
    },
    {
      name: '米原市',
      area: '湖北地域',
      screen: 'MaibaraNewsViewModel',
    },
    {
      name: '長浜市',
      area: '湖北地域',
      screen: 'NagahamaNewsViewModel',
    },
    {
      name: '高島市',
      area: '高島地域',
      screen: 'TakashimaNewsViewModel',
    },
  ];

// TODO: proposでエリアを受け取る
const TrashDayAreaList = () => {
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
                        navigation.navigate(item.screen);
                    }}
                />
                <Divider />
            </View>
        )}
        />
    </View>
    );
}

const TrashDayPage = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="ShigaNews">
            <Stack.Screen name="ShigaNews" component={TrashDayAreaList}/>
            <Stack.Screen name="OtsuTrashDay" component={OtsuTrashDay}/>
      </Stack.Navigator>
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

export default TrashDayPage;