import React, { useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "../../../components/admin-components/Dropdown";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";

const Vendors = () => {
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

	const initialState = {
		technology_id: "",
		vendor_id: opts?.slice(0, 3),
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
		<div>
			<Container>
				<Row className="my-4">
					<Col>
						<Dropdown
							displayTextToggle="Select vendors for this campaign"
							data={opts}
							valueExtractor={(item) => item}
							labelExtractor={(item) => item?.first_name}
							multiple={true}
							onItemSelect={(selectedItem, allSelected) => {
								console.log(allSelected);
								handleFieldChange("vendor_id", allSelected);
							}}
							selectedValues={formData?.vendor_id}
						/>
					</Col>
				</Row>
				<Row className="justify-content-end">
					<Col className="mt-4 py-4">
						<Button
							text="Save Changes"
							// onSubmit={handleSubmit}
							rounded={false}
						/>
					</Col>
				</Row>
			</Container>

			<Container className="py-4 my-4">
				<Row className="pt-4 mt-4">
					<Col>
						<h6>You can upload a .csv file of vendors if you have one</h6>
					</Col>
				</Row>
				<Row className="py-4 my-4">
					<Col>
						<FileUploader
							required={false}
							id="key_contact_profile"
							text="Upload a .csv file of your vendors"
							valueExtractor={(val) => {
								// handleFieldChange("profileImage", val);
							}}
							accept=".csv"
						/>
					</Col>
				</Row>
				<Row className="mt-4 py-4 justify-content-end">
					<Col className="mt-4 py-4">
						<Button
							text="Submit File"
							// onSubmit={handleSubmit}
							rounded={false}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Vendors;
