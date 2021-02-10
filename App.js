/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/index';
import DestinationSearch from './src/screens/DestinationSearch/index';
import SearchResults from './src/screens/SearchResults/index';
// import Icon from 'react-native-vector-icons/AntDesign';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
      {/* <SearchResults /> */}
    </>
  );
};

export default App;
