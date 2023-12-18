import React, { useReducer, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion as m } from "framer-motion";
import { Col, Container, Row, Button } from "react-bootstrap";
import Input from "./Input";
import classes from "classnames";
import Dropdown from "./Dropdown";
// import Dropdown from "./Dropdown";

const Comments = ({ campaign }) => {
	const commentsData = campaign?.technologies;
	const communities = campaign?.communities;
	const technologies = campaign?.technologies;

	const handleClick = () => {};

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

	const [selectedId, setSelectedId] = useState(null);
	const [openCreateForm, setOpenCreateForm] = useState(false);

	const initialState = {
		first_name: "",
		last_name: "",
		email: "",
		comment: "",
		community: "",
		technologies: "",
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

	const opts = [
		{
			name: "Wayland",
			id: 0,
		},
		{
			name: "Concord",
			id: 1,
		},
		{
			name: "Abode",
			id: 2,
		},
		{
			name: "Newton",
			id: 3,
		},
	];

	const [activeTab, setActiveTab] = useState(commentsData[0]?.name);

	return (
		<m.div
			initial={{ y: "15%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div>
				<div className="">
					{/* <h3>Comments</h3> */}

					{openCreateForm ? (
						<Container className="border-dashed">
							<form>
								<Row className="my-4">
									<Col>
										<Dropdown
											displayTextToggle="Select the Community "
											data={communities}
											valueExtractor={(item) => item?.community?.id}
											labelExtractor={(item) => item?.community?.name}
											multiple={false}
											onItemSelect={(selectedItem, allSelected) => {
												console.log(selectedItem);
												handleFieldChange("community", selectedItem);
											}}
											selectedValues={[]}
										/>
									</Col>
								</Row>
								<Row className="my-4 py-4">
									<Col>
										<Dropdown
											displayTextToggle="Select the Technology "
											data={technologies}
											valueExtractor={(item) => item?.id}
											labelExtractor={(item) => item?.name}
											multiple={false}
											onItemSelect={(selectedItem, allSelected) => {
												console.log(selectedItem);
												handleFieldChange("technologies", selectedItem);
											}}
										/>
									</Col>
								</Row>
								<Row className="py-4">
									<Col>
										<Input
											label="First Name"
											placeholder="Enter name of partner here..."
											required={true}
											type="textbox"
											onChange={(val) => {
												handleFieldChange("first_name", val);
											}}
										/>
									</Col>
								</Row>
								<Row className="py-4">
									<Col>
										<Input
											label="Email"
											placeholder="Enter name of partner here..."
											required={true}
											type="textbox"
											onChange={(val) => {
												handleFieldChange("email", val);
											}}
										/>
									</Col>
								</Row>
								<Row className="py-4">
									<Col>
										<Input
											label="Comment"
											placeholder="Enter name of partner here..."
											required={true}
											type="textarea"
											onChange={(val) => {
												handleFieldChange("comment", val);
											}}
										/>
									</Col>
								</Row>
								<Row className="py-4">
									<Col>
										<div>
											<Button
												onSubmit={handleClick}
												rounded={false}
											>
												<span>Create Comment</span>
											</Button>

											<Button
												style={{marginLeft:10}}
												onClick={()=> setOpenCreateForm(false)}
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
								<span>Create New Comment</span>
							</Button>

						</div>
					)}
				</div>
			</div>

			<Container>
				<Row className="mt-4 pt-4">
					<Col>
						<h3>Comments</h3>
						<div className=" comment-card-con border-dashed">
							{commentsData?.map((tech) => {
								return (
									<m.div className="per-tech-comment">
										<h5 className="theme-color"> {tech?.name} </h5>
										<div className="comments-con">
											{tech?.comments?.map((comment) => {
												return (
													<m.div
														layoutId={comment.id}
														key={comment?.id}
														className={
															selectedId === comment?.id
																? "comment-card-expand"
																: "comment-card"
														}
														onClick={() => {
															setSelectedId(comment?.id);
														}}
													>
														<m.h6 style={{ textDecoration: "underline" }}>
															{comment?.user?.preferred_name
																? comment?.user?.preferred_name
																: comment?.user?.full_name}
														</m.h6>
														<m.p className="comment-text">
															{comment?.text?.length > 60 &&
															selectedId !== comment?.id
																? `${comment?.text?.slice(0, 60)}...`
																: comment?.text}
															{comment?.text?.length > 60 &&
																!selectedId === comment?.id && (
																	<span> Read More</span>
																)}
														</m.p>
														<m.div className="comment-date">
															<m.p>{timeAgo(comment?.created_at)}</m.p>
														</m.div>
													</m.div>
												);
											})}
										</div>
									</m.div>
								);
							})}
						</div>
					</Col>
				</Row>
			</Container>
		</m.div>
	);
};

export default Comments;
