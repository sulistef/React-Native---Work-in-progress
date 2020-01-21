import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { searchImgur } from "../services/api/imgurApi";

class HomeSearch extends Component {
	state = { search: "" };

	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
	}

	async search() {
		const param = this.state.search;
		console.log(param);
		const results = await searchImgur(param).then(res => {
			console.log(res);
		});
		this.setState({ search: "" });
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="search ..."
					style={{
						borderStyle: "solid",
						borderColor: "orange",
						borderWidth: 1,
						padding: 10,
						borderRadius: 5,
						width: 300,
						backgroundColor: "#fff"
					}}
					onChangeText={search => this.setState({ search })}
					value={this.state.search}
				/>
				<Button title="go" onPress={this.search} />
			</View>
		);
	}
}
export default HomeSearch;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
