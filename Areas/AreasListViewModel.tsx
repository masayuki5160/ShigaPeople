import { useNavigation } from '@react-navigation/core';
import { parse } from 'fast-xml-parser';

export const barTitle: String = '一覧';

const areas = [
    {
        name: "滋賀県",
    },
    {
        name: "大津市",
    },
];

export const fetch = () => {
    return areas;
}