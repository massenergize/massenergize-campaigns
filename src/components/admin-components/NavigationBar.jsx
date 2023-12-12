import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";

const NavigationBar = ({ data, showDel }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleDropdown = () => {
		setIsOpen(!isOpen);
	};

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

	const handleUpdate = async () => {};

	return (
		<div className="cusdropdown-container">
			<div
				className={`incentivesBardropdown ${isOpen && "open"}`}
				onClick={handleToggleDropdown}
			>
				<div className="cusdropdown-toggle">
					<h6 className="theme-color">
						<span>
							<FontAwesomeIcon
								className="pr-4 icentiveBarIcon"
								icon={data?.icon}
							/>
						</span>{" "}
						{data?.name}
					</h6>
					<span
						className={
							isOpen
								? "arrowincentivesBar arrowincentivesBar-rotate"
								: "arrowincentivesBar"
						}
					>
						<svg
							stroke="#6e207c"
							fill="#6e207c"
							stroke-width="0"
							viewBox="0 0 1024 1024"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
						</svg>
					</span>
				</div>
			</div>
			<div
				className={
					isOpen
						? "cusdropdown-menu incentivesBar-menu-open"
						: "cusdropdown-menu cusdropdown-menu-close"
				}
			>
				<Container>
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
									value={data?.live}
								/>
							</Col>
							{showDel && (
								<Col className="px-4">
									<h6
										style={{
											color: "red",
											letterSpacing: "1px",
											cursor: "pointer",
										}}
									>
										Delete Menu Group
									</h6>
								</Col>
							)}
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
									value={data?.name}
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
									value={data?.url}
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
							{data?.children?.map((child) => {
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
										onChange={(val) => {
											// setFormData({ ...formData, description: val });
										}}
										value={data?.description}
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
										value={data?.description}
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

						{/* ...................... */}

						<Row className="py-4 justify-content-end">
							<Col className="px-4">
								<Button
									text="Save Changes"
									onSubmit={handleUpdate}
									rounded={false}
								/>
							</Col>
						</Row>
					</form>
				</Container>
			</div>
		</div>
	);
};

export default NavigationBar;
