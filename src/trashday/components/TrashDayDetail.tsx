import React from 'react';
import { List, Text, Divider } from 'react-native-paper';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

const detail = ({ route, navigation }) => {
    const {burnable, notburnable, can, plastic, paper, bottle, plasticbottle} = route.params.garbage;

    // TODO: 見た目修正
    // TODO: プッシュ通知のサブスクライブ or ローカルプッシュ通知の登録
    return (
        <View style={styles.container}>
            <Text>燃やせるごみ</Text>
            <FlatList
                style={styles.list}
                data={burnable}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <List.Item
                            title={"第" + item.weekOfMonth + item.dayOfWeek}
                            description={item.area}
                        />
                        <Divider />
                    </View>
                )}
            />
            <Divider />

            <Text>プラ容器包装</Text>
            <FlatList
                style={styles.list}
                data={plastic}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <List.Item
                            title={"第" + item.weekOfMonth + item.dayOfWeek}
                            description={item.area}
                        />
                        <Divider />
                    </View>
                )}
            />
            <Divider />

            <Text>燃やせないごみ</Text>
            <FlatList
                style={styles.list}
                data={notburnable}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <List.Item
                            title={"第" + item.weekOfMonth + item.dayOfWeek}
                            description={item.area}
                        />
                        <Divider />
                    </View>
                )}
            />
            <Divider />

            <Text>かん</Text>
            <FlatList
            style={styles.list}
            data={can}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View>
                    <List.Item
                        title={"第" + item.weekOfMonth + item.dayOfWeek}
                        description={item.area}
                    />
                    <Divider />
                </View>
            )}
            />
            <Divider />
            
            <Text>紙ごみ</Text>
            <FlatList
            style={styles.list}
            data={paper}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View>
                    <List.Item
                        title={"第" + item.weekOfMonth + item.dayOfWeek}
                        description={item.area}
                    />
                    <Divider />
                </View>
            )}
            />
            <Divider />
            
            <Text>透明びん/茶色びん</Text>
            <FlatList
            style={styles.list}
            data={bottle}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View>
                    <List.Item
                        title={"第" + item.weekOfMonth + item.dayOfWeek}
                        description={item.area}
                    />
                    <Divider />
                </View>
            )}
            />
            <Divider />

            <Text>ペットボトル</Text>
            <FlatList
            style={styles.list}
            data={plasticbottle}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View>
                    <List.Item
                        title={"第" + item.weekOfMonth + item.dayOfWeek}
                        description={item.area}
                    />
                    <Divider />
                </View>
            )}
            />
            <Divider />
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

export default detail;