import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../../constants';
import { User } from '../../screens/index';
const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.orange,
        },
      }}>
      <Stack.Screen name="Informacion de Usuario" component={User} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
