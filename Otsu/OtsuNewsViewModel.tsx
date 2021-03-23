import React from 'react';
import OtsuNewsScreen from './OtsuNewsScreen';
import { fetchRss } from './OtsuNewsModel';

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
        let news = await fetchRss();
        this.setState({news: news});
    }

    componentWillUnmount() {
    }

    render() {
        const news = this.state.news;
        return(
            <OtsuNewsScreen news={news}/>
        );
    }
}