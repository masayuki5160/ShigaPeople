import React from 'react';
import ShigaNewsScreen from './ShigaNewsScreen';
import ShigaNewsModel from './ShigaNewsModel';
import {convertToViewData} from './ShigaNewsViewData';

export interface Props {
    news: {}
}
  
interface State {
    news: {}
}

export default class ShigaNewsViewModel extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            news: {},
        };
    }

    async componentDidMount() {
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
            <ShigaNewsScreen news={viewData}/>
        );
    }
}