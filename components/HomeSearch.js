import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { searchImgur } from "../services/api/imgurApi";
import HomeMyPics from "./HomeMyPics";

class HomeSearch extends Component {
	state = { search: "", searchType: "user" };

	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
	}

	search() {
		const param = this.state.search;
		this.setState({ search: "", searchType: param });
	}

	render() {
		return (
			<View style={styles.container}>
				<View
					style={{
						height: 40,
						margin: 10,
						flexDirection: "row"
					}}
				>
					<TextInput
						placeholder="search ..."
						style={{
							borderStyle: "solid",
							borderColor: "orange",
							borderWidth: 1,
							padding: 5,
							borderRadius: 5,
							width: 300,
							backgroundColor: "#fff"
						}}
						onChangeText={search =>
							this.setState({ search: search })
						}
						value={this.state.search}
					/>
					<Button title="go" onPress={this.search} />
				</View>
				<View style={{ flex: 1, width: "100%" }}>
					<HomeMyPics
						userName={this.props.userName}
						userId={this.props.userId}
						accessToken={this.props.accessToken}
						searchType={this.state.searchType}
						key={this.state.searchType}
					/>
				</View>
			</View>
		);
	}
}
export default HomeSearch;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
