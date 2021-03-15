import { parse } from 'fast-xml-parser';

export const barTitle: String = '滋賀';

export const news = [
    {
        text: "memomemo1",
        createdAt: 1585574700001,
    },
    {
        text: "memomemo2",
        createdAt: 1585574700002,
    },
];

export const fetchRss = async () => {
    // TODO: 滋賀のRSSに変更する
    let response = await fetch('https://www.city.otsu.lg.jp/cgi-bin/feed.php?type=rss_2.0&new1=1');
    console.log('result:', response.status);
    console.log('result:', response.body);
    let responceText = await response.text();
    // TODO: XMLをパースする
    let obj = parse(responceText);
    // console.log('result', obj);
    console.log('result->item', obj['rdf:RDF']['item']);
}