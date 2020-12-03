import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "../App";
import Bookmarks from "./Bookmarks";
import Explore from "./Explore";
import Feed from "./Feed";
import Home from "./Home";
import List from "./List";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";

function AllRoutes() {
	return (
		<div>
			<Switch>
                <Route exact path='/' >
                    <Redirect to='/home' ></Redirect>
                </Route>
			    
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/notifications">
					<Notifications />
				</Route>
				<Route path="/feed">
					<Feed />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/messages">
					<Messages />
				</Route>
				<Route path="/lists">
					<List />
				</Route>
				<Route path="/explore">
					<Explore />
				</Route>
				<Route path="/bookmarks">
					<Bookmarks />
				</Route>
			</Switch>
		</div>
	);
}

export default AllRoutes;
