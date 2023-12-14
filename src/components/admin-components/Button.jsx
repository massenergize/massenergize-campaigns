import React, { useState } from "react";
import "../../assets/styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, onSubmit, rounded, icon }) => {
	// const [loader, setLoader] = useState(false);
	return (
		<button
			onClick={onSubmit && onSubmit}
			className={rounded ? `btn-rounded btn-n ` : `btn-fixed btn-n`}
		>
			<span> {icon && <FontAwesomeIcon icon={icon} />} </span> {text}
		</button>
	);
};

export default Button;
