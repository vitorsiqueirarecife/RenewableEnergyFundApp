import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import Login from '../modules/Auth/screens/Login';
import Register from '../modules/Auth/screens/Register';
import AssetDetails from '../modules/Asset/screens/AssetDetails';
import Tabs from './tab.routes';
import {useSelector} from 'react-redux';
import {RootState} from '../shared/store';

function Routes() {
  const session = useSelector((state: RootState) => state.auth.Session);
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {session && (
          <>
            <Stack.Screen name="Init" component={Tabs} />
            <Stack.Screen name="AssetDetails" component={AssetDetails} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
