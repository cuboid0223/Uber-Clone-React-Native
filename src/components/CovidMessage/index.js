import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        voluptas porro ipsa nobis? Aliquam ad cupiditate vitae, laborum sit
        mollitia iusto doloremque necessitatibus quidem debitis quam repellendus
        ea dicta nisi.
      </Text>
      <Text style={styles.learnMore}>了解更多</Text>
    </View>
  );
};

export default CovidMessage;
