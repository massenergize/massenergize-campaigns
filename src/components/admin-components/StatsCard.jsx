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
	let [key, value] = data;

	const bgColor = {
		comments: "bg-cyan-400",
		views: "bg-lime-400",
		shares: "bg-pink-400",
		testimonials: "bg-indigo-400",
		likes: "bg-violet-400",
		followers: "bg-teal-400",
		default: "bg-green-400",
	};

	const iconMap = {
		comments: faComments,
		views: faEye,
		shares: faShareNodes,
		testimonials: faUsers,
		likes: faHeart,
		followers: faUserPlus,
	};

	const getBackgroundColor = (type) => {
		return bgColor[type] || bgColor.default;
	};

	const getIcon = (type) => {
		return iconMap[type] || null;
	};

	return (
		<div className={`stat-card ${getBackgroundColor(key)}`}>
			<div className="stat-type">
				<h5>{key}</h5>
				<span className="stat-icon">
					<FontAwesomeIcon icon={getIcon(key)} />
				</span>
			</div>
			<div className="text-center">
				<h1>{value}</h1>
			</div>
		</div>
	);
};

export default StatsCard;
