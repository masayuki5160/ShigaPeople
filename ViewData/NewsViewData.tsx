export interface NewsViewData {
    news:{item: NewsModel};
}

interface NewsModel {
    title:string;
    description:string;
    pubDate:string;
    link:string;
}