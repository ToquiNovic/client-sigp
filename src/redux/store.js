import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from './features/userSlice';
import tipoIDReducer from './features/TipoIDSlice';
import physicalResourceReducer from './features/physicalResourceSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    tipoID: tipoIDReducer,
    physicalResource: physicalResourceReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
