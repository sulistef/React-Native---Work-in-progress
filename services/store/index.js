import { createStore } from "redux";
import rootReducer from "../reducers/index";

// const rootReducer = () => {};
var store = createStore(rootReducer);
export default store;
