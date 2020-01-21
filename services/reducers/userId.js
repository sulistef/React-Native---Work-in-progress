const userId = (state = "", action) => {
	switch (action.type) {
		case "SET_USERID":
			return { userId: action.userId };

		case "RESET_USERID":
			return { userId: "" };

		default:
			return state;
	}
};

export default userId;
