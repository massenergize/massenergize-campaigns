import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../user-portal/pages/landing-page/LandingPage";
import AllComponents from "../admin-portal/pages/AllComponents";

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/home" element={<p> This is the HOMEPAGE</p>} />
			<Route path="/components" element={<AllComponents />} />
		</Routes>
	);
}

export default AppRouter;
