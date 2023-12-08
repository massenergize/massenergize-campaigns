import React from "react";
import { motion as m } from "framer-motion";

const Events = () => {
	return (
		<m.div
			initial={{ y: " 10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			Events
		</m.div>
	);
};

export default Events;
