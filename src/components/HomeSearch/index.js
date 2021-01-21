import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const HomeSearch = (props) => {
  return (
    <View>
      {/* input box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>要去哪裡？</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={`#444545`} />
          <Text>現在</Text>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={16}
            color={`#444545`}
          />
        </View>
      </View>
      {/* previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <FontAwesome name={'star'} color={`white`} size={20} />
        </View>
        <Text style={styles.rowText}>已儲存的地點</Text>
      </View>
      {/* home  */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name={'location-pin'} color={`white`} size={20} />
        </View>
        <Text style={styles.rowText}>在地圖上設定地點</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
