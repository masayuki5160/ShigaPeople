import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Screens
import AreasListScreen from './AreasListScreen';
import OtsuNewsViewModel from '../otsu/OtsuNewsViewModel';
import MaibaraNewsViewModel from '../maibara/MaibaraNewsViewModel';
import KusatsuNewsViewModel from '../kusatsu/KusatsuNewsViewModel';
import RittoNewsViewModel from '../ritto/RittoNewsViewModel';
import YasuNewsViewModel from '../yasu/YasuNewsViewModel';
import KokaNewsViewModel from '../koka/KokaNewsViewModel';
import WebViewScreen from '../common/WebViewScreen';

const Stack = createStackNavigator();

export default function areaStackScreen() {
    return(
      <Stack.Navigator initialRouteName='AreasListScreen'>
        <Stack.Screen
          name='AreasListScreen'
          component={AreasListScreen}
          options={{headerTitle: '各市の情報'}}
        />
        <Stack.Screen
          name='OtsuNewsViewModel'
          component={OtsuNewsViewModel}
          options={{headerTitle: '大津市の情報'}}
        />
        <Stack.Screen
          name='MaibaraNewsViewModel'
          component={MaibaraNewsViewModel}
          options={{headerTitle: '米原市の情報'}}
        />
        <Stack.Screen
          name='KusatsuNewsViewModel'
          component={KusatsuNewsViewModel}
          options={{headerTitle: '草津市の情報'}}
        />
        <Stack.Screen
          name='RittoNewsViewModel'
          component={RittoNewsViewModel}
          options={{headerTitle: '栗東市の情報'}}
        />
        <Stack.Screen
          name='YasuNewsViewModel'
          component={YasuNewsViewModel}
          options={{headerTitle: '野洲市の情報'}}
        />
        <Stack.Screen
          name='KokaNewsViewModel'
          component={KokaNewsViewModel}
          options={{headerTitle: '甲賀市の情報'}}
        />
        <Stack.Screen
          name='WebViewScreen'
          component={WebViewScreen}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    );
  }