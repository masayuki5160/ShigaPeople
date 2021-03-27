import React from 'react';
import NewsScreen from '../common/NewsScreen';
import NewsModel from './RittoNewsModel';
import {convertToViewData} from './RittoNewsViewData';

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
        const model = new NewsModel()
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
}