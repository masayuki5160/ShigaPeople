import {fetchData, storeData} from '../../common/LocalStorage';

export interface Area {
    name: string,
    topic: string,
    subscribe: boolean
}

const areas: Area[] = [
    {
        name: "滋賀県",
        topic: "shiga",
        subscribe: true// 滋賀県の情報はデフォルトで取得する
    },
    {
        name: "大津市",
        topic: "otsu",
        subscribe: false
    },
    {
        name: "草津市",
        topic: "kusatsu",
        subscribe: false
    },
    {
        name: "守山市",
        topic: "",
        subscribe: false
    },
    {
        name: "栗東市",
        topic: "ritto",
        subscribe: false
    },
    {
        name: "野洲市",
        topic: "yasu",
        subscribe: false
    },
    {
        name: "甲賀市",
        topic: "koka",
        subscribe: false
    },
    {
        name: "湖南市",
        topic: "",
        subscribe: false
    },
    {
        name: "東近江市",
        topic: "higashiomi",
        subscribe: false
    },
    {
        name: "近江八幡市",
        topic: "",
        subscribe: false
    },
    {
        name: "日野町",
        topic: "hino",
        subscribe: false
    },
    {
        name: "竜王町",
        topic: "",
        subscribe: false
    },
    {
        name: "彦根町",
        topic: "",
        subscribe: false
    },
    {
        name: "愛荘町",
        topic: "",
        subscribe: false
    },
    {
        name: "豊郷町",
        topic: "toyosato",
        subscribe: false
    },
    {
        name: "甲良町",
        topic: "koura",
        subscribe: false
    },
    {
        name: "多賀町",
        topic: "taga",
        subscribe: false
    },
    {
        name: "米原市",
        topic: "maibara",
        subscribe: false
    },
    {
        name: "長浜市",
        topic: "nagahama",
        subscribe: false
    },
    {
        name: "高島市",
        topic: "takashima",
        subscribe: false
    },
];

// TODO: Add unit test
export async function fetch() {
    const settings = areas.map(async function(item){
        let res = item;
        if (res.topic == '') {
            return res;
        }

        const fetchedData = await fetchData(item.topic);
        if (fetchedData != '') {
            const subscribe = (fetchedData == 'true') ? true : false;
            res.subscribe = subscribe;
        } else {
            // Store the init value
            await storeData(item.topic, item.subscribe.toString());
        }

        return res;
    });

    let ret = await Promise.all(settings);
    return ret;
}

export async function fetchRow(key: string) {
    const subscribe = await fetchData(key);
    return (subscribe == 'true') ? true : false;
}

export async function storeSubscribeData(key: string, value: boolean) {
    await storeData(key, value.toString());
}