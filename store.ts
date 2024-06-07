import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '@/feature/cart/cartSlice';
import counterReducer from '@/feature/counter';
import userReducer from '@/feature/user/userSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
