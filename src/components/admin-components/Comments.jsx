import React from "react";
import { comments } from "../../utils/Constants";
import Button from "./Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";

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
					<Button
						text="Create New Comment"
						onSubmit={handleClick}
						rounded={false}
						icon={faPlus}
					/>
				</div>
			</div>
			<div className="mt-4 comment-card-con">
				{data?.map((comment) => {
					return (
						<div key={comment?.id} className="comment-card">
							<h5 className="text-xl">
								{comment?.first_name} from {comment?.country}
							</h5>
							<p className="comment-text">{comment?.comment}</p>
							<div className="comment-date">
								<p>{timeAgo(comment?.date)}</p>
							</div>
						</div>
					);
				})}
			</div>
		</m.div>
	);
};

export default Comments;

// id: 1,
// email: "example1@example.com",
// first_name: "John",
// last_name: "Doe",
// comment: "This is the first comment.",
// date: "2022-01-01",
// country: "United States",
