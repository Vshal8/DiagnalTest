import { ImageSourcePropType } from "react-native";

type iImagePathType = {
    name: string;
    source: ImageSourcePropType
}

export class ImageHandler {
    private static images: Array<iImagePathType> = [
        {
            name: 'poster1.jpg',
            source: require('../../../assets/images/poster1.jpg'),
        },
        {
            name: 'poster2.jpg',
            source: require('../../../assets/images/poster2.jpg'),
        },
        {
            name: 'poster3.jpg',
            source: require('../../../assets/images/poster3.jpg'),
        },
        {
            name: 'poster4.jpg',
            source: require('../../../assets/images/poster4.jpg'),
        },
        {
            name: 'poster5.jpg',
            source: require('../../../assets/images/poster5.jpg'),
        },
        {
            name: 'poster6.jpg',
            source: require('../../../assets/images/poster6.jpg'),
        },
        {
            name: 'poster7.jpg',
            source: require('../../../assets/images/poster7.jpg'),
        },
        {
            name: 'poster8.jpg',
            source: require('../../../assets/images/poster8.jpg'),
        },
        {
            name: 'poster9.jpg',
            source: require('../../../assets/images/poster9.jpg'),
        },
    ];

    static getImageSource = (name: string) => {
        const found = ImageHandler.images.find(e => e.name === name);
        return found ? found.source : require('../../../assets/images/placeholder_for_missing_posters.png');
    };
}