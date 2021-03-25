import {NewsViewData} from '../common/NewsViewData';

export function convertToViewData(rawData: []) {
    const res = rawData.map((elements, index) => {
        let viewData: NewsViewData = {
            title: elements['title'],
            description: elements['dc:date'],// 適切なデータがないためdateを格納しておく
            pubDate: elements['dc:date'],
            link: elements['link'],
        };
        return viewData;
    });

    return res;
}