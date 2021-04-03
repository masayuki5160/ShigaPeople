import React from 'react';
import Screen from './NotificationsScreen';
import {areas} from './NotificationsModel';

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
        const viewData = areas;
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