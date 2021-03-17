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
    let response = await fetch('https://www.pref.shiga.lg.jp/file/rss/kensei_koho_e-shinbun_oshirase_index.rss');
    
    // TODO: 例外処理
    console.log('result:', response.status);
    let responceText = await response.text();
    let obj = parse(responceText);
    let items = obj['rss']['channel']['item'];
    
    return items;
}