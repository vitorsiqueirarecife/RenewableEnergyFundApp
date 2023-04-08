import React from 'react';
import Routes from './routes/root.routes';
import SafeAreaView from './shared/components/SafeAreaView';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './shared/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <SafeAreaView backgroundColor="#FFF" flex={1}>
        <Routes />
      </SafeAreaView>
    </ReduxProvider>
  );
}

export default App;
