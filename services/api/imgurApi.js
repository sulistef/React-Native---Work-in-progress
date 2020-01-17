import React from "react";
import { CLIENT_ID } from "../../constants/consts";

export function AuthorizeProfileFromApi() {
	return fetch(
		"https://api.imgur.com/oauth2/authorize?client_id=" +
			CLIENT_ID +
			"&response_type=token&state=OK"
	)
		.then(response => response.text())
		.catch(error => {
			console.error("error", error);
		});
}

export function getProfileFromApi(username) {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Client-ID " + CLIENT_ID);

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow"
	};

	return fetch("https://api.imgur.com/3/account/" + username, requestOptions)
		.then(response => response.json())
		.catch(error => {
			console.error("error", error);
		});
}
