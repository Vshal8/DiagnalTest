import React, { memo } from "react";
import { iSingleContentItem } from "../../library/utils/interfaces";
import { commonStyles } from "../../library/theme/commonStyles";
import { Image, StyleSheet, Text, View } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
import ListItemImage from "./ListItemImage";
import ListItemTitle from "./ListItemTitle";


type iSingleListItem = {
  item: iSingleContentItem;
  index: number;
  isLoading: boolean;
}

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const SingleListItem = (props: iSingleListItem) => {

  return (
    <View style={commonStyles.singleItem}>
      <ShimmerPlaceHolder style={commonStyles.singleItemImage} visible={!props.isLoading}>
        <ListItemImage imagePath={props.item.imagePath} />
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={commonStyles.skeltonTextContainer} visible={!props.isLoading}>
        <ListItemTitle title={props.item.title} />
      </ShimmerPlaceHolder>
    </View>
  )
}

export default memo(SingleListItem);