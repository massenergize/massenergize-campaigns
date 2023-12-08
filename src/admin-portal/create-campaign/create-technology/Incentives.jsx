import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../adminStyles.css";
import { useNavigate } from "react-router-dom";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Input from "../../../components/admin-components/Input";
import Button from "../../../components/admin-components/Button";
import IncentivesBar from "../../../components/admin-components/IncentivesBar";
// import Input

const Incentives = () => {
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

	const [formData, setFormData] = useState({
		description: "",
		title: "",
		icon: "",
	});

	const handleSubmit = async () => {};

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
									setFormData({ ...formData, title: val });
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
									setFormData({ ...formData, description: val });
								}}
								value={data?.description}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<p>Pick an Icon</p>
							<h4>THIS IS A SPACE FOR THE ICON PICKER</h4>
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
