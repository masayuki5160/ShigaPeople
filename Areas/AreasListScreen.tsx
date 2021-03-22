import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as vm from './AreasListViewModel';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

export default function AreasListScreen() {
        const navigation = useNavigation();
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.list}
                    data={vm.fetch()}
                    keyExtractor={item => '${item.name}'}
                    renderItem={({item}) => (
                        <List.Item 
                            title={item.name}
                            description='test'
                            onPress={() => {navigation.navigate('OtsuNewsScreen')}}
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