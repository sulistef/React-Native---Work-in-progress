import React from "react";
import {
	createAppContainer,
	createSwitchNavigator,
	createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import Splash from "../components/Splash";
import imgurLogin from "../components/imgurLogin";
import UserHome from "../services/containers/home";

export default createAppContainer(
	createSwitchNavigator({
		// You could add another route here for authentication.
		// Read more at https://reactnavigation.org/docs/en/auth-flow.html
		Splash: Splash,
		UserHome: UserHome,
		imgurLogin: imgurLogin,
		Main: MainTabNavigator
	})
);
