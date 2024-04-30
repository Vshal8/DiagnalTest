import React, { FC, useCallback, useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ImageProps, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../library/theme/commonStyles";
import Header from "../components/Header";
import { iSingleContentItem } from "../library/utils/interfaces";
import { colors } from "../library/theme/colors";
import SearchBar from "../components/SearchBar";
import { fonts } from "../library/theme/fonts";
import SingleListItem from "../components/ListItem/SingleListItem";
import { formatData } from "../library/utils/globalFunctions";

const MainScreen = (): JSX.Element => {


  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [title, setTitle] = useState<string>('')
  const [listData, setListData] = useState<Array<iSingleContentItem>>([]);

  const [allData, setAllData] = useState<Array<iSingleContentItem>>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const [pageNumber, setPageNumber] = useState<number>(0)

  useEffect(() => {
    getInitialData()
  }, [pageNumber])

  const getInitialData = async () => {
    switch (pageNumber) {
      case 0:
        setIsLoading(true)
        import('../api/CONTENTLISTINGPAGE-PAGE1.json').then((data) => {
          let formattedData = formatData(data)
          setTitle(formattedData.title)
          setAllData(formattedData.items)
          setListData(formattedData.items)
          setIsLoading(false)
        })
        break;
      case 1:
        setIsLoading(true)
        import('../api/CONTENTLISTINGPAGE-PAGE2.json').then((data) => {
          let formattedData = formatData(data)
          setAllData([...listData, ...formattedData.items])
          setListData([...listData, ...formattedData.items])
          setIsLoading(false)
        })
        break;

      case 2:
        console.log('Fetched')
        setIsLoading(true)
        import('../api/CONTENTLISTINGPAGE-PAGE3.json').then((data) => {
          let formattedData = formatData(data)
          setAllData([...listData, ...formattedData.items])
          setListData([...listData, ...formattedData.items])
          setIsLoading(false)
        })
        break;

      default:

        break;
    }
  }

  const onSearchPress = () => {
    if (showSearch) {
      setShowSearch(false);
    }
    else {
      setShowSearch(true);
    }
  }

  const onCancelSearchPress = () => {
    setShowSearch(false);
  }

  const onSearch = (searchVal: string) => {
    if (searchVal.trim() != '') {
      console.log('Data is', searchVal)
      let arrFilteredItems = [...allData].filter((item) => {
        return item.title.includes(searchVal)
      })
      setListData(arrFilteredItems)
    }
    else {
      setListData(allData)
    }
  }

  const renderSingleItem = useCallback(({ item, index }) => {
    return <SingleListItem
      item={item}
      index={index}
      isLoading={isLoading}
    />
  }, [isLoading])

  const onListEndReached = () => {
    let currentPageNumber = pageNumber
    if (currentPageNumber < 3) {
      currentPageNumber = currentPageNumber + 1
      setPageNumber(currentPageNumber)
    }
  }

  const listKeyExtractor = useCallback((item: any, index: number) => { return `${item} ${index}` }, [])

  return (
    <View style={commonStyles.fullScreenContainer}>
      {showSearch ?
        <SearchBar onSearch={onSearch} onCancelPress={onCancelSearchPress} /> :
        <Header title={title} onSearchPress={onSearchPress} />
      }
      <View style={commonStyles.screenInnerContainer}>
        <FlatList
          data={listData}
          keyExtractor={listKeyExtractor}
          renderItem={renderSingleItem}
          numColumns={3}
          onEndReachedThreshold={0.5}
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          updateCellsBatchingPeriod={100}
          onEndReached={onListEndReached}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          windowSize={5}
        />
      </View>
    </View>
  )
}

export default MainScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.5,
    resizeMode: "stretch"

  },
  title: {
    color: colors.white,
    marginTop: 20,
    fontFamily: fonts.light,
  }
});