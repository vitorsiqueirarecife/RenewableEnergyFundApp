import React from 'react';
import Routes from './routes/root.routes';
import SafeAreaView from './shared/components/SafeAreaView';

function App() {
  return (
    <SafeAreaView flex={1}>
      <Routes />
    </SafeAreaView>
  );
}

export default App;
