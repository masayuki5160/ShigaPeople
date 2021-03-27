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
import HigashiomiNewsViewModel from '../higashiomi/HigashiomiNewsViewModel';
import HinoNewsViewModel from '../hino/HinoNewsViewModel';
import ToyosatoNewsViewModel from '../toyosato/ToyosatoNewsViewModel';
import KouraNewsViewModel from '../koura/KouraNewsViewModel';
import TagaNewsViewModel from '../taga/TagaNewsViewModel';
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
          name='HigashiomiNewsViewModel'
          component={HigashiomiNewsViewModel}
          options={{headerTitle: '東近江市の情報'}}
        />
        <Stack.Screen
          name='HinoNewsViewModel'
          component={HinoNewsViewModel}
          options={{headerTitle: '日野町の情報'}}
        />
        <Stack.Screen
          name='ToyosatoNewsViewModel'
          component={ToyosatoNewsViewModel}
          options={{headerTitle: '豊郷町の情報'}}
        />
        <Stack.Screen
          name='KouraNewsViewModel'
          component={KouraNewsViewModel}
          options={{headerTitle: '甲良町の情報'}}
        />
        <Stack.Screen
          name='TagaNewsViewModel'
          component={TagaNewsViewModel}
          options={{headerTitle: '多賀町の情報'}}
        />
        <Stack.Screen
          name='WebViewScreen'
          component={WebViewScreen}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    );
  }