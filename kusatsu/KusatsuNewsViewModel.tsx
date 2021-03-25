import React from 'react';
import NewsScreen from './KusatsuNewsScreen';
import NewsModel from './KusatsuNewsModel';
import {convertToViewData} from './KusatsuNewsViewData';

export interface Props {
    news: {}
}
  
interface State {
    news: {}
}

export default class KusatsuNewsViewModel extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            news: {},
        };
    }

    async componentDidMount() {
        let model = new NewsModel()
        let news = await model.fetchRss();
        let viewData = convertToViewData(news);
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