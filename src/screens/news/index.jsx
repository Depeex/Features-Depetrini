import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/index';
const News = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.textContainer}>
        <Text style={styles.maintenance}>
          En esta sección pronto encontraras novedades acerca de nuestra tienda y te enterarás antes
          que todos acerca de futuros cambios de nuestra tienda !
        </Text>
      </Card>
    </View>
  );
};

export default News;
