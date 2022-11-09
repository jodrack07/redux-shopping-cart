import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async (_, thunkAPI) => {
        try {
            const response = await axios(url)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Nework error...');
        }
    }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return { ...state, cartItems: [] };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, { payload }) => {
      // get the item to deal with
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      // increase the amount of the item
      ++cartItem.amount;
    },
    decreaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      --cartItem.amount;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      //   state.total = Math.round(total);
      //   state.total = Math.round((total + Number.EPSILON) * 100) / 100
      state.total = +(Math.round(total + 'e+2') + 'e-2');
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default cartSlice.reducer;
export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotals,
} = cartSlice.actions;
