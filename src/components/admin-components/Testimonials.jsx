// import { useReducer, useState } from "react";
// import Button from "./Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";
import React, { useReducer, useState } from "react";
// import { comments } from "../../utils/Constants";
import { Col, Container, Row, Button } from "react-bootstrap";
import Input from "./Input";
import Dropdown from "./Dropdown";
import FileUploader from "./FileUploader";

const Testimonials = ({ testimonials }) => {
	const timeAgo = (date) => {
		const currentDate = new Date();
		const inputDate = new Date(date);

		const diffInSeconds = Math.floor((currentDate - inputDate) / 1000);

		if (diffInSeconds < 60) {
			return "Just now";
		} else if (diffInSeconds < 3600) {
			const minutes = Math.floor(diffInSeconds / 60);
			return `${minutes} minutes ago`;
		} else if (diffInSeconds < 86400) {
			const hours = Math.floor(diffInSeconds / 3600);
			return `${hours} hours ago`;
		} else if (diffInSeconds < 604800) {
			const days = Math.floor(diffInSeconds / 86400);
			return `${days} days ago`;
		} else if (diffInSeconds < 2592000) {
			const weeks = Math.floor(diffInSeconds / 604800);
			return `${weeks} weeks ago`;
		} else {
			return "More than a month ago";
		}
	};

	const communityData = [
		{
			id: 1,
			name: "Wayland Community",
		},
		{
			id: 2,
			name: "Swiss Community",
		},
		{
			id: 3,
			name: "Tongrow Community",
		},
	];

	const techData = [
		{
			id: 1,
			name: "heat Pump",
		},
		{
			id: 2,
			name: "Solar Panels",
		},
		{
			id: 3,
			name: "Agro Fertitilizer",
		},
	];
	const users = [
		{
			id: 1,
			name: "Brad",
		},
		{
			id: 2,
			name: "Ellen",
		},
		{
			id: 3,
			name: "Frimpong",
		},
	];

	const [readMore, setReadMore] = useState();
	const [communities, setCommunities] = useState(communityData);
	const [technologies, setTechnologies] = useState(techData);
	const [openCreateForm, setOpenCreateForm] = useState(false);

	const initialState = {
		campaign_technology_id: 1,
		body: "test",
		title: "test",
		image: "",
		commnity_id: 1,
		user_id: 1,
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

	const handleClick = () => {};

	// {, body, , , , }

	return (
		<m.div
			initial={{ y: "15%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<m.div className="mb-4 pb-4">
				{openCreateForm ? (
					<Container className="border-dashed">
						<form>
							<Row className="py-4">
								<Col>
									<Input
										label="Title"
										placeholder="Enter name of partner here..."
										required={true}
										type="textbox"
										onChange={(val) => {
											handleFieldChange("title", val);
										}}
									/>
								</Col>
							</Row>
							<Row className="my-4">
								<Col>
									<Dropdown
										displayTextToggle="Select the Community "
										data={communities}
										valueExtractor={(item) => item?.id}
										labelExtractor={(item) => item?.name}
										multiple={false}
										onItemSelect={(selectedItem, allSelected) => {
											console.log(selectedItem);
											handleFieldChange("commnity_id", selectedItem);
										}}
										selectedValues={[]}
									/>
								</Col>
							</Row>
							<Row className="my-4 pt-4">
								<Col>
									<Dropdown
										displayTextToggle="Select the Technology "
										data={technologies}
										valueExtractor={(item) => item?.id}
										labelExtractor={(item) => item?.name}
										multiple={false}
										onItemSelect={(selectedItem, allSelected) => {
											console.log(selectedItem);
											handleFieldChange("campaign_technology_id", selectedItem);
										}}
									/>
								</Col>
							</Row>
							<Row className="my-4 pt-4">
								<Col>
									<Dropdown
										displayTextToggle="Select the User "
										data={users}
										valueExtractor={(item) => item?.id}
										labelExtractor={(item) => item?.name}
										multiple={false}
										onItemSelect={(selectedItem, allSelected) => {
											console.log(selectedItem);
											handleFieldChange("user_id", selectedItem);
										}}
									/>
								</Col>
							</Row>
							<Row className="py-4">
								<Col>
									<FileUploader
										required={false}
										id="testimonial_image"
										text="Upload an image"
										valueExtractor={(val) => {
											handleFieldChange("image", val);
										}}
									/>
								</Col>
							</Row>
							<Row className="py-4">
								<Col>
									<div>
										<Button onSubmit={handleClick} rounded={false}>
											<span>Create Testimonial</span>
										</Button>
										<Button
											style={{ marginLeft: 10 }}
											onClick={() => setOpenCreateForm(false)}
											variant="danger"
										>
											<span>Cancel</span>
										</Button>
									</div>
								</Col>
							</Row>
						</form>
					</Container>
				) : (
					<div>
						<Button
							onClick={() => {
								setOpenCreateForm(true);
							}}
							rounded={false}
							icon={faPlus}
						>
							<span>Create New Testimonial</span>
						</Button>
					</div>
				)}
			</m.div>

			<h3 className="mb-4">Testimonials</h3>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					width: "100%",
					gap: "30px",
				}}
			>
				{testimonials?.map((testimonial) => {
					return (
						<div
							style={{
								maxWidth: testimonial?.id === readMore ? "100%" : "500px",
								transitionProperty: "all",
								transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
								transitionDuration: "300ms",
							}}
							className="border-no-dash"
						>
							<h5 style={{ color: "green", textTransform: "uppercase" }}>
								{testimonial?.user?.full_name}
							</h5>
							<p
								style={{ color: "gray", fontStyle: "italic", margin: "8px 0" }}
							>
								Created : <span> {timeAgo(testimonial?.created_at)} </span>{" "}
							</p>
							<h6> {testimonial?.title}</h6>

							<div>
								<p style={{ fontSize: "14px", marginBottom: "20px" }}>
									{testimonial?.body?.length > 300
										? testimonial?.body?.slice(0, 300)
										: testimonial?.body}{" "}
									<span
										style={{ color: "green", cursor: "pointer" }}
										onClick={() => {
											setReadMore(testimonial?.id);
										}}
									>
										{testimonial?.body?.length > 300 &&
											readMore !== testimonial?.id &&
											"... Read More"}
									</span>
								</p>
							</div>
							<div>
								<img
									src={testimonial?.image?.url}
									alt=""
									style={{
										width: "100%",
										height: "300px",
										borderRadius: "10px",
										objectFit: "cover",
									}}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</m.div>
	);
};

export default Testimonials;
