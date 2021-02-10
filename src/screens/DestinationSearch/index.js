import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';

// google place autoComplete
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('rediredt');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="目前地點"
          styles={{
            textInput: styles.textInput,
            container: styles.placesAutocompleteContainer,
            listView: styles.listView, // 搜尋結果清單
            separator: styles.separator,
          }}
          suppressDefaultStyles //取消預設 css
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log('1');
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          enablePoweredByContainer={false} // google 浮水印去掉
          fetchDetails
          query={{
            key: 'AIzaSyAfp747n49RDLUxUMWTfhCWig3MDjtR_pY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />} //更改搜尋結果欄的樣式
        />

        <GooglePlacesAutocomplete
          placeholder="要去哪裡？"
          styles={{
            textInput: styles.textInput,
            container: {...styles.placesAutocompleteContainer, top: 55},
            separator: styles.separator,
          }}
          suppressDefaultStyles
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log('1');
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          enablePoweredByContainer={false} // google 浮水印去掉
          fetchDetails
          query={{
            key: 'AIzaSyAfp747n49RDLUxUMWTfhCWig3MDjtR_pY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
        {/* circle near Origin input */}
        <View style={styles.circle} />
        {/* line between dots */}
        <View style={styles.line} />
        {/* Square */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
