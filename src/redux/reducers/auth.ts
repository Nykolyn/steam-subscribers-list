import { createSlice } from '@reduxjs/toolkit';

type TAuthState = {
  token?: string;
};

const initialState: TAuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
});

export default authSlice;
