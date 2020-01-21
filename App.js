import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Store from "./services/store/index";
import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
	return (
		<Provider store={Store}>
			<AppNavigator />
		</Provider>
	);
}
