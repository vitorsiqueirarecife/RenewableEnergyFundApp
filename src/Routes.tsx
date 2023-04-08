import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './modules/Home/Screens/Home';
import {RootStackParamList, TabParamList} from './types';
import Auth from './modules/Auth/Screens/Auth/Auth';
import Register from './modules/Auth/Screens/Register/Register';
import Portfolio from './modules/Wallet/Screens/Portfolio';
import Trade from './modules/Wallet/Screens/Trade';
import AssetDetails from './modules/Asset/Screens/AssetDetails';

function Routes() {
  const isLogged = true;
  const Tab = createBottomTabNavigator<TabParamList>();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      {!isLogged && (
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={<Auth />} />
          <Stack.Screen name="Register" component={<Register />} />
        </Stack.Navigator>
      )}

      {isLogged && (
        <Stack.Navigator>
          <Stack.Screen
            name="Init"
            component={
              <Tab.Navigator>
                <Tab.Screen name="Home" component={<Home />} />
                <Tab.Screen name="Trade" component={<Trade />} />
                <Tab.Screen name="Portfolio" component={<Portfolio />} />
              </Tab.Navigator>
            }
          />
          <Stack.Screen name="AssetDetails" component={<AssetDetails />} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
