import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from './types';
import Explore from '../modules/Home/screens/Explore';
import Trade from '../modules/Wallet/screens/Trade';
import Portfolio from '../modules/Wallet/screens/Portfolio';
import {Icon} from '../shared/components/Icon';
import {IconProps} from './types';

function Tabs() {
  const Tab = createBottomTabNavigator<TabParamList>();

  const homeIcon = useCallback(
    ({color}: IconProps) => <Icon size="large" color={color} name={'home'} />,
    [],
  );

  const tradeIcon = useCallback(
    ({color}: IconProps) => (
      <Icon size="large" color={color} name={'swap-horizontal'} />
    ),
    [],
  );

  const portfolioIcon = useCallback(
    ({color}: IconProps) => (
      <Icon size="large" color={color} name={'chart-donut'} />
    ),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#770FDF',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          paddingTop: 15,
          height: 81,
        },
        tabBarLabelStyle: {
          height: 40,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Explore}
        options={{
          tabBarIcon: homeIcon,
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: tradeIcon,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: portfolioIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
