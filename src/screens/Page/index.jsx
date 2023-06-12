import React, { useState } from 'react';
import { View, Text, Button, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { Card } from '../../components';
import { theme } from '../../constants';
export const Page = ({ onHandlerStartPage, navigation, route }) => {
  const input = useSelector((state) => state.input.inputValue);
  const randomTicket = (max) => {
    return Math.floor(Math.random() * max);
  };
  const [ticketConfirmed, setTicketConfirmed] = useState(false);

  const TicketObtenido = () =>
    ticketConfirmed ? (
      <Card style={styles.ticketObtenido}>
        <Text style={styles.titleTicket}>Felicidades {input}, estás en la fila!</Text>
        <Text style={styles.titleTicket1}>Tu número en la fila es {randomTicket(200)}</Text>
        <Text style={styles.titleTicket2}>Guarda el ticket para más tarde</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.blogs.es/305b67/2013_04_04_barcode1/450_1000.jpg',
          }}
        />

        <View style={styles.buttonStartPageContainer}>
          <Button
            title="Volver a la pagina principal"
            onPress={() => {
              navigation.goBack();
            }}
            color={theme.colors.orange}
          />
        </View>
      </Card>
    ) : null;
  const onHandlerNoTicket = () => {
    Alert.alert(
      'Lo sentimos',
      'Entendemos que no quieras esperar, pronto dispondremos de más tiempo',
      [{ text: 'Ok', style: 'Cancel' }]
    );
    navigation.goBack();
  };
  const onHandlerConfirm = () => {
    setTicketConfirmed(true);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Hola {input}, </Text>
        <Text style={styles.title2}>
          En este momento nos encontramos en mantenimiento, toma tu ticket, y espera a ser atendido!
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Quiero un Ticket"
            color={theme.colors.primary}
            onPress={onHandlerConfirm}
            disabled={ticketConfirmed === true}
          />
          <Button
            title="No quiero esperar"
            color={theme.colors.orange}
            onPress={onHandlerNoTicket}
            disabled={ticketConfirmed === true}
          />
        </View>
      </Card>
      <TicketObtenido />
    </View>
  );
};

export default Page;
