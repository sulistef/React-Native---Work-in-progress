import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import ImagePicker from "react-native-image-picker";

class AddImage extends Component {
	constructor(props) {
		super(props);
		this.choosePhoto = this.choosePhoto.bind(this);
	}

	choosePhoto = () => {
		// const options = {};
		// ImagePicker.launchImageLibrary(options, response => {
		// 	console.log("response", response);
		// });
	};

	render() {
		return (
			<TouchableOpacity
				style={styles.container}
				onPress={this.choosePhoto}
			>
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
