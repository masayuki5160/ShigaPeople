import { parse } from 'fast-xml-parser';
import { RssModel } from '../common/RssModel';

export default class TagaNewsModel implements RssModel {
  rssUrl = 'https://www.town.taga.lg.jp/rss/rss_emergency.xml';
  async fetchRss() {
    const response = await fetch(this.rssUrl);
    if (response.status !== 200) {
      return [];
    }
    const responceText = await response.text();
    const obj = parse(responceText);
    const items = obj.rss.channel.item;

    return items;
  }
}
