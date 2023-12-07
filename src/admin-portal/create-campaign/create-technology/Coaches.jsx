import React, { useState } from "react";
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

const Coaches = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		coaches: [],
	});

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

	const handleCoachAdd = async () => {};

	const handleSubmit = async () => {};

	return (
		<div>
			<Container>
				<form>
					<Row className="py-4">
						<Col>
							<p>
								Please include details of the new coaches of this campaign. Or{" "}
								<span
									onClick={() => navigate("")}
									className="theme-color text-link"
								>
									Add campaign coaches from existing user
								</span>
							</p>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<div className="smallimages-container-wrapper">
								{formData?.coaches?.map((coach) => {
									return (
										<div className="" key={coach?.id} onClick={handleRemove}>
											<Chip text={coach?.first_name} />
										</div>
									);
								})}
							</div>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col>
							<Dropdown
								displayTextToggle="Select technologies for this campaign"
								data={opts}
								valueExtractor={(item) => item}
								labelExtractor={(item) => item?.first_name}
								multiple={true}
								onItemSelect={(selectedItem, allSelected) => {
									console.log(allSelected);
									setFormData({ ...formData, coaches: allSelected });
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4 mt-4 justify-content-end">
						<Col>
							<Button
								text="Save Changes"
								onSubmit={handleSubmit}
								rounded={false}
							/>
						</Col>
					</Row>
				</form>
			</Container>

			<Container>
				<form>
					<Row className="mt-4 pt-4">
						<Col className="mt-4 pt-4">
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
									setFormData({ ...formData, full_name: val });
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Email of contact"
								placeholder="Enter email here..."
								required={true}
								type="textbox"
								onChange={(val) => {
									setFormData({ ...formData, email: val });
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
									setFormData({ ...formData, cummunity: val });
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
									setFormData({ ...formData, logo: val });
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
