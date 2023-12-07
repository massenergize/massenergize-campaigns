import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../components/admin-components/Button";
import "../adminStyles.css";
import Dropdown from "../../components/admin-components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ActionSelect = () => {
	const [formData, setFormData] = useState({
		technologies: [],
	});

	const handleSubmit = async () => {};

	const opts = [
		{
			id: 1,
			image:
				"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
			name: "Heat Pump",
			value: "Heat Pump",
		},
		{
			id: 2,
			image:
				"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
			name: "Solar Community",
			value: "Solar Community",
		},
		{
			id: 3,
			image:
				"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
			name: "Home Solar",
			value: "Home Solar",
		},
		{
			id: 4,
			image:
				"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
			name: "Lighting",
			value: "Lighting",
		},
	];

	console.log(formData);

	const navigate = useNavigate();

	return (
		<div>
			<Container>
				<form>
					<Row>
						<Col>
							<p>
								Pick out the technologies you want to show up in this campaign.
								Or
								<span
									onClick={() => navigate("")}
									className="theme-color text-link"
								>
									Create a new technolgy
								</span>
							</p>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col>
							<Dropdown
								displayTextToggle="Select technologies for this campaign"
								data={opts}
								valueExtractor={(item) => item}
								labelExtractor={(item) => item?.name}
								multiple={true}
								onItemSelect={(selectedItem, allSelected) => {
									console.log(allSelected);
									setFormData({ ...formData, technologies: allSelected });
								}}
							/>
						</Col>
					</Row>
					<Row className="mt-4 py-4">
						<Col className="mt-4 py-4">
							<p>
								Technologies that will show up on your campaign page are listed
								here
							</p>
						</Col>
					</Row>
					<Row className="mb-4 pb-4">
						<Col>
							<div className="smallimages-container-wrapper">
								{formData?.technologies?.map((tech) => {
									return (
										<div className="small-image-container" key={tech?.id}>
											<img className="small-image" src={tech?.image} alt="" />
											<span className="image-close-btn">
												<FontAwesomeIcon icon={faClose} />
											</span>
											<p className="text-center pb-3 small-image-text light-gray-back rounded">
												{tech?.name}
											</p>
										</div>
									);
								})}
							</div>
						</Col>
					</Row>
					<Row className="mt-4 py-4 justify-content-end">
						<Col className="mt-4 py-4">
							<Button
								text="Save Changes"
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

export default ActionSelect;
