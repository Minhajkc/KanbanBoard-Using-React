import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';
import mainslicereducer from './Mainslice';


const persistConfig = {
  key: 'root',
  storage,
};


const persistedReducer = persistReducer(persistConfig, mainslicereducer);


const Store = configureStore({
  reducer: {
    boardvalue: persistedReducer,
  },
});


const persistor = persistStore(Store);

export { Store, persistor };
