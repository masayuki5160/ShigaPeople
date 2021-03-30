import React from 'react';
import NewsScreen from '../common/NewsScreen';
import * as Notifications from 'expo-notifications';
import ShigaNewsModel from './ShigaNewsModel';
import {convertToViewData} from './ShigaNewsViewData';
import {registerForPushNotificationsAsync} from '../common/PushNotifications';

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
        const token = await registerForPushNotificationsAsync();        

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
}