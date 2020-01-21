import React, { Component } from "react";
import { CLIENT_ID } from "../constants/consts";
import { Button, View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
// import {
// 	addAccessToken,
// 	addUserName,
// 	addUserId
// } from "../services/actions/actions";

class imgurLogin extends Component {
	static navigationOptions = {
		title: "imgurLogin"
	};

	state = { accessToken: "", userId: "", userName: "", refresh: "" };

	// listen to the webview page change to detect the Auth token
	_onNavigationStateChange(webViewState) {
		var url = webViewState.url;
		console.log("url", url);

		// test if auth token
		var n = url.indexOf("access_token=");

		if (n > -1) {
			// if auth token, get user params
			const accessToken = this.paramsGetAccessToken(url, "access_token=");
			const userName = this.paramsGetAccessToken(
				url,
				"account_username="
			);
			const userId = this.paramsGetAccessToken(url, "account_id=");

			//update redux store
			this.props.dispatch({ type: "SET_USERID", userId });
			this.props.dispatch({ type: "SET_USERNAME", userName });
			this.props.dispatch({ type: "SET_ACCESSTOKEN", accessToken });
			// this.addUserId(userId);
			// this.addUserName(userName);
			// this.addAccessToken(accessToken);

			//debug
			// console.log("accessToken", accessToken);
			// console.log("userName", userName);
			// console.log("userId", userId);

			if (userId !== "") {
				const { navigate } = this.props.navigation;
				navigate("UserHome");
			}

			// set state to refresh and display the navigate button if auto-navigate didn't work
			this.setState({
				accessToken: accessToken,
				userName: userName,
				userId: userId
			});
		}
	}

	// URL parser to get user details
	paramsGetAccessToken(str, expr) {
		var n = str.indexOf(expr);
		var chaineParams = str.substr(n + expr.length, str.length - n);
		// console.log("chaineParams", chaineParams);
		var chaineEnd = chaineParams.indexOf("&");
		if (chaineEnd > -1) {
			// console.log("chaineEnd", chaineEnd);
			var final = chaineParams.substr(0, chaineEnd);
		} else {
			// console.log("chaineEnd", chaineEnd);
			var final = chaineParams.substr(0, str.length);
		}
		// console.log(chaineParams);
		return final;
	}

	render() {
		const { navigate } = this.props.navigation;
		if (this.state.userId && this.state.userId !== "") {
			return (
				<View style={styles.splashscr}>
					<Text>Sign In complete</Text>
					<Button
						title="Continue"
						onPress={() =>
							navigate("UserHome", {
								userId: this.state.userId,
								userName: this.state.userName,
								accessToken: this.state.accessToken
							})
						}
					/>
				</View>
			);
		} else {
			return (
				// <View style={{ flex: 1, backgroundColor: "#000" }}>
				<WebView
					source={{
						uri:
							"https://api.imgur.com/oauth2/authorize?client_id=" +
							CLIENT_ID +
							"&response_type=token&state=ok"
					}}
					onNavigationStateChange={this._onNavigationStateChange.bind(
						this
					)}
					style={{ marginTop: 50, backgroundColor: "#000" }}
				/>
				// </View>
			);
		}
	}
}

const styles = StyleSheet.create({
	splashscr: {
		flex: 1,
		color: "#fff",
		backgroundColor: "#5cc9f5",
		alignItems: "center",
		justifyContent: "center"
	},
	splashbox1: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	splashbox2: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center"
	},
	splashtxt: {
		marginTop: 150,
		color: "#fff",
		fontSize: 20
	},
	splashtit: {
		color: "#037bfb",
		fontSize: 70
	},
	splashbtn: { marginTop: 150 }
});

export default connect()(imgurLogin);
