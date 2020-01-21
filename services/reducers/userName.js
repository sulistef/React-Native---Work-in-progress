const userName = (state = "", action) => {
	switch (action.type) {
		case "SET_USERNAME":
			return { userName: action.userName };

		case "RESET_USERNAME":
			return { userName: "" };

		default:
			return state;
	}
};

export default userName;
