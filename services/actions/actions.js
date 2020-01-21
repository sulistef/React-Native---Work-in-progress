/*
 * action types
 */
export const ADD_ACCESSTOKEN = "ADD_ACCESSTOKEN";
export const ADD_USERID = "ADD_USERID";
export const ADD_USERNAME = "ADD_USERNAME";
/*
 * other constants
 */

/*
 * action creators
 */
export function addAccessToken(_token) {
	return { type: ADD_ACCESSTOKEN, _token };
}

export function addUserId(_userId) {
	return { type: ADD_USERID, _userId };
}

export function addUserName(_userName) {
	return { type: ADD_USERNAME, _userName };
}
