import React, {useState} from 'react';
import { List, Text, Divider, Switch } from 'react-native-paper';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { subscribe, unsubscribe } from '../../common/PushNotifications';
import { fetchData, storeData } from '../../common/LocalStorage';

// TODO: subscribeするtopicのkeyを何処かに持つ
const _onToggleSwitch = async (key: string, completion: (subscribeStatus: boolean) => (void)) => {
    if (key == '') return;

    const subscribeStatus = await _subscribeStatus(key);

    if (subscribeStatus) {
      unsubscribe(key);
      await storeData(key, false.toString());
      completion(false);
    } else {
      subscribe(key);
      await storeData(key, true.toString());
      completion(true);
    }
}

const _subscribeStatus = async (key: string) => {
    const storedSubscribeStatus = await fetchData(key);
    return storedSubscribeStatus == 'true' ? true : false;
}

const detail = ({ route, navigation }) => {
    const {burnable, notburnable, can, plastic, paper, bottle, plasticbottle} = route.params.garbage;
    const [subscribeStatus, setSubscribeStatus] = useState(false);

    // TODO: 現在のsubscribeStatusを取得して設定する

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

            <View>
                <Switch
                    value={subscribeStatus}
                    onValueChange={() => {
                        _onToggleSwitch("Test", (subscribeStatus) => {
                            // TODO: 実装方法これが良いか確認
                            setSubscribeStatus(subscribeStatus);
                            // TODO: 通知購読を確認するアラートダイアログ出す
                        });
                    }}
                />
            </View>
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