import axios from "axios";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productReducer";
import { loginStart, loginFailure, loginSuccess } from "./userReducer";
import {
  getMalbecUsersStart,
  getMalbecUsersSuccess,
  getMalbecUsersFailure,
  deleteMalbecUsersStart,
  deleteMalbecUsersSuccess,
  deleteMalbecUsersFailure,
  addMalbecUsersStart,
  addMalbecUsersSuccess,
  addMalbecUsersFailure,
} from "./usersReducer";
import { GET_URL } from "../requestMethods";

const TOKEN = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).currentUser
).token;

const AdminToken = {
  headers: { token: `Bearer ${TOKEN}` },
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${GET_URL}auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get(`${GET_URL}products`, AdminToken);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await axios.delete(`${GET_URL}products/${id}`, AdminToken);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await axios.put(`${GET_URL}products/${id}`, product, AdminToken);
    dispatch(updateProductSuccess(id, product));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await axios.post(`${GET_URL}products`, product, AdminToken);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getMalbecUsers = async (dispatch) => {
  dispatch(getMalbecUsersStart());
  try {
    const res = await axios.get(`${GET_URL}user`, AdminToken);

    dispatch(getMalbecUsersSuccess(res.data));
  } catch (err) {
    dispatch(getMalbecUsersFailure());
  }
};

export const deleteMalbecUsers = async (id, dispatch) => {
  dispatch(deleteMalbecUsersStart());
  try {
    await axios.delete(`${GET_URL}user/${id}`, AdminToken);
    dispatch(deleteMalbecUsersSuccess(id));
  } catch (err) {
    dispatch(deleteMalbecUsersFailure());
  }
};

export const addMalbecUsers = async (user, dispatch) => {
  dispatch(addMalbecUsersStart());
  try {
    const res = await axios.post(`${GET_URL}auth/signup`, user, AdminToken);
    dispatch(addMalbecUsersSuccess(res.data));
  } catch (err) {
    dispatch(addMalbecUsersFailure());
  }
};
