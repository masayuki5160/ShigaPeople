import { parse } from 'fast-xml-parser';
import { RssModel } from '../common/RssModel';

export default class MaibaraNewsModel implements RssModel {
    rssUrl = 'https://www.city.maibara.lg.jp/cgi-bin/feed.php?type=rss';

    async fetchRss() {
    // TODO: 例外処理を入れたい
    let response = await fetch(this.rssUrl);
    let responceText = await response.text();
    let obj = parse(responceText);
    let res = obj['rdf:RDF']['item']

    return res;
    }
}