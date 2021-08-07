import React from 'react';
import NewsScreen from '../common/NewsScreen';
import MaibaraNewsModel from './MaibaraNewsModel';
import { convertToViewData } from './MaibaraNewsViewData';

export interface Props {
  news: {};
}

interface State {
  news: {};
}

export default class MaibaraNewsViewModel extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      news: {},
    };
  }

  async componentDidMount() {
    const model = new MaibaraNewsModel();
    const news = await model.fetchRss();
    const viewData = convertToViewData(news);
    this.setState({ news: viewData });
  }

  componentWillUnmount() {}

  render() {
    const viewData = this.state.news;
    return <NewsScreen news={viewData} />;
  }
}
