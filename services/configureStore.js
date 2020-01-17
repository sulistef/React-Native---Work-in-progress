// import { createStore } from "redux";
// import { setUserName } from "./reducers/userReducer";

// export default createStore(setUserName);

import { createStore } from "redux";
import { setUserName } from "./reducers/userReducer";

export default function configureStore(initialState) {
	return createStore(setUserName => [], {});
}
