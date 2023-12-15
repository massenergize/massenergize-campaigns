import React, { useEffect, useReducer, useState } from "react";
import { motion as m } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "../../components/admin-components/Dropdown";
import Button from "../../components/admin-components/Button";
import Chip from "../../components/admin-components/Chip";
const Managers = () => {
	const [count, setCount] = useState([]);

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
		user_ids: [],
		campaign_id: [],
	};
	// don't allow selection of more than 5 managers

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

	const handleRemove = (data) => {
		const filtered = formData?.user_ids?.filter(
			(coach) => coach?.id !== data?.id
		);

		handleFieldChange("user_ids", filtered);

		// dispatch({ type: "SET_FIELD_VALUE", 'user_ids', filtered })
	};

	const handleCoachAdd = async () => {};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
	};

	useEffect(() => {
		handleFieldChange("user_ids", count);
	}, [count]);

	return (
		<m.div
			initial={{ y: " 10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Container>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<Row className="py-4">
						<Col>
							<p>
								Please include details of the new managers of this campaign. Or{" "}
								<span className="theme-color">
									Add campaign coaches from existing user
								</span>
							</p>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<div className="smallimages-container-wrapper">
								{formData?.user_ids?.map((coach) => {
									return (
										<div
											className=""
											key={coach?.id}
											onClick={() => {
												handleRemove(coach);
											}}
										>
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
									setCount(allSelected);
									handleFieldChange("user_ids", allSelected);
								}}
								defaultValue={formData?.user_ids}
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

export default Managers;
