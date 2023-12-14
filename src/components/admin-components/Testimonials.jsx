import React, { useReducer, useState } from "react";
import { comments } from "../../utils/Constants";
import Button from "./Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion as m } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import Input from "./Input";
import Dropdown from "./Dropdown";

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

	const [readMore, setReadMore] = useState();

	return (
		<m.div
			initial={{ y: "15%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
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
