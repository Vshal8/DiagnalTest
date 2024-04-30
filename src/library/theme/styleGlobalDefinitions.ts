import { StyleSheet } from "react-native";
import { windowWidth } from "../utils/globalConstants";

export const styleGlobalDefinition = StyleSheet.create({

    listItemsBottomMargin:{
        marginBottom: 45
    },
    commonPadding:{
        padding:20
    },
    listItemsLeftMargin:{
        marginLeft:20
    },
    singleItemWidth:{
        width:(windowWidth - (4 * 20)) / 3
    }
});