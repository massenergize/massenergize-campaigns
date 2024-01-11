import React, { useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Input from "./Input";
import Checkbox from "./Checkbox";
import { motion as m } from "framer-motion";
import Button from "./Button";

const CreateNavForm = () => {
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
		data: [],
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

	const handleUpdate = async () => {};

	return (
		<m.div
			initial={{ y: "10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Container className="border-dashed ">
				<form>
					<Row className="py-4">
						<Col>
							<Checkbox
								label="is Live"
								id="isTemplate"
								name="isTemplate"
								valueExtractor={(val) => {
									// handleFieldChange("isTemplate", val);
								}}
								size="big"
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col className="px-4">
							<Input
								label="Menu Group Name"
								placeholder="Example : 'Actions' "
								required={false}
								type="textbox"
								onChange={(val) => {
									// setFormData({ ...formData, description: val });
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col className="px-4">
							<Input
								label="URL"
								placeholder="Example : 'www.google.com'"
								required={false}
								type="textbox"
								onChange={(val) => {
									// setFormData({ ...formData, description: val });
								}}
							/>
						</Col>
					</Row>

					{/* ...................... */}
					<Row className="pt-4 mt-4">
						<Col className="px-4">
							<p className="theme-color text-link">Menu children</p>
						</Col>
					</Row>

					<Container className="border-dashed">
						{formData?.data?.children?.map((child) => {
							return (
								<Row className="mb-4">
									<Col>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												width: "100%",
												backgroundColor: "rgb(252, 236, 255)",
												padding: "1rem",
											}}
										>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													height: "100%",
												}}
											>
												<h6 className="theme-color">Action page</h6>
											</div>
											<div
												style={{
													display: "flex",
													gap: "20px",
												}}
											>
												<button
													style={{
														color: "black",
														border: 0,
														backgroundColor: "transparent",
														fontWeight: "bold",
														cursor: "pointer",
													}}
												>
													Edit
												</button>
												<button
													style={{
														color: "red",
														border: 0,
														backgroundColor: "transparent",
														fontWeight: "bold",
														cursor: "pointer",
													}}
												>
													Remove
												</button>
											</div>
										</div>
									</Col>
								</Row>
							);
						})}
						<Row className="py-4">
							<Col className="px-4">
								<Input
									label="Item Name"
									placeholder="Example : 'Actions' "
									required={true}
									type="textbox"
									onChange={() => {
									}}
								/>
							</Col>
						</Row>
						<Row className="py-4">
							<Col className="px-4">
								<Input
									label="URL"
									placeholder="Example : 'www.google.com'"
									required={false}
									type="textbox"
									onChange={() => {
									}}
								/>
							</Col>
						</Row>
						<Row className="py-4">
							<Col className="px-4">
								<button className=" text-center btn-fill">
									Add A New Menu Item
								</button>
							</Col>
						</Row>
					</Container>

					<Container>
						<Row className="py-4 justify-content-end">
							<Col className="px-4">
								<Button
									text="Add New Menu Item"
									onSubmit={handleUpdate}
									rounded={false}
								/>
							</Col>
						</Row>
					</Container>
				</form>
			</Container>
		</m.div>
	);
};

export default CreateNavForm;
