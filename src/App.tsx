import React from 'react';
import Routes from './routes/root.routes';
import SafeAreaView from './shared/components/SafeAreaView';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './shared/store';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <ReduxProvider store={store}>
      <SafeAreaView backgroundColor="#FFF" flex={1}>
        <Routes />
      </SafeAreaView>
      <Toast />
    </ReduxProvider>
  );
}

export default App;
