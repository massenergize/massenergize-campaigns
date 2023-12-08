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

const ActionSelect = () => {
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

	// console.log(formData);

	const navigate = useNavigate();

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

	useEffect(() => {}, [formData]);

	return (
		<m.div
			initial={{ y: " 10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
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
									handleFieldChange("technologies", allSelected);
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
		</m.div>
	);
};

export default ActionSelect;
