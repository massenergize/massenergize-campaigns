import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Checkbox from "../../components/admin-components/Checkbox";
import Input from "../../components/admin-components/Input";
import FileUploader from "../../components/admin-components/FileUploader";
import Button from "../../components/admin-components/Button";
import "../adminStyles.css";
import { motion as m } from "framer-motion";

const Information = () => {
	const [showError, setShowError] = useState(false);
	const [loading, setLoading] = useState(false);

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

	const [formData, dispatch] = useReducer(reducer, initialState);

	const handleFieldChange = (field, value) => {
		dispatch({ type: "SET_FIELD_VALUE", field, value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<m.div
			initial={{ y: " 10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Container>
				<form>
					<Row className="py-4">
						<Col>
							<Checkbox
								label="Is this Campaign a template ?"
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
							<Input
								id="title"
								name="title"
								label="Campaign Title"
								placeholder="Enter a Title for this campaign ..."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("title", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								id="slogan"
								name="slogan"
								label="Campaign Slogan"
								placeholder="Enter a slogan for this campaign ..."
								required={false}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("slogan", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								id="startDate"
								name="startDate"
								label="Start Date"
								placeholder="Enter a slogan for this campaign ..."
								required={false}
								type="date"
								onChange={(val) => {
									handleFieldChange("startDate", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								id="endDate"
								name="endDate"
								label="End Date"
								placeholder="Enter a slogan for this campaign ..."
								required={false}
								type="date"
								onChange={(val) => {
									handleFieldChange("endDate", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								id="description"
								name="description"
								label="Description"
								placeholder="Add a more detailed description of your campaign..."
								required={false}
								type="textarea"
								onChange={(val) => {
									handleFieldChange("description", val);
								}}
							/>
						</Col>
					</Row>

					<Row className="py-4">
						<Col>
							<FileUploader
								required={false}
								id="primary_logo"
								text="Upload a primary logo"
								valueExtractor={(val) => {
									handleFieldChange("profileImage", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<FileUploader
								required={false}
								id="secondary_logo"
								text="Upload a secondary logo"
								valueExtractor={(val) => {
									handleFieldChange("profileImage", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<FileUploader
								required={false}
								id="campaign_image"
								text="Add an image for the campaign(optional)"
								valueExtractor={(val) => {
									handleFieldChange("logo", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="pt-4 mt-4">
						<Col className="pt-4 mt-4">
							<h5 className="theme-color">KEY CONTACT </h5>
							<p className="custom-letter-spacing-p mt-3">
								Please include details of the key contact of this campaign
							</p>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								id="fullName"
								name="fullName"
								label="Full Name"
								placeholder="Enter full name here ..."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("fullName", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								id="email"
								name="email"
								label="Email of Contact"
								placeholder="Enter email here ..."
								required={true}
								type="email"
								onChange={(val) => {
									handleFieldChange("email", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								id="contact"
								name="contact"
								label="Phone Number"
								placeholder="Enter Phone Number here...."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("contact", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<FileUploader
								required={false}
								id="key_contact_profile"
								text="Upload a picture of the key contact"
								valueExtractor={(val) => {
									handleFieldChange("profileImage", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4 justify-content-end">
						<Col>
							<Button
								text="Save & Continue"
								onSubmit={handleSubmit}
								rounded={false}
							/>
						</Col>
					</Row>
					<Row className="py-4 my-4">
						{showError && (
							<Col>
								<p className="text-center py-3 light-red-background">
									Sorry, you got an error while saving. Please check your key
									contact information
								</p>
							</Col>
						)}
					</Row>
				</form>
			</Container>
		</m.div>
	);
};

export default Information;
