import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

export default function OtsuNewsScreen(props: any) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={props.news}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <List.Item 
                        title={item.title}
                        description={item['dc:date']}
                        onPress={() => {navigation.navigate('WebViewScreen', {url: item.link})}}
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