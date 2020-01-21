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

export function getUserAvatar(_username, _accessToken) {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer " + _accessToken);

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow"
	};

	return fetch(
		"https://api.imgur.com/3/account/" + _username + "/avatar",
		requestOptions
	)
		.then(response => response.json())
		.catch(error => {
			console.error("error", error);
		});
}

export function getUserImages(_username) {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Client-ID " + CLIENT_ID);

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow"
	};

	return fetch(
		"https://api.imgur.com/3/account/" + _username + "/submissions/",
		requestOptions
	)
		.then(response => response.json())
		.catch(error => {
			console.error("error", error);
		});
}

export function toggleFavorite(_id, _accessToken) {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer " + _accessToken);

	var formdata = new FormData();

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: formdata,
		redirect: "follow"
	};

	return fetch(
		"https://api.imgur.com/3/image/" + _id + "/favorite",
		requestOptions
	)
		.then(response => response.json())
		.catch(error => console.log("error", error));
}

export function searchImgur(_param) {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Client-ID " + CLIENT_ID);

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow"
	};

	return fetch(
		"https://api.imgur.com/3/gallery/viral/top/1/search?q=" + _param,
		requestOptions
	)
		.then(response => response.json())
		.catch(error => console.log("error", error));
}
