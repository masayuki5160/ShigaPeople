import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ShigaNewsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ShigaNews</Text>
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