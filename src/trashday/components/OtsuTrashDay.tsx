import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { List, Text, Divider } from 'react-native-paper';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {garbageDay} from './GarbageDayOtsu';

// TODO: propsでエリア渡す
const OtsuTrashDay = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList
            style={styles.list}
            data={garbageDay}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View>
                    <List.Item
                        title={item.name}
                        description={item.detail}
                        left={(props) => <List.Icon {...props} icon="newspaper-variant-outline" />}
                        onPress={() => {
                            navigation.navigate("TrashDayDetail", {garbage: item.schedule});
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
      flex: 1,
    },
});

export default OtsuTrashDay;