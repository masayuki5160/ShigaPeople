import React from 'react';
import NewsScreen from '../common/NewsScreen';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import ShigaNewsModel from './ShigaNewsModel';
import {convertToViewData} from './ShigaNewsViewData';

export interface Props {
    news: {}
}
  
interface State {
    news: {}
}

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }), 
});

export default class ShigaNewsViewModel extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            news: {},
        };
    }

    async componentDidMount() {
        // TODO: fix later
        const token = await this._registerForPushNotificationsAsync();        

        Notifications.addNotificationReceivedListener(this._handleNotification);
        Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);

        const model = new ShigaNewsModel()
        const news = await model.fetchRss();
        const viewData = convertToViewData(news);
        this.setState({news: viewData});
    }

    componentWillUnmount() {
    }

    render() {
        const viewData = this.state.news;
        return(
            <NewsScreen news={viewData}/>
        );
    }

    _handleNotification = notification => {
        // this.setState({ notification: notification });
        console.log('get push');
    };
      
    _handleNotificationResponse = response => {
        console.log('get push', response);
    };

    async _registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        return token;  
    }
}