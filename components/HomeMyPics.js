import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getUserImages, searchImgur } from "../services/api/imgurApi";
import Loader from "./Loader";
import ImageTile from "./ImageTile";
import AddImage from "./AddImage";

class HomeMyPics extends Component {
	state = {
		pics: "",
		isLoading: true,
		searchType: this.props.searchType,
		toggler: true
	};

	constructor(props) {
		super(props);
		this.getMyPics = this.getMyPics.bind(this);
		this.searchImages = this.searchImages.bind(this);
	}

	componentDidMount() {
		if (this.state.searchType === "user") {
			this.getMyPics();
		} else {
			this.searchImages(this.state.searchType);
		}
	}

	// static async getDerivedStateFromProps(props, state) {
	// 	state.searchType = props.searchType;

	// 	if (props.searchType === "user") {
	// 		getUserImages(props.userName).then(res => {
	// 			state.pics = res.data;
	// 			state.isLoading = false;
	// 		});
	// 	} else {
	// 		searchImgur(props.searchType).then(res => {
	// 			state.pics = res.data;
	// 			state.isLoading = false;
	// 		});
	// 	}

	// 	return state;
	// }

	async getMyPics() {
		this.setState({ isLoading: true });

		const myPics = await getUserImages(this.props.userName);
		// console.log(myPics);

		if (myPics.success) {
			this.setState({ pics: myPics.data, isLoading: false });
		}
	}

	async searchImages(_param) {
		this.setState({ isLoading: true });
		const myPics = await searchImgur(_param);
		// console.log(myPics);

		if (myPics.success) {
			this.setState({ pics: myPics.data, isLoading: false });
		}
	}

	render() {
		if (this.state.isLoading) {
			return <Loader />;
		} else {
			return (
				<View style={{ flex: 1 }}>
					<View
						style={{
							width: "100%",
							alignItems: "center",
							padding: 5
						}}
					>
						<Text
							style={{
								fontSize: 16,
								color: "steelblue"
							}}
						>
							{this.state.searchType !== "user"
								? "Search results for: " + this.state.searchType
								: "My images"}
						</Text>
					</View>
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
