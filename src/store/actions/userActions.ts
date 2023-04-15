import { LOGIN_USER } from "./actionType";
import axios from "axios";
const baseUrl = "http://localhost:3000";
import { TLoginData } from "../../types/types";

// export const login

export const updateLoginState = (payload: any) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export function loginUser(payload: TLoginData) {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post(`${baseUrl}/users/login`, payload);

      if (data) {
        localStorage.setItem("access_token", data);
        return dispatch(updateLoginState({ isLogin: true }));
      }
    } catch (error) {
      return dispatch(updateLoginState({ isLogin: false }));
    }
  };
}

export function logout() {
  return async (dispatch: any) => {
    dispatch(updateLoginState({ isLogin: false }));
    localStorage.removeItem("access_token");
  };
}

export function registerUser(payload: TLoginData) {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post(`${baseUrl}/users/register`, payload);

      if (data) {
        dispatch(loginUser(payload));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
