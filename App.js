import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Hrs from './src/Hrs';
import {configureStore} from './src/store/store';
import {Provider as ReduxProvider} from 'react-redux';

const store = configureStore();
const App = () => {
  return (
      <ReduxProvider store={store}>
          <PaperProvider >
            <Hrs/>
          </PaperProvider>
      </ReduxProvider>
  );
};

export default App;
