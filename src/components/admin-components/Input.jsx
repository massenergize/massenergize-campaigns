import React from "react";
import "./styles.css";

const Input = ({ label, placeholder, required, type }) => {
	return (
		<div className="input-container">
			<label for={type === "textarea" ? "textarea" : "input"} className="text">
				{label} {required && "*"}
			</label>
			{type === "textbox" ? (
				<input
					type="text"
					placeholder={placeholder}
					className="input"
					required={required ? true : false}
				/>
			) : (
				type === "textarea" && (
					<textarea
						placeholder={placeholder}
						className="input-textarea"
						required={required ? true : false}
						minLength={800}
						// rows="5"
					/>
				)
			)}
		</div>
	);
};

export default Input;
