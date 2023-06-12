import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
  },
  cardIdentification: {
    shadowOpacity: 0.5,
    elevation: 5,
    backgroundColor: '#fff',
    height: '70%',
    width: '90%',
  },
  userName: {
    fontFamily: 'Anton-Regular',
    marginHorizontal: '8%',
    marginTop: 7,
    fontSize: 16,
  },
  userAge: {
    marginHorizontal: '8%',
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 16,
  },
  userBiography: {
    marginHorizontal: '8%',
    marginTop: 7,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  principalContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '70%',
    borderColor: theme.colors.brown,
    borderWidth: 2,

    marginVertical: 10,
  },
  image: { height: '100%', width: '100%' },
  userImageContainer: {
    marginHorizontal: '8%',
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
