import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Loader extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={{ width: 200, height: 200 }}
					source={require("../assets/loader/elastic.gif")}
				/>
				<Text>Loading ...</Text>
			</View>
		);
	}
}
export default Loader;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
