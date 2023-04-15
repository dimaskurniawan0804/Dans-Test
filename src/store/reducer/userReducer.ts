import { LOGIN_USER } from "../actions/actionType";

const userState = {
  isLogin: false,
};

export function userReducer(state = userState, action: any) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
}
