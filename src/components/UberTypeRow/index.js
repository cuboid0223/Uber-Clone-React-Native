import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const UberTypeRow = ({type}) => {
  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
    return require('../../assets/images/UberXL.jpeg');
  };

  return (
    <View style={styles.container}>
      {/* img */}
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM 到達</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={12} color="#42d742" />
        <Text style={styles.price}>估計 ${type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
