import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../../components/admin-components/Input";
import FileUploader from "../../../../components/admin-components/FileUploader";
import Button from "../../../../components/admin-components/Button";
import "./../../../adminStyles.css";
import Dropdown from "../../../../components/admin-components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Info = () => {
	const [formData, setFormData] = useState({});

	const handleSubmit = async () => {
		console.log(formData);
	};

	return (
		<div>
			<Container>
				<form>
					<Row className="py-4">
						<Col>
							<Input
								label="Technology Name"
								placeholder="Enter your technology here...."
								required={true}
								type="textbox"
								onChange={(val) => {
									setFormData({ ...formData, name: val });
								}}
							/>
						</Col>
					</Row>
					{/* TODO ADD A SUMMARY TEXTAREA */}
					<Row className="py-4">
						<Col>
							<Input
								label="Description"
								placeholder="Add more description for this focus......."
								required={true}
								type="textarea"
								onChange={(val) => {
									setFormData({ ...formData, description: val });
								}}
								maxLength="100"
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<FileUploader
								required={false}
								id="tech_image"
								text="Add an image for the action"
								valueExtractor={(val) => {
									setFormData({ ...formData, image: val });
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
				</form>
			</Container>
		</div>
	);
};

export default Info;
