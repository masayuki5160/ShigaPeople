import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {areas} from './AreasListViewModel';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

export default function AreasListScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={areas}
                keyExtractor={item => '${item.name}'}
                renderItem={({item}) => (
                    <List.Item 
                        title={item.name}
                        onPress={() => {navigation.navigate(item.screen)}}
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