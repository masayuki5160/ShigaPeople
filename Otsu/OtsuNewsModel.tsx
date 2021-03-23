import { parse } from 'fast-xml-parser';

export const barTitle: String = '滋賀';
const rss = 'https://www.city.otsu.lg.jp/cgi-bin/feed.php?type=rss_2.0&new1=1';

export const fetchRss = async () => {
    // TODO: 例外処理を入れたい
    let response = await fetch(rss);
    console.log('result:', response.status);
    let responceText = await response.text();
    let obj = parse(responceText);
    let res = obj['rdf:RDF']['item']

    return res;
}