import { parse } from 'fast-xml-parser';

export const barTitle: String = '滋賀';
const shigaRSSUrl = 'https://www.pref.shiga.lg.jp/file/rss/kensei_koho_e-shinbun_oshirase_index.rss';

export const fetchRss = async () => {
    let response = await fetch(shigaRSSUrl);
    
    // TODO: 例外処理
    let responceText = await response.text();
    let obj = parse(responceText);
    let items = obj['rss']['channel']['item'];
    
    return items;
}