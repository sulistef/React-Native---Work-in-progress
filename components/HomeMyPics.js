import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getUserImages } from "../services/api/imgurApi";
import Loader from "./Loader";
import ImageTile from "./ImageTile";
import AddImage from "./AddImage";

class HomeMyPics extends Component {
	state = { pics: "", isLoading: true };

	constructor(props) {
		super(props);

		this.getMyPics();
	}

	async getMyPics() {
		const myPics = await getUserImages(this.props.userName);
		console.log(myPics);

		if (myPics.success) {
			this.setState({ pics: myPics.data });
			this.setState({ isLoading: false });
		}
	}

	render() {
		if (this.state.isLoading) {
			return <Loader />;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
						{this.state.pics.map(pic => {
							if (pic.is_album) {
								// console.log(pic.images[0].link);
								return pic.images.map(imag => (
									<View key={imag.id}>
										<ImageTile
											accessToken={this.props.accessToken}
											imageKey={pic.id}
											imageTitle={pic.title}
											imageSource={imag.link}
											imageDesc={imag.description}
											imageWidth={imag.width}
											imageHeight={imag.height}
											imageFavorite={imag.favorite}
										/>
									</View>
								));
							} else {
								return (
									<View key={pic.id}>
										<ImageTile
											accessToken={this.props.accessToken}
											imageKey={pic.id}
											imageTitle={pic.title}
											imageSource={pic.link}
											imageDesc={pic.description}
											imageWidth={pic.width}
											imageHeight={pic.height}
											imageFavorite={pic.favorite}
										/>
									</View>
								);
							}
						})}
					</ScrollView>
					<AddImage />
				</View>
			);
		}
	}
}
export default HomeMyPics;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center"
	}
});
