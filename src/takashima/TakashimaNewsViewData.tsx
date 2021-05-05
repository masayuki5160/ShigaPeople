import { NewsViewData } from '../src/common/NewsViewData';

export function convertToViewData(rawData: []) {
  const res = rawData.map((elements, index) => {
    const viewData: NewsViewData = {
      title: elements.title,
      description: elements.description,
      pubDate: elements['dc:date'],
      link: elements.link,
    };
    return viewData;
  });

  return res;
}
