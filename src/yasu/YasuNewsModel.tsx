import { parse } from 'fast-xml-parser';
import { RssModel } from '../common/RssModel';

export default class YasuNewsModel implements RssModel {
    rssUrl = 'https://www.city.yasu.lg.jp/feed.xml?type=rss_2.0&dirId=1031&includeShortcut=1&ignore=1';

    async fetchRss() {
        const response = await fetch(this.rssUrl);
        if (response.status !== 200) {
            return [];
        }
        const responceText = await response.text();
        const obj = parse(responceText);
        const res = obj['rss']['channel']['item'];

        return res;
    }
}