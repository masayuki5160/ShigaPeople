import { parse } from 'fast-xml-parser';
import { RssModel } from '../common/RssModel';

export default class MaibaraNewsModel implements RssModel {
  rssUrl = 'https://www.city.maibara.lg.jp/cgi-bin/feed.php?type=rss';

  async fetchRss() {
    const response = await fetch(this.rssUrl);
    if (response.status !== 200) {
      return [];
    }

    const responceText = await response.text();
    const obj = parse(responceText);
    const res = obj['rdf:RDF'].item;

    return res;
  }
}
