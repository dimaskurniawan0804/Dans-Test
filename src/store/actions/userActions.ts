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
        return dispatch(updateLoginState({ isLogin: true }));
      }
    } catch (error) {
      return dispatch(updateLoginState({ isLogin: false }));
    }
  };
}
