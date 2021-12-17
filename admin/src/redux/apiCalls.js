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

const TOKEN = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).currentUser
).token;

const AdminToken = {
  headers: { token: `Bearer ${TOKEN}` },
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await axios.get(
      "http://localhost:3000/api/products",
      AdminToken
    );
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await axios.delete(`http://localhost:3000/api/products/${id}`, AdminToken);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await axios.put(
      `http://localhost:3000/api/products/${id}`,
      product,
      AdminToken
    );
    dispatch(updateProductSuccess(id, product));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await axios.post(
      `http://localhost:3000/api/products`,
      product,
      AdminToken
    );
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getMalbecUsers = async (dispatch) => {
  dispatch(getMalbecUsersStart());
  try {
    const res = await axios.get("http://localhost:3000/api/user", AdminToken);

    dispatch(getMalbecUsersSuccess(res.data));
  } catch (err) {
    dispatch(getMalbecUsersFailure());
  }
};

export const deleteMalbecUsers = async (id, dispatch) => {
  dispatch(deleteMalbecUsersStart());
  try {
    await axios.delete(`http://localhost:3000/api/user/${id}`, AdminToken);
    dispatch(deleteMalbecUsersSuccess(id));
  } catch (err) {
    dispatch(deleteMalbecUsersFailure());
  }
};

export const addMalbecUsers = async (user, dispatch) => {
  dispatch(addMalbecUsersStart());
  try {
    const res = await axios.post(
      `http://localhost:3000/api/auth/signup`,
      user,
      AdminToken
    );
    dispatch(addMalbecUsersSuccess(res.data));
  } catch (err) {
    dispatch(addMalbecUsersFailure());
  }
};
