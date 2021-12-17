import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    malbecUsers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all
    getMalbecUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMalbecUsersSuccess: (state, action) => {
      state.malbecUsers = action.payload;
      state.isFetching = false;
    },
    getMalbecUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //delete
    deleteMalbecUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteMalbecUsersSuccess: (state, action) => {
      state.malbecUsers.splice(
        state.malbecUsers.findIndex((item) => item._id === action.payload),
        1
      );
      state.isFetching = false;
    },
    deleteMalbecUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //update
    updateMalbecUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateMalbecUsersSuccess: (state, action) => {
      state.malbecUsers[
        state.malbecUsers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.users;
      state.isFetching = false;
    },
    updateMalbecUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //add
    addMalbecUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addMalbecUsersSuccess: (state, action) => {
      state.malbecUsers.push(action.payload);
      state.isFetching = false;
    },
    addMalbecUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getMalbecUsersStart,
  getMalbecUsersSuccess,
  getMalbecUsersFailure,
  deleteMalbecUsersStart,
  deleteMalbecUsersSuccess,
  deleteMalbecUsersFailure,
  addMalbecUsersStart,
  addMalbecUsersSuccess,
  addMalbecUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;
