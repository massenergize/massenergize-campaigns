import React, { useReducer, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import IncentivesBar from "../../components/admin-components/IncentivesBar";
import { motion as m } from "framer-motion";

const Goal = () => {
	const data = [
		{
			id: 1,
			title: "ENVIRONMENTALLY  FRIENDLY",
			description: "this is just a normal description",
			icon: faLightbulb,
		},
		{
			id: 2,
			title: "ECONOMIC BENEFITS",
			description: "this is just a normal description",
			icon: faLightbulb,
		},
		{
			id: 3,
			title: "COMFORT",
			description: "this is just a normal description",
			icon: faLightbulb,
		},
		{
			id: 4,
			title: "HEALTH & WELLNESS",
			description: "this is just a normal description",
			icon: faLightbulb,
		},
	];

	const initialState = {
		isTemplate: false,
		title: "",
		slogan: "",
		start_date: "",
		end_date: "",
		description: "",
		logo: "",
		fullName: "",
		email: "",
		contact: "",
		profileImage: "",
		tagline: "",
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "SET_FIELD_VALUE":
				return { ...state, [action.field]: action.value };
			default:
				throw new Error(`Unsupported action type: ${action.type}`);
		}
	};

	return (
		<m.div
			initial={{ y: " 10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* <Container className="border-dashed my-4">
				<form>
					<Row>
						<Col>
							<h6>Goals</h6>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Checkbox
								label="Disable the “Goals” section"
								id="isTemplate"
								name="isTemplate"
								valueExtractor={(val) => {
									handleFieldChange("isTemplate", val);
								}}
								size="big"
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<p>
								Set a target number of action completions that you would like to
								track for this campaign
							</p>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Target"
								placeholder="Enter target of campaign here..."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("target", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4 justify-content-end mb-4">
						<Col>
							<Button
								text="Save Changes"
								onSubmit={handleSubmit}
								rounded={false}
							/>
						</Col>
					</Row>
				</form>
			</Container> */}

			<Container className="border-dashed mt-4">
				<Row className="my-4 ">
					<Col>
						<h6>Focus</h6>
					</Col>
				</Row>
				<Row className="my-4 ">
					<Col>
						{data?.map((incentive) => {
							return (
								<div key={incentive?.id} className="my-4 py-2">
									<IncentivesBar data={incentive} />
								</div>
							);
						})}
					</Col>
				</Row>
			</Container>
		</m.div>
	);
};

export default Goal;
