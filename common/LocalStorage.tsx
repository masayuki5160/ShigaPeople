import AsyncStorage from '@react-native-community/async-storage';

export async function storeData(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
          console.log(error);
    }
}

export async function fetchData(key: string) {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          return value;
        }
    } catch (error) {
        console.log(error);
    }

    return '';
}