import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, TabParamList} from './types';
import Login from './modules/Auth/screens/Login';
import Register from './modules/Auth/screens/Register';
import Home from './modules/Home/screens/Home';
import Trade from './modules/Wallet/screens/Trade';
import Portfolio from './modules/Wallet/screens/Portfolio';
import AssetDetails from './modules/Asset/screens/AssetDetails';

function Routes() {
  const isLogged = true;
  const Tab = createBottomTabNavigator<TabParamList>();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      {!isLogged && (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={<Login />} />
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
