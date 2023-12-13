import { Col, Row } from "react-bootstrap";
import { SWRConfig } from "swr";
import { fetchData } from "../helpers/utils/http";

import { useNavigate } from "react-router-dom";
import { Sidebar } from "@kehillahglobal/ui";

import { SIDE_BAR_MENU } from "../layout-components/sidebarMenu";
import { useState } from "react";
import classes from "classnames";

interface AdminLayoutProps {
	children: React.ReactNode;
}

export function AdminLayout(props: AdminLayoutProps) {
	const { children } = props;
	const [shrink, setShrink] = useState(true);

	const navigate = useNavigate();

	const userInfo = {};
	return (
		<SWRConfig value={{ dedupingInterval: 500000, fetcher: fetchData }}>
			<Row>
				<Col md={"auto"} className={classes(" side-bar-container", {shrink})}>
					<Sidebar
						header={"Kehillah Global"}
						menu={SIDE_BAR_MENU}
						bottomMenu={[]}
						userDetails={userInfo}
						dark={true}
						onTabItemClick={(e, { link, name }) => {
							navigate(link);
						}}
						onShrinkBtnClick={(data) => {
							console.log("Shrink button clicked", data);
						}}
						onStateChange={({ shrink }) => {
							setShrink(shrink);
						}}
					/>
				</Col>
				<Col>{children}</Col>
			</Row>
		</SWRConfig>
	);
}
