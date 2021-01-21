import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import UberTypeRow from '../../components/UberTypeRow';
import typesData from '../../assets/data/types';

const UberTypes = (props) => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type} />
      ))}
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>確認</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
