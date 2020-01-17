import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

class Splash extends React.Component {
	static navigationOptions = {
		title: "Welcome"
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.splashscr}>
				<View style={styles.splashbox1}>
					<Text style={styles.splashtxt}>Welcome to</Text>
					<Text style={styles.splashtit}>ePicture</Text>
				</View>
				<View style={styles.splashbox2}>
					<Button
						style={styles.splashbtn}
						title="Continue ..."
						onPress={() => navigate("imgurLogin")}
					/>
				</View>
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

export default Splash;
