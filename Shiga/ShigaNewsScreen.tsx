import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as vm from './ShigaNewsViewModel';

export const ShigaNewsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>{vm.barTitle}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });