import { StyleSheet, ViewStyle } from "react-native";
import { windowHeight, windowWidth } from "../utils/globalConstants";
import { colors } from "./colors";
import { styleGlobalDefinition } from "./styleGlobalDefinitions";
import { fonts } from "./fonts";

export const commonStyles = StyleSheet.create({
    flexFull: {
        flex: 1
    },
    fullScreenContainer: {
        flex: 1,
        backgroundColor: colors.appPrimary,
    },
    screenInnerContainer: {
        flex: 1,
        padding: styleGlobalDefinition.commonPadding.padding,
        paddingTop: 36,
        paddingLeft: 0
    },
    singleItem: {
        width: styleGlobalDefinition.singleItemWidth.width,
        marginLeft: styleGlobalDefinition.listItemsLeftMargin.marginLeft,
        marginBottom: styleGlobalDefinition.listItemsBottomMargin.marginBottom
    },
    singleItemImage: {
        width: styleGlobalDefinition.singleItemWidth.width,
        height: windowHeight * 0.25,
        resizeMode: "stretch"
    },
    singleItemText: {
        color: colors.white,
        fontFamily: fonts.light,
    },
    skeltonTextContainer: {
        marginTop: 24,
        width: '80%',
    }
})