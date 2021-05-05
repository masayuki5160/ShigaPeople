import { parse } from 'fast-xml-parser'
import { RssModel } from '../common/RssModel'

export default class KusatsuNewsModel implements RssModel {
    rssUrl = 'https://www.city.kusatsu.shiga.jp/rss_news.xml';

    async fetchRss () {
      const response = await fetch(this.rssUrl)
      if (response.status !== 200) {
        return []
      }

      const responceText = await response.text()
      const obj = parse(responceText)
      const res = obj.rss.channel.item

      return res
    }
}
