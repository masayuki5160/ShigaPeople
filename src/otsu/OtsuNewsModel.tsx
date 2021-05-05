import { parse } from 'fast-xml-parser'
import { RssModel } from '../common/RssModel'

export default class OtsuNewsModel implements RssModel {
    rssUrl = 'https://www.city.otsu.lg.jp/cgi-bin/feed.php?type=rss_2.0&new1=1';

    async fetchRss () {
      // TODO: 例外処理を入れたい
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
