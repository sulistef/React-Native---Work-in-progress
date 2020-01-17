import React, { Component } from "react";
import { CLIENT_ID } from "../constants/consts";
import { Button, View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

class imgurLogin extends Component {
	static navigationOptions = {
		title: "imgurLogin"
	};

	// state initialization
	state = { userDetails: {} };

	// listen to the webview page change to detect the Auth token
	_onNavigationStateChange(webViewState) {
		var url = webViewState.url;

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

			// update state with user details
			this.setState({
				userDetails: {
					accessToken: accessToken,
					userName: userName,
					userId: userId
				}
			});
		}

		// const params = new URLSearchParams(url);
	}

	// URL parser to get user details
	paramsGetAccessToken(str, expr) {
		var n = str.indexOf(expr);
		var chaineParams = str.substr(n + expr.length, str.length - n);
		console.log("chaineParams", chaineParams);
		var chaineEnd = chaineParams.indexOf("&");
		if (chaineEnd > -1) {
			console.log("chaineEnd", chaineEnd);
			var final = chaineParams.substr(0, chaineEnd);
		} else {
			console.log("chaineEnd", chaineEnd);
			var final = chaineParams.substr(0, str.length);
		}
		// console.log(chaineParams);
		return final;
	}

	render() {
		const { navigate } = this.props.navigation;
		if (
			this.state.userDetails &&
			this.state.userDetails.userId &&
			this.state.userDetails.userId !== ""
		) {
			return (
				<View style={styles.splashscr}>
					<Text>Sign In complete</Text>
					<Button
						title="Continue"
						onPress={() => navigate("userHome")}
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

export default imgurLogin;
