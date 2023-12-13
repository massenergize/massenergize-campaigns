import React, { useReducer, useState } from "react";
import { comments } from "../../utils/Constants";
import Button from "./Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion as m } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import Input from "./Input";
import Dropdown from "./Dropdown";

const Comments = () => {
	const data = comments;

	const handleClick = () => {};

	function timeAgo(date) {
		const seconds = Math.floor((new Date() - date) / 1000);

		const intervals = {
			year: 31536000,
			month: 2592000,
			week: 604800,
			day: 86400,
			hour: 3600,
			minute: 60,
		};

		for (const [intervalName, intervalSeconds] of Object.entries(intervals)) {
			const count = Math.floor(seconds / intervalSeconds);
			if (count >= 1) {
				return `${count} ${intervalName}${count > 1 ? "s" : ""} ago`;
			}
		}

		return "Just now";
	}

	const [selectedId, setSelectedId] = useState(null);
	const [btnName, setBtnName] = useState("Create New Comment");

	const initialState = {
		first_name: "",
		last_name: "",
		email: "",
		comment: "",
		community: "",
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

	return (
		<m.div
			initial={{ y: "15%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div>
				<h3>
					Comments <span>( {data?.length} )</span>{" "}
				</h3>
				<div className="mt-4">
					{btnName === "Save Changes" ? (
						<Container className="border-dashed">
							<form>
								<Row className="my-4">
									<Col>
										<Dropdown
											displayTextToggle="Select the Community "
											data={opts}
											valueExtractor={(item) => item}
											labelExtractor={(item) => item?.name}
											multiple={false}
											onItemSelect={(selectedItem, allSelected) => {
												console.log(allSelected);
												handleFieldChange("community", allSelected);
											}}
											// defaultValue={formData?.technologies || []}
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
												text={btnName}
												onSubmit={handleClick}
												rounded={false}
											/>
										</div>
									</Col>
								</Row>
							</form>
						</Container>
					) : (
						<div>
							<Button
								text={btnName}
								onSubmit={() => {
									setBtnName("Save Changes");
								}}
								rounded={false}
								icon={faPlus}
							/>
						</div>
					)}
				</div>
			</div>
			<div className="mt-4 comment-card-con">
				{data?.map((comment) => {
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
							<m.h6 className="text-xl">
								{comment?.first_name} from {comment?.country}
							</m.h6>
							<m.p className="comment-text">
								{comment?.comment?.length > 60 && selectedId !== comment?.id
									? `${comment?.comment?.slice(0, 60)}...`
									: comment?.comment}
								{comment?.comment?.length > 60 &&
									!selectedId === comment?.id && <span> Read More</span>}
							</m.p>
							<m.div className="comment-date">
								<m.p>{timeAgo(comment?.date)}</m.p>
							</m.div>
						</m.div>
					);
				})}
			</div>
			{/* {selectedId && <div className="black-bg"></div>} */}
			{/* <AnimatePresence>
				{selectedId && (
					<m.div layoutId={selectedId}>
						<m.h6 className="text-xl">
							{selectedData?.first_name} from {selectedData?.country}
						</m.h6>
						<m.p className="comment-text">{selectedData?.comment}</m.p>
						<m.div className="comment-date">
							<m.p>{timeAgo(selectedData?.date)}</m.p>
						</m.div>
						<m.button onClick={() => setSelectedId(null)} />
					</m.div>
				)}
			</AnimatePresence> */}
		</m.div>
	);
};

export default Comments;
// const [selectedId, setSelectedId] = useState(null);

// {
// 	items.map((item) => (
// 		<motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
// 			<motion.h5>{item.subtitle}</motion.h5>
// 			<motion.h2>{item.title}</motion.h2>
// 		</motion.div>
// 	));
// }
