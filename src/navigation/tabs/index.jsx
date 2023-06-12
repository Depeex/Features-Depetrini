import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../../constants';
import NewsNavigator from '../news';
import ShopNavigator from '../shop';
import UserNavigator from '../user';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontFamily: 'Anton-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {
          marginVertical: 5,
          fontSize: 12,
        },
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="NewsTab"
        component={NewsNavigator}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} color={color} size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="UserTab"
        component={UserNavigator}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
