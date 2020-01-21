import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { addUserName } from "../services/actions/actions";
import { getUserAvatar } from "../services/api/imgurApi";

class HomeGreets extends Component {
	state = {
		avatar: "",
		refresh: ""
	};

	constructor(props) {
		super(props);
		this.getAvatar();
	}

	async getAvatar() {
		await getUserAvatar(this.props.userName, this.props.accessToken).then(
			myPics => {
				if (myPics.success) {
					this.setState({ avatar: myPics.data.avatar });
				}
			}
		);
	}

	render() {
		const imageSource = this.state.avatar;
		console.log("imageSource", imageSource);

		return (
			<View style={styles.container}>
				<Image
					source={{ uri: imageSource }}
					style={{
						width: 40,
						height: 40,
						marginRight: 0,
						borderRadius: 5,
						marginRight: 8
					}}
				/>
				<Text style={{ fontSize: 30, fontWeight: "bold" }}>
					Welcome {this.props.userName}
				</Text>
			</View>
		);
	}
}
export default HomeGreets;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "steelblue",
		paddingTop: 33
	}
});
