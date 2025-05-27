import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Produto>) {
      const exists = state.items.find((item) => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
      }
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
