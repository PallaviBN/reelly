import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  uid: null as null | string,
  email: null as null | string,
  displayName: null as null | string,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser: (state, { payload }) => {
      return payload;
    },
    removeUser: (state, { payload }) => {
      return initialUserState;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state: any) => state.userData;
