import React from 'react'
import NewsScreen from '../common/NewsScreen'
import ShigaNewsModel from './ShigaNewsModel'
import { convertToViewData } from './ShigaNewsViewData'
import { requestUserPermission, subscribe } from '../common/PushNotifications'

export interface Props {
    news: {}
}

interface State {
    news: {}
}

export default class ShigaNewsViewModel extends React.Component<Props, State> {
  constructor (props: any) {
    super(props)
    this.state = {
      news: {}
    }
  }

  async componentDidMount () {
    // Get pushNotification permission
    requestUserPermission()
    // TODO: fix later
    subscribe('shiga')

    const model = new ShigaNewsModel()
    const news = await model.fetchRss()
    const viewData = convertToViewData(news)
    this.setState({ news: viewData })
  }

  componentWillUnmount () {
  }

  render () {
    const viewData = this.state.news
    return (
            <NewsScreen news={viewData}/>
    )
  }
}
