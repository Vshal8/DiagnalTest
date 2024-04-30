import React, { memo, useEffect, useState } from "react";
import { Image, ImageSourcePropType, Text } from "react-native";
import { commonStyles } from "../../library/theme/commonStyles";
import { ImageHandler } from "../../library/utils/ImageHandler";


type iListItemTitleProps = {
    imagePath: ImageSourcePropType;
}

const ListItemTitle = (props: iListItemTitleProps) => {

    const [imageSource, setImageSource] = useState<ImageSourcePropType>()

    useEffect(() => {
        getImagePath()
    }, [])

    const getImagePath = () => {
        try {
            // const source =
            const backgroundImage = ImageHandler.getImageSource(
                `${props.imagePath}`,
            );
            setImageSource(backgroundImage)
        }
        catch (err) {
            console.log('Error is', err)
        }
    }

    return (
        <Image source={imageSource} style={commonStyles.singleItemImage} />
    )
}

export default memo(ListItemTitle)