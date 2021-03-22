import React from 'react';
import ShigaNewsScreen from './ShigaNewsScreen';
import { fetchRss } from './ShigaNewsViewModel';

export interface Props {
    news: {}
}
  
interface State {
    news: {}
}

export default class ShigaNewsComponent extends React.Component<Props, State> {
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
            <ShigaNewsScreen news={news}/>
        );
    }
}