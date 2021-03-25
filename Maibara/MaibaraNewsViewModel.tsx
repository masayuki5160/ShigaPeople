import React from 'react';
import NewsScreen from './MaibaraNewsScreen';
import { fetchRss } from './MaibaraNewsModel';

export interface Props {
    news: {}
}
  
interface State {
    news: {}
}

export default class MaibaraNewsViewModel extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            news: {},
        };
    }

    async componentDidMount() {
        let news = await fetchRss();
        this.setState({news: news});
    }

    componentWillUnmount() {
    }

    render() {
        const news = this.state.news;
        return(
            <NewsScreen news={news}/>
        );
    }
}