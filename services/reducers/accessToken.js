const accessToken = (state = "", action) => {
	switch (action.type) {
		case "SET_ACCESSTOKEN":
			return { accessToken: action.accessToken };

		case "RESET_ACCESSTOKEN":
			return { accessToken: "" };

		default:
			return state;
	}
};

export default accessToken;
