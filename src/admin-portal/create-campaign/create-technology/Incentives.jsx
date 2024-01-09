import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../assets/styles/admin-styles.scss";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Input from "../../../components/admin-components/Input";
import Button from "../../../components/admin-components/Button";
import IncentivesBar from "../../../components/admin-components/IncentivesBar";
import IconPicker from "../../../components/admin-components/IconPicker";

const Incentives = () => {
	const data = [
		{
			id: 1,
			title: "ENVIRONMENTALLY  FRIENDLY",
			description: "this is just a normal description",
			icon: '',
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
		technology_id: "",
		title: "",
		description: "",
		image: "",
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "SET_FIELD_VALUE":
				return { ...state, [action.field]: action.value };
			default:
				throw new Error(`Unsupported action type: ${action.type}`);
		}
	};

	const [formData, dispatch] = useReducer(reducer, initialState);

	const handleFieldChange = (field, value) => {
		dispatch({ type: "SET_FIELD_VALUE", field, value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
	};

	// https://691733fdd2482845e4c748c07bf195ae.serveo.net/

	return (
		<div>
			<Container>
				<Row className="mt-4">
					<Col className="mt-4">
						<p>What are the incentives for participating in this technology</p>
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

			<Container>
				<Row className="mt-4 pt-4">
					<Col className="mt-4 pt-4">
						<h5 className="theme-color">Create A New Incentive</h5>
						<p className="my-4">
							Please include details of the new Coach of this technology
						</p>
					</Col>
				</Row>
				<form>
					<Row className="py-4">
						<Col>
							<Input
								label="Title"
								placeholder="Enter title here..."
								required={true}
								type="textbox"
								onChange={(val) => {
									// handleFieldChange("name", val);
									// setFormData({ ...formData, title: val });
								}}
								value={data?.title}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Description"
								placeholder="Add a more description for this incentive..."
								required={false}
								type="textarea"
								onChange={(val) => {
									// handleFieldChange("name", val);
								}}
								value={data?.description}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<p>Pick an Icon</p>
							<IconPicker />
						</Col>
					</Row>
					<Row className="py-4 justify-content-end">
						<Col>
							<Button text="Submit" onSubmit={handleSubmit} rounded={false} />
						</Col>
					</Row>
				</form>
			</Container>
		</div>
	);
};

export default Incentives;
