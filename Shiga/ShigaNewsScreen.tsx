import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

export default function ShigaNewsScreen(props: any) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={props.news}
                keyExtractor={item => '${item.pubDate}'}
                renderItem={({item}) => (
                    <List.Item 
                        title={item.title}
                        description={item.description}
                        onPress={() => {navigation.navigate('ShigaNewsWebViewScreen', {url: item.link})}}
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