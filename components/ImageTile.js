import React, { Component, createFactory } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { toggleFavorite } from "../services/api/imgurApi";
import Loader from "./Loader";

class ImageTile extends Component {
	state = { isLoading: true, hauteur: 0 };

	constructor(props) {
		super(props);
		this.toggleFav = this.toggleFav.bind(this);
	}

	componentDidMount() {
		this.setState({ isLoading: false });

		const win = Dimensions.get("window");
		const facteur =
			Math.round((win.width / this.props.imageWidth) * 100) / 100;

		if (facteur === NaN || this.props.imageHeight === undefined) {
			this.setState({ hauteur: 100 });
		} else {
			const haut = Math.round(facteur * parseInt(this.props.imageHeight));
			this.setState({ hauteur: haut });
		}

		// console.log("image ID ", this.props.imageKey);
		// console.log("Access Token ", this.props.accessToken);
	}

	async toggleFav(_id) {
		this.setState({ isLoading: true });
		const toog = await toggleFavorite(_id, this.props.accessToken);

		if (toog.success) {
			console.log("Toggle " + _id + " - " + toog.data);
		}
		this.setState({ isLoading: false });
	}

	render() {
		if (this.state.isLoading) {
			return <Loader />;
		} else {
			return (
				<View style={styles.container} key={this.props.imageKey}>
					<View
						style={{
							flexDirection: "row",
							width: "100%",
							backgroundColor: "#8aa1b5"
						}}
					>
						<Text style={styles.imageTitle}>
							{this.props.imageTitle}
						</Text>
						<TouchableOpacity
							onPress={() => this.toggleFav(this.props.imageKey)}
							style={styles.coeur}
						>
							<Icon
								name={
									this.props.imageFavorite
										? "favorite"
										: "favorite-border"
								}
								color={
									this.props.imageFavorite ? "#f00" : "#ccc"
								}
							/>
						</TouchableOpacity>
					</View>
					{/* <Text>{this.props.imageSource}</Text> */}
					<Image
						source={{ uri: this.props.imageSource }}
						style={{
							// width: 375,
							width: "100%",
							height: this.state.hauteur,
							backgroundColor: "#ccc",
							borderRadius: 0
						}}
					/>
					<Text style={styles.imageDesc}>{this.props.imageDesc}</Text>
				</View>
			);
		}
	}
}
export default ImageTile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		margin: 0,
		marginBottom: 30,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd"
	},
	imageTitle: {
		fontSize: 26,
		fontWeight: "bold",
		margin: 0,
		padding: 10,
		backgroundColor: "#8aa1b5"
	},
	imageDesc: {
		flexDirection: "row",
		width: "100%",
		fontSize: 16,
		padding: 8,
		backgroundColor: "#ddd"
	},
	coeur: {
		marginTop: 14
	}
});
