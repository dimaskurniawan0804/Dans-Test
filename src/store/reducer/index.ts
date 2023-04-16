import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { jobReducer } from "./jobReducer";

const reducer = combineReducers({
  user: userReducer,
  job: jobReducer,
});

export default reducer;
