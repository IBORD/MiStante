import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoritesSlice'
import moviesReducer    from '../features/movies/moviesSlice'

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        movies:    moviesReducer,
    },
})

export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
