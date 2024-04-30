import { ImageSourcePropType, PixelRatio } from "react-native";
import { windowHeight, windowWidth } from "./globalConstants";
import { iFormattedDataType, iSingleContentItem } from "./interfaces";

export function getScaledFontSize(size: number): number {
    return size / PixelRatio.getFontScale()
}

export function getReponsiveSize(size: number): number {
    const multiplier = 2.2;
    return ((windowHeight / windowWidth) * size) / multiplier;
};

export function formatData(singlePageData: any): iFormattedDataType {
    let arrFormattedData: iFormattedDataType = { title: '', items: new Array<iSingleContentItem>() };
    let arrData = [...singlePageData?.['default']?.['page']?.['content-items']?.['content']]
    let arrItems = arrData.map((item) => {
        return {
            title: item?.['name'],
            imagePath: item['poster-image']
        }
    })
    arrFormattedData.title = singlePageData?.['default']?.['page']?.['title']
    arrFormattedData.items = arrItems
    return arrFormattedData
}