import {
	faComments,
	faDownload,
	faEye,
	faHeart,
	faShareNodes,
	faUserPlus,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StatsCard = ({ data, index }) => {
	const dataCount = data[1];

	const total = dataCount.reduce((sum, item) => sum + item.count, 0);

	return (
		<div
			className={`stat-card ${
				data[0] === "comments"
					? "bg-cyan-400"
					: data[0] === "views"
					? "bg-lime-400"
					: data[0] === "shares"
					? "bg-pink-400"
					: data[0] === "testimonials"
					? "bg-indigo-400"
					: data[0] === "likes"
					? "bg-violet-400"
					: data[0] === "followers"
					? "bg-teal-400"
					: "bg-green-400"
			} `}
		>
			<div className="stat-type">
				<h5>{data[0]}</h5>
				<span className="stat-icon">
					<FontAwesomeIcon
						icon={
							data[0] === "comments"
								? faComments
								: data[0] === "views"
								? faEye
								: data[0] === "shares"
								? faShareNodes
								: data[0] === "testimonials"
								? faUsers
								: data[0] === "likes"
								? faHeart
								: data[0] === "followers" && faUserPlus
						}
					/>
				</span>
			</div>
			<div>
				<h1>{total}</h1>
			</div>
			<div className="d-flex items-center justify-content-end">
				<span>
					<FontAwesomeIcon icon={faDownload} />
				</span>
			</div>
		</div>
	);
};

export default StatsCard;
