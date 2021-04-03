import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import { List, Divider, Switch } from 'react-native-paper';
import {onToggleSwitch} from './NotificationsViewModel';

export default function NotificationsScreen(props: any) {
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={props.areas}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View>
                        <List.Item 
                            title={item.name}
                            description=""
                            right={props => <Switch value={item.subscribe} onValueChange={() => onToggleSwitch(item.topic)} />}
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