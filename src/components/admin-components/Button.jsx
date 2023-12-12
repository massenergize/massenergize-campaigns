import React, { useState } from "react";
import "./styles.css";

const Button = ({ text, onSubmit, rounded }) => {
	// const [loader, setLoader] = useState(false);
	return (
		<button
			onClick={onSubmit && onSubmit}
			className={rounded ? `btn-rounded btn-n ` : `btn-fixed btn-n`}
		>
			{text}
			{/* !load && */}
		</button>
	);
};

//  ${load && "loader"}
//  ${load && "loader"}

export default Button;