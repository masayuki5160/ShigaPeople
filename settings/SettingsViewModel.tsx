import React from 'react';
import Screen from './SettingsScreen';
import {options} from './SettingsModel';

export interface Props {
    news: {}
}
  
interface State {
    news: {}
}

export default class RittoNewsViewModel extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            news: {},
        };
    }

    async componentDidMount() {
        this.setState({news: options});
    }

    componentWillUnmount() {
    }

    render() {
        const viewData = this.state.news;
        return(
            <Screen options={viewData}/>
        );
    }
}