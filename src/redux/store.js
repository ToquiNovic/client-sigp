import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./features/userSlice";
import tipoIDReducer from "./features/TipoIDSlice";
import physicalResourceReducer from "./features/physicalResourceSlice";
import reservationCartReducer from "./features/reservationCartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducerUser = persistReducer(persistConfig, userReducer);

const persistedReducerCart = persistReducer(
  { key: "cart", storage },
  reservationCartReducer
);

export const store = configureStore({
  reducer: {
    user: persistedReducerUser,
    cart: persistedReducerCart,
    tipoID: tipoIDReducer,
    physicalResource: physicalResourceReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
