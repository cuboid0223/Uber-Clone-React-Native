import React from 'react';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import {View, Dimensions} from 'react-native';
import styles from './styles';

const SearchResults = (props) => {
  return (
    <View style={styles.container}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>
      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
