import React from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
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
                            left={props => <List.Icon {...props} icon={item.icon} />}
                            onPress={() => {
                                // TODO: ViewModelクラスを作ってロジックはViewで処理しないよう修正する
                                if (item.screen == "") {
                                    return (
                                        Alert.alert(
                                            'エラー',
                                            'RSSが提供されていないためお知らせを確認できません',
                                            [
                                              {text: '閉じる'},
                                            ],
                                            { cancelable: false }
                                          )
                                    );
                                } else {
                                    navigation.navigate(item.screen);
                                }
                            }}
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