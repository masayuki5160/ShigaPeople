import { parse } from 'fast-xml-parser';
import { RssModel } from '../common/RssModel';

export default class OtsuNewsModel implements RssModel {
    rssUrl = 'https://www.city.otsu.lg.jp/cgi-bin/feed.php?type=rss_2.0&new1=1';

    async fetchRss() {
        // TODO: 例外処理を入れたい
        let response = await fetch(this.rssUrl);
        console.log('result:', response.status);
        let responceText = await response.text();
        let obj = parse(responceText);
        let res = obj['rdf:RDF']['item']

        return res;
    }
}