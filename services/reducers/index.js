// combine reducers

import { combineReducers } from "redux";
import accessToken from "./accessToken";
import userId from "./userId";
import userName from "./userName";
// import { userReducer } from "./userReducer";
// import { favoriteReducer } from "./favoriteReducer";

const allReducers = combineReducers({
	accessToken,
	userId,
	userName
});

export default allReducers;
