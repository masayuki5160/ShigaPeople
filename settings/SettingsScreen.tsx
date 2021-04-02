import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { List, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

export default function SettingsScreen(props: any) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={props.options}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View>
                        <List.Item 
                            title={item.name}
                            description=""
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
        flex: 1
    },
  });