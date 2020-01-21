import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class AddImage extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.container}>
				<View>
					<Text style={styles.bouton}>+</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
export default AddImage;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "rgba(255, 0, 0, 0.8)",
		position: "absolute",
		// marginLeft: 300,
		// marginTop: 560,
		bottom: 14,
		right: 14,
		zIndex: 1000
	},
	bouton: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#fff"
	}
});
