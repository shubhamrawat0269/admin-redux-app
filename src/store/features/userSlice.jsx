import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {
    // it should be reducers not reducer
    addUser(state, { payload }) {
      state.data.push(payload);
    },
    deleteUser(state, { payload }) {
      state.data = state.data.filter((cur, id) => id != payload);
    },
    deleteAllUsers(state) {
      state.data = [];
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, deleteAllUsers } = userSlice.actions;
