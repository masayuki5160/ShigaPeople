import {NewsViewData} from '../common/NewsViewData';

export function convertToViewData(rawData: []) {
    const res = rawData.map((elements, index) => {
        const viewData: NewsViewData = {
            title: elements['title'],
            description: '',// 適切なデータがないためbrankとする
            pubDate: elements['dc:date'],
            link: elements['link'],
        };
        return viewData;
    });

    return res;
}