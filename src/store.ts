import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './store/cartSlice'
import favoriteReducer from './store/favoriteSlice'
import { apiSlice } from './store/apiSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
