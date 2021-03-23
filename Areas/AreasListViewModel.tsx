import { useNavigation } from '@react-navigation/core';
import { parse } from 'fast-xml-parser';

export const barTitle: String = '一覧';

export const areas = [
    {
        name: "滋賀県",
        screen: "ShigaNewsComponent"
    },
    {
        name: "大津市",
        screen: "OtsuNewsScreen"
    },
];