import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "../../adminStyles.css";
import Dropdown from "../../../components/admin-components/Dropdown";
import { useNavigate } from "react-router-dom";
import Chip from "../../../components/admin-components/Chip";

const Coaches = ({setTechnologyInfo, technologyInfo,setCurrentTab }) => {
	const navigate = useNavigate();

	const opts = [
		{
			id: 1,
			first_name: "Brad",
			last_name: "Brad",
		},
		{
			id: 2,
			first_name: "Tahiru",
			last_name: "Tahiru",
		},
		{
			id: 3,
			first_name: "Sam",
			last_name: "Sam",
		},
		{
			id: 4,
			first_name: "Cobbie",
			last_name: "Cobbie",
		},
		{
			id: 5,
			first_name: "Frimps",
			last_name: "Frimps",
		},
	];

	const handleRemove = (data) => {
		console.log(data);
	};

	const initialState = {
		technology_id: "",
		full_name: "",
		community: "",
		image: "",
		phone_number: "",
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

	const handleCoachAdd = async (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>

			<Container>
				<form >
					<Row>
						<Col>
							<h5 className="theme-color">Create A New Coach</h5>
							<p className="my-4">
								Please include details of the new Coach of this technology
							</p>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Full Name"
								placeholder="Enter full name here..."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("full_name", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Email / Contact"
								placeholder="Enter email here..."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("phone_number", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Community"
								placeholder="Enter the community of the coach here..."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("community", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<FileUploader
								required={false}
								id="coach_image"
								text="Add a profile image for the Coach"
								valueExtractor={(val) => {
									handleFieldChange("image", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4 mt-4 justify-content-end">
						<Col>
							<Button
								text="Add Coach"
								onSubmit={handleCoachAdd}
								rounded={false}
							/>
						</Col>
					</Row>
				</form>
			</Container>
		</div>
	);
};

export default Coaches;
