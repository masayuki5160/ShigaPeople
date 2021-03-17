import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as vm from './ShigaNewsViewModel';
import { List } from 'react-native-paper';

export default class ShigaNewsScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            news: []
        }
    }

    async componentDidMount() {
        let news = await vm.fetchRss();
        console.log('Screen: ', news);
        this.setState({news: news});
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.list}
                    data={vm.news}// TODO: あとで変更する
                    keyExtractor={item => '${item.createdAt}'}
                    renderItem={({item}) => (
                        <List.Item 
                            title={item.text}
                            description={item.createdAt}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
        flex: 1
    },
  });