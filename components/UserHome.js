import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

class UserHome extends React.Component {
	static navigationOptions = {
		title: "UserHome"
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.splashscr}>
				<Text style={styles.splashtxt}>Welcome Home</Text>
			</View>
		);
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

export default UserHome;
