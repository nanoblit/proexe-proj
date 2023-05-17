import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./interfaces.ts";

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const nextId = state.users[state.users.length - 1].id + 1;
      state.users.push({ ...action.payload, id: nextId });
    },
    editUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.map(
        user => user.id === action.payload.id ? action.payload : user,
      );
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(
        ({ id }) => id !== action.payload,
      );
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});

export type RootStore = ReturnType<typeof store.getState>