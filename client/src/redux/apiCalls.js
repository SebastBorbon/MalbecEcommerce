import axios from "axios";
import { loginStart, loginFailure, loginSuccess, logOut } from "./userReducer";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logOut = (dispatch) => {
  dispatch(logOut());
};
