import React, { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../adminStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Button from "../../components/admin-components/Button";
import Dropdown from "../../components/admin-components/Dropdown";
import { motion as m } from "framer-motion";
import { apiCall } from "../../utils/api_call";

const Technologies = ({campaignDetails, setCampaignDetails}) => {
	const {technologies} = campaignDetails;

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

	const navigate = useNavigate();

	const initialState = {
		campaign_id: "",
		technology_id: [],
	};

	const [choice, setChoice] = useState([]);

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
		setCampaignDetails(field,  campaignDetails[field])
	};

	const handleRemove = (data) => {
		const filtered = formData?.technology_id?.filter((tech) => {
			return tech?.id !== data?.id;
		});

		handleFieldChange("technology_id", filtered);
		console.log(formData);
	};

	useEffect(() => {
		// handleFieldChange("technologies", choice);
		console.log(formData);
	}, [formData]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(formData);

		apiCall("campaigns.create", formData)
			.then((res) => {
				// localStorage.setItem("campaign_id", res?.data?.id);
				console.log(res?.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<m.div initial={{ y: " 10%" }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
			<Container>
				<form>
					<Row>
						<Col>
							<p>
								Pick out the technologies you want to show up in this campaign.
								Or{" "}
								<span
									onClick={() => navigate("/admin/campaign/create-technology")}
									className="theme-color text-link"
								>
									Create a new technology
								</span>
							</p>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col>
							<Dropdown
								displayTextToggle="Select technologies for this campaign"
								data={opts}
								defaultValue={technologies}
								value={technologies}
								valueExtractor={(item) => item}
								labelExtractor={(item) => item?.name}
								multiple={true}
								onItemSelect={(selectedItem, allSelected) => {
									setCampaignDetails("technologies", allSelected)
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
								{
									technologies.map((tech) => {
									return (
										<div className="small-image-container" key={tech?.id}>
											<img className="small-image" src={tech?.image} alt="" />
											<span
												onClick={() => {
													handleRemove(tech);
												}}
												className="image-close-btn"
											>
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
		</m.div>
	);
};

export default Technologies;