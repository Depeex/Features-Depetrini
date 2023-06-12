import { Ionicons } from '@expo/vector-icons';
import { requestCameraPermissionsAsync, launchCameraAsync } from 'expo-image-picker';
import React, { useState } from 'react';
import { View, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { Card } from '../../components/index';
import { theme } from '../../constants';
import { setInput } from '../../store/actions';
const User = ({ navigation }) => {
  const input = useSelector((state) => state.input.inputValue);
  const dispatch = useDispatch();
  const onHandlerReset = () => {
    dispatch(setInput(''));
    navigation.reset({
      index: 0,
      routes: [{ name: 'ShopTab' }],
    });
  };
  const [pickedUrl, setPickedUrl] = useState(null);
  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso no otorgado', 'Se necesita habilitar el permiso', [{ text: 'Ok' }]);
      return false;
    }
    return true;
  };
  const onHandleTakeImage = async () => {
    const isCameraAvailable = await verifyPermissions();
    if (!isCameraAvailable) return;
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    setPickedUrl(image.uri);
  };
  return (
    <View style={styles.container}>
      <Card style={styles.cardIdentification}>
        <Text style={styles.userName}>
          {input ? `Nombre: ${input}` : 'Nombre: Campo Incompleto'}
        </Text>
        <Text style={styles.userAge}>Edad: Campo Incompleto</Text>
        <Text style={styles.userBiography}>Biografia: Campo Incompleto</Text>
        <TouchableOpacity onPress={onHandleTakeImage} style={styles.userImageContainer}>
          <Text style={styles.userImage}>Foto de perfil: </Text>
          <Ionicons name="camera" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.principalContainer}>
          <View style={styles.imageContainer}>
            {!pickedUrl ? (
              <Text>No tienes foto de usuario aun</Text>
            ) : (
              <Image style={styles.image} source={{ uri: pickedUrl }} />
            )}
          </View>
        </View>
      </Card>
      <View style={styles.buttonContainer}>
        <Button
          title="Reset information"
          color={theme.colors.brown}
          onPress={onHandlerReset}
          disabled={!input}
        />
      </View>
    </View>
  );
};

export default User;
