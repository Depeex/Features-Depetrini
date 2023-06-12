import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '50%',
    marginTop: 50,
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: theme.colors.brown,
    fontFamily: 'LilitaOne-Regular',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    backgroundColor: '#fff',
  },
  input: {
    paddingLeft: 6,
    width: '70%',
  },

  confirmedContainer: {
    backgroundColor: theme.colors.brown,
    marginVertical: 30,
    width: '90%',
  },
  confirmedTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 1,
  },
  nextTitle: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    width: '70%',
    marginHorizontal: 50,
    marginBottom: 7,
  },
});
