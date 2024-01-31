import React from "react";
import SideNav from "../../../components/admin-components/SideNav";
import { menus } from "../../../utils/Constants";
// import "../../../components/admin-components/sideNav.css";

const PageWrapper = ({ children }) => {
	return (
		<div className="sidebar-container-main">
			<div className="bg-danger">
				<div className="">
					<SideNav navMenus={menus} />
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default PageWrapper;
