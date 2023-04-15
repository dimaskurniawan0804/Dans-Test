import { LOGIN_USER, REGISTER_USER } from "../actions/actionType";

const userState = {
  isLogin: false,
  isSuccessRegister: false,
};

export function userReducer(state = userState, action: any) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    case REGISTER_USER:
      return {
        ...state,
        isSuccessRegister: action.payload.isSuccessRegister,
      };
    default:
      return state;
  }
}
