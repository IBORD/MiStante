// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favorites/favoritesSlice';
import moviesReducer from '../features/movies/moviesSlice';
import { catalogApi } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;