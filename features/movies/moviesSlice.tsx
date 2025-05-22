import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Movie {
    id: string
    title: string
    posterUrl: string
}

interface MoviesState {
    list: Movie[]
    loading: boolean
}
const initialState: MoviesState = {
    list: [],
    loading: false,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchStart(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<Movie[]>) {
            state.list = action.payload
            state.loading = false
        },
        fetchFailure(state) {
            state.loading = false
        },
    },
})

export const { fetchStart, fetchSuccess, fetchFailure } = moviesSlice.actions
export default moviesSlice.reducer
