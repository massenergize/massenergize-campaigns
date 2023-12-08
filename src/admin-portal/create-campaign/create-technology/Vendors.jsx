import React from "react";
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
								// setFormData({ ...formData, coaches: allSelected });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4">
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
							text="Save Changes"
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
