import React, { useReducer, useState } from "react";
import { comments } from "../../utils/Constants";
import Button from "./Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion as m } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import Input from "./Input";
import Dropdown from "./Dropdown";

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
