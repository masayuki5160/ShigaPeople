import React from 'react';
import Screen from './NotificationsScreen';
import {fetch, fetchRow, storeSubscribeData} from './NotificationsModel';
import {subscribe, unsubscribe} from '../../common/PushNotifications';

export interface Props {
    areas: {}
}
  
interface State {
    areas: {}
}

export default class NotificationsViewModel extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            areas: {},
        };
    }

    async componentDidMount() {
        const viewData = await fetch();
        this.setState({areas: viewData});
    }

    componentWillUnmount() {
    }

    render() {
        const viewData = this.state.areas;
        return(
            <Screen areas={viewData}/>
        );
    }
}

export async function onToggleSwitch(key: string) {
    const subscribeStatus = await fetchRow(key);
    if (subscribeStatus) {
        unsubscribe(key);
        storeSubscribeData(key, false);
    } else {
        subscribe(key);
        storeSubscribeData(key, true);            
    }

    // const viewData = await fetch();
    // this.setState({areas: viewData});
}