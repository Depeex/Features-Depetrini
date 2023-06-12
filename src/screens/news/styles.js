import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.greenSoft,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 15,
    backgroundColor: '#fff',
    height: '20%',
  },
  maintenance: {
    marginHorizontal: 7,
    color: theme.colors.brown,
    fontSize: 18,
    fontFamily: 'Anton-Regular',
  },
});
