import { parse } from 'fast-xml-parser';
import { RssModel } from '../common/RssModel';

export default class RittoNewsModel implements RssModel {
    rssUrl = 'http://www.city.ritto.lg.jp/cgi-bin/feed.php?type=rss_2.0&new1=1';

    async fetchRss() {
    // TODO: 例外処理を入れたい
    const response = await fetch(this.rssUrl);
    const responceText = await response.text();
    const obj = parse(responceText);
    const res = obj['rdf:RDF']['item'];

    return res;
    }
}