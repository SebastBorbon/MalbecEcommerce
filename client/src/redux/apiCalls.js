import axios from "axios";
import { loginStart, loginFailure, loginSuccess } from "./userReducer";
import { GET_URL } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${GET_URL}auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
