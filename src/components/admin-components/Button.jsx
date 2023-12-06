import React from "react";
import "./styles.css";

const Button = ({ text, onSubmit, rounded }) => {
	return (
		<button
			onClick={onSubmit}
			className={rounded ? "btn-rounded btn-n" : "btn-fixed btn-n"}
		>
			{text}
		</button>
	);
};

export default Button;
