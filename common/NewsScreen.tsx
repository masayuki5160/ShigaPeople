import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { List, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

export default function NewsScreen(props: any) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={props.news}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View>
                        <List.Item 
                            title={item.title}
                            description={item.pubDate}
                            onPress={() => {navigation.navigate('WebViewScreen', {url: item.link})}}
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
        flex: 1
    },
  });