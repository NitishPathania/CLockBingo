import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cartItems:[]
}
export const cartSlice=createSlice({
    name: 'data',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
    if (!existingItem) {
          // If the item doesn't exist, add it to the cart
          state.cartItems.push(newItem);
      }
  },
  deleteCart(state, action) {
    const itemIdToDelete = action.payload;
    // Find the index of the item to delete
    const indexToDelete = state.cartItems.findIndex(item => item.id === itemIdToDelete);
    if (indexToDelete !== -1) {
      // If the item exists in the cart, remove it
      state.cartItems.splice(indexToDelete, 1);
    }
  }

}
})
export const { addToCart,deleteCart } = cartSlice.actions;

export default cartSlice.reducer;