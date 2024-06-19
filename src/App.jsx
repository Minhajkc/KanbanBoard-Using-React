import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Nav from './Components/Nav';
import Input from './Components/Input';
import Maindiv from './Components/Maindiv';
import Edittaskcom from './Components/Edittaskcom';
import { Store, persistor } from './Components/Redux/Store';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Nav />
        {showModal ? (
          <Edittaskcom showModal={showModal} setShowModal={setShowModal} value={value} />
        ) : null}
        <Input />
        <Maindiv showModal={showModal} setShowModal={setShowModal} value={value} setValue={setValue} />
      </PersistGate>
    </Provider>
  );
}

export default App;
