import { configureStore, createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import MobileNavSlice from './MobileNav';

const isSerializable = (value) =>
  Iterable.isIterable(value) || isPlain(value)

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})


const store = configureStore({
  reducer: {
    MobileNav: MobileNavSlice,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: getDefaultMiddleware =>  getDefaultMiddleware({
    serializableCheck: false
  }).concat([cryptoNewsApi.middleware, cryptoApi.middleware]),
})


setupListeners(store.dispatch);

export default store;