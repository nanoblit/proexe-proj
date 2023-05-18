import { configureStore, createAsyncThunk, createSlice, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import { FetchStatus, User, UserData, UserState } from "./helpers/types.ts";
import { Dispatch } from "react";

const initialState: UserState = {
  users: [],
  status: FetchStatus.IN_PROGRESS,
};

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async () => {
    const response = await fetch("https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data");
    const data: UserData[] = await response.json();
    const users: User[] = data.map(
      ({ id, name, username, email, address }) => (
        {
          id,
          name,
          username,
          email,
          city: address.city,
        }
      ));
    return users;
  },
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<User, "id">>) => {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = FetchStatus.IN_PROGRESS;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = FetchStatus.SUCCESS;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = FetchStatus.ERROR;
      });
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<any, null | undefined, AnyAction> & Dispatch<AnyAction>;