import { parse } from 'fast-xml-parser';
import { RssModel } from '../common/RssModel';

export default class ShigaNewsModel implements RssModel {
  rssUrl = 'https://www.pref.shiga.lg.jp/file/rss/kensei_koho_e-shinbun_oshirase_index.rss';
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
