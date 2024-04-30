import React, { memo } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styleGlobalDefinition } from '../library/theme/styleGlobalDefinitions';
import { colors } from '../library/theme/colors';
import { fonts } from '../library/theme/fonts';

type iSearchProps = {
    onCancelPress: () => void;
    onSearch: (val: string) => void;
}

const SearchBar = (props: iSearchProps) => {

    return <View style={styles.mainContainer}>
        <TextInput style={styles.searchInput}
            placeholder='Search'
            placeholderTextColor={colors.extraLight}
            onChangeText={props.onSearch}></TextInput>
        <TouchableOpacity onPress={props.onCancelPress}>
            <Text style={{ color: colors.white }}>Cancel</Text>
        </TouchableOpacity>
    </View>
}
export default memo(SearchBar);

const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: colors.light,
        marginHorizontal: styleGlobalDefinition.commonPadding.padding,
        padding: styleGlobalDefinition.commonPadding.padding * 0.5,
        flexDirection: "row",
        marginTop: Platform.OS == 'ios' ? 50 : 0
    },
    searchInput: {
        flex: 1,
        color: colors.white,
        fontFamily: fonts.regular
    }
});