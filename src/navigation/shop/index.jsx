import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { Page, StartPage } from '../../screens/index';

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="StartPage">
      <Stack.Screen
        name="StartPage"
        component={StartPage}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Page"
        component={Page}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
