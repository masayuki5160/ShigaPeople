import React from 'react';
import Screen from './SettingsScreen';
import {options} from './SettingsModel';

export default class SettingsViewModel extends React.Component {
    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const viewData = options;
        return(
            <Screen options={viewData}/>
        );
    }
}