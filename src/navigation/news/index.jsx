import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../../constants';
import { News } from '../../screens/index';
const Stack = createStackNavigator();

const NewsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.brown,
        },
      }}>
      <Stack.Screen name="Novedades" component={News} />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
