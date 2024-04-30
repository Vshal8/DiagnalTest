import React from 'react';
import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../library/theme/colors';
import { imagePath } from '../library/utils/imagePath';
import { getReponsiveSize, getScaledFontSize } from '../library/utils/globalFunctions';
import { fonts } from '../library/theme/fonts';
import { styleGlobalDefinition } from '../library/theme/styleGlobalDefinitions';

type iHeaderProps= {
    title: string;
    onSearchPress: () => void;
}

const Header = (props: iHeaderProps) => {

    return <ImageBackground source={imagePath.navBar} style={styles.headerFullContainer}>
        <View style={styles.headerInnerContainer}>
            <Image source={imagePath.backIcon} style={{ height: 16, width: 16 }} />
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <TouchableOpacity onPress={props.onSearchPress}>
            <Image source={imagePath.searchIcon} style={{ height: 16, width: 16 }} />
        </TouchableOpacity>
    </ImageBackground>
}

export default Header;

const styles = StyleSheet.create({
    headerFullContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: styleGlobalDefinition.commonPadding.padding,
        marginTop: Platform.OS == 'ios' ? 50 : 0,
        tintColor: 'red'
    },
    headerInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: getScaledFontSize(24),
        color: colors.white,
        fontFamily: fonts.light,
        marginLeft: 10
    },
    imageStyle: {
        height: 18,
        width: 18
    }
});