import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import { theme } from './constants';
import AppNavigator from './navigation';
import store from './store/index';
export default function App() {
  const [loaded] = useFonts({
    'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
    'Anton-Regular': require('../assets/fonts/Anton-Regular.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.secondary} />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
