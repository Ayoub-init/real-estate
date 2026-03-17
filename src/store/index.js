import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from './slices/propertiesSlice';
import favoritesReducer from './slices/favoritesSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
});