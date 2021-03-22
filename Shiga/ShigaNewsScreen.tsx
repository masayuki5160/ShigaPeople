import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as vm from './ShigaNewsViewModel';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

export default function ShigaNewsScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={vm.news}// TODO: あとで変更する
                keyExtractor={item => '${item.createdAt}'}
                renderItem={({item}) => (
                    <List.Item 
                        title={item.text}
                        description={item.createdAt}
                        onPress={() => {navigation.navigate('ShigaNewsWebViewScreen', {url: 'https://google.co.jp'})}}
                    />
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
        flex: 1
    },
  });