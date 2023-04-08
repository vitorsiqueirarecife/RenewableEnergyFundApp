import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import Login from '../modules/Auth/screens/Login';
import Register from '../modules/Auth/screens/Register';
import AssetDetails from '../modules/Asset/screens/AssetDetails';
import Tabs from './tab.routes';

function Routes() {
  const isLogged = false;
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      {!isLogged && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}

      {isLogged && (
        <Stack.Navigator>
          <Stack.Screen name="Init" component={Tabs} />
          <Stack.Screen name="AssetDetails" component={AssetDetails} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
