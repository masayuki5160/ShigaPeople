import React from 'react';
import NewsScreen from './MaibaraNewsScreen';
import MaibaraNewsModel from './MaibaraNewsModel';

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
        let model = new MaibaraNewsModel()
        let news = await model.fetchRss();
        // TODO: View側がRSSの構造を意識することなく表示処理ができるようにVM側で整形してあげたい
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