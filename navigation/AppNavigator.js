import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import Splash from "../components/Splash";
import imgurLogin from "../components/imgurLogin";
import UserHome from "../components/UserHome";

export default createAppContainer(
	createSwitchNavigator({
		// You could add another route here for authentication.
		// Read more at https://reactnavigation.org/docs/en/auth-flow.html
		Splash: Splash,
		imgurLogin: imgurLogin,
		UserHome: UserHome,
		Main: MainTabNavigator
	})
);
