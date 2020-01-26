import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import HomeGreets from "./HomeGreets";
import HomeSearch from "./HomeSearch";
import styl from "../styles/styles";

var navigationOptions = {
	title: "UserHome"
};

class UserHome extends React.Component {
	state = {
		userId: this.props.navigation.state.params.userId,
		userName: this.props.navigation.state.params.userName,
		accessToken: this.props.navigation.state.params.accessToken
	};

	constructor(props) {
		super(props);
	}

	// ({ userId, userName, accessToken }) => {

	render() {
		return (
			<View style={{ backgroundColor: "##5cc9f5", flex: 1 }}>
				<View style={{ height: 100 }}>
					<HomeGreets
						userName={this.state.userName}
						userId={this.state.userId}
						accessToken={this.state.accessToken}
					/>
				</View>
				<View style={{ flex: 1, backgroundColor: "#fff" }}>
					<HomeSearch
						userName={this.state.userName}
						userId={this.state.userId}
						accessToken={this.state.accessToken}
						searchType={"user"}
					/>
				</View>
			</View>
		);
	}
}

export default UserHome;
