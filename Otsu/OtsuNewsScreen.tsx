import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as vm from './OtsuNewsViewModel';
import { List } from 'react-native-paper';

export default class OtsuNewsScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    async componentDidMount() {
        let news = await vm.fetchRss();
        console.log('Screen: ', news);
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.list}
                    data={vm.news}
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