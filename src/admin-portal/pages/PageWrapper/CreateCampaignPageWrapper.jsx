import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageWrapper from "./PageWrapper";

const CreateCampaignPageWrapper = ({ children }) => {
	return (
		// <PageWrapper>
		<div className="p-4">
			<Container>
				<Row className="py-4">
					<Col>
						<h5>Create A New Campaign</h5>
					</Col>
				</Row>
				<Row className="pb-4">
					<Col>
						<p className="ustom-letter-spacing-p">
							Campaign creation has been grouped into different sections. You
							are required to complete this{" "}
							<span className="theme-color font-weight-bold">
								“Campaign Information”
							</span>{" "}
							section before you gain access to the other sections{" "}
						</p>
					</Col>
				</Row>
			</Container>
			<div className="mb-4 pb-4">{children}</div>
		</div>
	);
};

export default CreateCampaignPageWrapper;
