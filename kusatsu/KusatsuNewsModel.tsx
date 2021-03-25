import { parse } from 'fast-xml-parser';
import { RssModel } from '../common/RssModel';

export default class KusatsuNewsModel implements RssModel {
    rssUrl = 'https://www.city.kusatsu.shiga.jp/rss_news.xml';

    async fetchRss() {
    // TODO: 例外処理を入れたい
    let response = await fetch(this.rssUrl);
    let responceText = await response.text();
    let obj = parse(responceText);
    let res = obj['rss']['channel']['item'];

    return res;
    }
}