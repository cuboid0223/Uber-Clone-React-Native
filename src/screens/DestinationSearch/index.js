import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';

// google place autoComplete
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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
          styles={{textInput: styles.textInput}}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log('1');
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAfp747n49RDLUxUMWTfhCWig3MDjtR_pY',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="要去哪裡？"
          styles={{textInput: styles.textInput}}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log('1');
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyD4day7xq43MZbXCbH-O8l1umqU1vIYS4o',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
