import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants';
const { height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.brown,
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    marginTop: 50,
    width: '90%',
    height: '27%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title2: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  ticketObtenido: {
    backgroundColor: '#fff',
    marginTop: 40,
    width: '90%',
    height: height * 0.5,
  },
  titleTicket: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  titleTicket1: {
    fontSize: 17,
    fontFamily: 'Anton-Regular',
    marginTop: 10,
    textAlign: 'center',
  },
  titleTicket2: {
    fontSize: 17,
    fontFamily: 'Anton-Regular',
    textAlign: 'center',
  },
  buttonStartPageContainer: {
    marginHorizontal: 57,
    paddingVertical: 10,
    width: '65%',
  },
  image: {
    marginTop: 8,
    marginBottom: 5,
    marginHorizontal: 30,
    width: '80%',
    height: height * 0.25,
  },
});
