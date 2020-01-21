import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import HomeGreets from "./HomeGreets";
import HomeSearch from "./HomeSearch";
import HomeMyPics from "./HomeMyPics";
import styl from "../styles/styles";

var navigationOptions = {
	title: "UserHome"
};

const UserHome = ({ userId, userName, accessToken }) => (
	<View style={{ backgroundColor: "##5cc9f5", flex: 1 }}>
		<View style={{ height: 100 }}>
			<HomeGreets
				userName={userName.userName}
				userId={userId.userId}
				accessToken={accessToken.accessToken}
			/>
		</View>
		<View style={{ height: 70 }}>
			<HomeSearch />
		</View>

		<View style={{ flex: 4, backgroundColor: "#5cc9f5" }}>
			<HomeMyPics
				userName={userName.userName}
				userId={userId.userId}
				accessToken={accessToken.accessToken}
			/>
		</View>
		{/* {console.log("props", props)} */}
	</View>
);

const styles = StyleSheet.create(styl);

export default UserHome;
