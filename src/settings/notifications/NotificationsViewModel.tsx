import React from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { fetch, fetchRow, storeSubscribeData } from './NotificationsModel';
import { subscribe, unsubscribe } from '../../common/PushNotifications';
import { List, Divider, Switch } from 'react-native-paper';

export interface Props {
  areas: {};
}

interface State {
  areas: {};
}

export default class NotificationsViewModel extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      areas: {},
    };
  }

  async componentDidMount() {
    const viewData = await fetch();
    this.setState({ areas: viewData });
  }

  componentWillUnmount() {}

  render() {
    const viewData = this.state.areas;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={viewData} // TODO: fix ts error
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <List.Item
                title={item.name}
                description=""
                right={(props) => (
                  <Switch
                    value={item.subscribe}
                    onValueChange={() => {
                      if (item.topic == '') {
                        return Alert.alert(
                          'エラー',
                          'RSSが提供されていないため通知設定できません',
                          [{ text: '閉じる' }],
                          { cancelable: false },
                        );
                      }
                      this.onToggleSwitch(item.topic);
                    }}
                  />
                )}
              />
              <Divider />
            </View>
          )}
        />
      </View>
    );
  }

  async onToggleSwitch(key: string) {
    if (key == '') {
      return;
    }
    const subscribeStatus = await fetchRow(key);
    if (subscribeStatus) {
      unsubscribe(key);
      storeSubscribeData(key, false);
    } else {
      subscribe(key);
      storeSubscribeData(key, true);
    }

    const viewData = await fetch();
    this.setState({ areas: viewData });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
