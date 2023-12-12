import React from "react";
import { motion as m } from "framer-motion";

const Testimonials = () => {
	return (
		<m.div
			initial={{ y: "15%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			Testimonials
		</m.div>
	);
};

export default Testimonials;
