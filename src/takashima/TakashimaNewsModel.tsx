import { parse } from 'fast-xml-parser'
import { RssModel } from '../common/RssModel'

export default class TakashimaNewsModel implements RssModel {
    rssUrl = 'http://www.city.takashima.shiga.jp/www/rss/news.rdf';
    async fetchRss () {
      const response = await fetch(this.rssUrl)
      if (response.status !== 200) {
        return []
      }
      const responceText = await response.text()
      const obj = parse(responceText)
      const items = obj['rdf:RDF'].item

      return items
    }
}
