import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Checkbox from "../../../components/admin-components/Checkbox";
import Input from "../../../components/admin-components/Input";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "./../../adminStyles.css";

const Information = () => {
	const [showError, setShowError] = useState(false);
	const [formData, setFormData] = useState({
		template: false,
		title: "",
		slogan: "",
		start_date: "",
		end_date: "",
		description: "",
		logo: "",
		full_name: "",
		email: "",
		contact: "",
		profile_image: "",
	});

	const handleSubmit = async () => {
		console.log(formData);
	};

	return (
		<Container
		// fluid
		>
			<form>
				<Row className="py-4">
					<Col>
						<Checkbox
							label="Is this Campaign a template ?"
							id="Is this Campaign a template ?"
							valueExtractor={(val) => {
								setFormData({ ...formData, template: val });
							}}
							size="big"
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<Input
							label="Campaign Title"
							placeholder="Enter a Title for this campaign ..."
							required={true}
							type="textbox"
							onChange={(val) => {
								setFormData({ ...formData, title: val });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<Input
							label="Campaign Slogan"
							placeholder="Enter a slogan for this campaign ..."
							required={false}
							type="textbox"
							onChange={(val) => {
								setFormData({ ...formData, slogan: val });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<Input
							label="Start Date"
							placeholder="Enter a slogan for this campaign ..."
							required={false}
							type="date"
							onChange={(val) => {
								setFormData({ ...formData, start_date: val });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<Input
							label="End Date"
							placeholder="Enter a slogan for this campaign ..."
							required={false}
							type="date"
							onChange={(val) => {
								setFormData({ ...formData, end_date: val });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<Input
							label="Description"
							placeholder="Add a more detailed description of your campaign..."
							required={false}
							type="textarea"
							onChange={(val) => {
								setFormData({ ...formData, description: val });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<FileUploader
							required={false}
							id="campaign_logo"
							text="Add a logo to your campaign (optional)"
							valueExtractor={(val) => {
								setFormData({ ...formData, logo: val });
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
							label="Full Name"
							placeholder="Enter full name here ..."
							required={true}
							type="textbox"
							onChange={(val) => {
								setFormData({ ...formData, full_name: val });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<Input
							label="Email of Contact"
							placeholder="Enter email here ..."
							required={true}
							type="email"
							onChange={(val) => {
								setFormData({ ...formData, email: val });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<Input
							label="Phone Number"
							placeholder="Enter Phone Number here...."
							required={true}
							type="textbox"
							onChange={(val) => {
								setFormData({ ...formData, contact: val });
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
								setFormData({ ...formData, profile_image: val });
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
	);
};

export default Information;
