import React, { useReducer, useState } from "react";
import { motion as m } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "../../components/admin-components/Dropdown";
import Button from "../../components/admin-components/Button";
import Chip from "../../components/admin-components/Chip";
const CampaignCoaches = () => {
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
							<p>
								Please include details of the new coaches of this campaign. Or{" "}
								<span className="theme-color">
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
									handleFieldChange("coaches", allSelected);
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
		</m.div>
	);
};

export default CampaignCoaches;
