import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
// import logger from "./middleware/logger";

let store = createStore(reducer, applyMiddleware(thunk));

export default store;
