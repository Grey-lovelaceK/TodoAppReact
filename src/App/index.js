import { TodoProvider } from '../newContext';
import { AppUi } from './AppUi';
import React from 'react';


function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;