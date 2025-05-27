import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

interface FavoriteState {
  items: Produto[]
}

const initialState: FavoriteState = {
  items: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Produto>) {
      const exists = state.items.find((item) => item.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { toggleFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
