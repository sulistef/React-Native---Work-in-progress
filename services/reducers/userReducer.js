const initialState = { userName: "" };

export default function setUserName(state = initialState, action) {
	let nextState;
	switch (action.type) {
		case "SET_USERNAME":
			nextState = {
				...state,
				userName: [...state.userName, action.value]
			};
			return nextState;

		case "RESET_USERNAME":
			nextState = {
				...state,
				userName: [...state.userName, ""]
			};
			return nextState;

		default:
			return state;
	}
}
