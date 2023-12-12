import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ text, onSubmit, rounded, icon }) => {
	// const [loader, setLoader] = useState(false);
	return (
		<button
			onClick={onSubmit && onSubmit}
			className={rounded ? `btn-rounded btn-n ` : `btn-fixed btn-n`}
		>
			<FontAwesomeIcon icon={icon} /> {text}
			{/* !load && */}
		</button>
	);
};

//  ${load && "loader"}
//  ${load && "loader"}

export default Button;
