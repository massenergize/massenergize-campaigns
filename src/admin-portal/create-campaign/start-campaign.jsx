import React, { useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../components/admin-components/Input";
import Button from "../../components/admin-components/Button";
import "../adminStyles.css";
import { motion as m } from "framer-motion";
import { apiCall } from "../../utils/api_call";

export function StartCampaign ({campaignDetails, setCampaignDetails}) {
	const [showError, setShowError] = useState(false);

	const initialState = {
		title: "",
		primary_logo: "",
		secondary_logo: "",
		campaign_image: "",
		tagline: "",
		start_date: "",
		end_date: "",
		description: "",
		campaign_account_id: "583c96c5-7fb4-488f-ac54-2558252ae535",
		is_template: false,
		full_name: "",
		email: "",
		phone_number: "",
		key_contact_image: "",
	};
	const reducer = (state, action) => {
		let { type, payload } = action;
		switch (type) {
			case "SET_FIELD_VALUE":
				return { ...state, [payload.field]: payload.value };
			default:
				throw new Error(`Unsupported action type: ${type}`);
		}
	};

	const [formData, dispatch] = useReducer(reducer, initialState);

	const handleFieldChange = (field, value) => {
		dispatch({ type: "SET_FIELD_VALUE", payload : { field, value } });
	};
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
					<Row className="py-4">
						<Col>
							<Input
								id="title"
								name="title"
								label="Campaign Title"
								placeholder="Enter a Title for this campaign ..."
								required={true}
								type="textbox"
								value={campaignDetails?.title}
								onChange={(val) => {
									handleFieldChange("title", val);
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
									handleFieldChange("start_date", val);
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
