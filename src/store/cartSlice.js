import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.items.push(action.payload)
        state.isOpen = true
      },
      prepare(dish) {
        return {
          payload: {
            ...dish,
            cartId: crypto.randomUUID(),
          },
        }
      },
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.cartId !== action.payload)
    },
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
  },
})

export const selectCartItems = (state) => state.cart.items
export const selectCartIsOpen = (state) => state.cart.isOpen
export const selectCartQuantity = (state) => state.cart.items.length
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.priceValue, 0)

export const { addItem, closeCart, openCart, removeItem } = cartSlice.actions

export default cartSlice.reducer
