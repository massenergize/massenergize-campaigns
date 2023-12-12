import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageWrapper from "./PageWrapper";
import CampaignStatsPopup from "../../../components/admin-components/CampaignStatsPopup";

const CreateTechnologyPageWrapper = ({ children }) => {
	return (
		// <PageWrapper>
		<div className="p-4">
			<Container>
				<Row className="py-4">
					<Col>
						<h5>Create A New TECHNOLOGY</h5>
					</Col>
				</Row>
				<Row className="pb-4">
					<Col>
						<p className="ustom-letter-spacing-p">
							Campaign creation has been grouped into different sections. You
							are required to complete this
							<span className="theme-color font-weight-bold">
								“Technology Information”
							</span>{" "}
							section before you gain access to the other sections
						</p>
					</Col>
				</Row>
			</Container>
			<div>{/* <CampaignStatsPopup /> */}</div>
			<div className="mb-4 pb-4">{children}</div>
		</div>
	);
};

export default CreateTechnologyPageWrapper;
