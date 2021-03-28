import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {areas} from './AreasListModel';
import { List, Text, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

export default function AreasListScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={areas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View>
                        <List.Item 
                            title={item.name}
                            description={item.area}
                            onPress={() => {navigation.navigate(item.screen)}}
                        />
                        <Divider/>
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
        flex: 1
    },
  });