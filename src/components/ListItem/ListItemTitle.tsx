import React, { memo, useState } from "react";
import { Text } from "react-native";
import { commonStyles } from "../../library/theme/commonStyles";


type iListItemTitleProps = {
    title: string;
}

const ListItemTitle = (props: iListItemTitleProps) => {

    const [numberOfLines,setNumberOfLines]=useState(1)

    const onTextPress=()=>{
        if(numberOfLines==1){
            setNumberOfLines(5)
        }
        else {
            setNumberOfLines(1)
        }
    }

    return (
        <Text numberOfLines={numberOfLines} onPress={onTextPress} style={commonStyles.singleItemText}>
            {props.title}
        </Text>
    )
}

export default memo(ListItemTitle)