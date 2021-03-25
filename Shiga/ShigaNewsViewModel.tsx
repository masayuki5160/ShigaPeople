import React from 'react';
import ShigaNewsScreen from './ShigaNewsScreen';
import ShigaNewsModel from './ShigaNewsModel';

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
        let model = new ShigaNewsModel()
        let news = await model.fetchRss();
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