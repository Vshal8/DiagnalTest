import { ImageSourcePropType } from "react-native";

export interface iOrientationTypes {
    currentOrientation: 'portrait' | 'landscape';
    width:number;
    height:number;
}

export interface iImagePath {
    navBar: ImageSourcePropType;
    backIcon: ImageSourcePropType;
    searchIcon: ImageSourcePropType;
}

export interface iSingleContentItem {
    title: string;
    imagePath: ImageSourcePropType;
}

export interface iFormattedDataType{
    title:string;
    items:Array<iSingleContentItem>
}