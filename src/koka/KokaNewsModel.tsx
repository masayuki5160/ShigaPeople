import { parse } from 'fast-xml-parser'
import { RssModel } from '../common/RssModel'

export default class KusatsuNewsModel implements RssModel {
    rssUrl = 'https://www.city.koka.lg.jp/services/rdf/rss10/1052.xml';

    async fetchRss () {
      const response = await fetch(this.rssUrl)
      if (response.status !== 200) {
        return []
      }

      const responceText = await response.text()
      const obj = parse(responceText)
      const res = obj['rdf:RDF'].item

      return res
    }
}
