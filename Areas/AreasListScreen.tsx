import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as vm from './AreasListViewModel';
import { List } from 'react-native-paper';

export default class AreasListScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    async componentDidMount() {
        let areas = await vm.fetch();
        console.log('Screen: ', areas);
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    style={styles.list}
                    data={vm.fetch()}
                    keyExtractor={item => '${item.name}'}
                    renderItem={({item}) => (
                        <List.Item 
                            title={item.name}
                            description='test'
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