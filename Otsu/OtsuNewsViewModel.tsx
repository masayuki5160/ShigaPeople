import React from 'react';
import OtsuNewsScreen from './OtsuNewsScreen';
import OtsuNewsModel from './OtsuNewsModel';
import {convertToViewData} from './OtsuNewsViewData';

export interface Props {
    news: {}
}
  
interface State {
    news: {}
}

export default class OtsuNewsViewModel extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            news: {},
        };
    }

    async componentDidMount() {
        let model = new OtsuNewsModel();
        let news = await model.fetchRss();
        let viewData = convertToViewData(news);
        this.setState({news: viewData});
    }

    componentWillUnmount() {
    }

    render() {
        const viewData = this.state.news;
        return(
            <OtsuNewsScreen news={viewData}/>
        );
    }
}