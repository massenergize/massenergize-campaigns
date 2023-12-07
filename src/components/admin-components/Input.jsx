import React from "react";
import "./styles.css";

const Input = ({ label, placeholder, required, type, onChange }) => {
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
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
			) : type === "email" ? (
				<input
					type="email"
					placeholder={placeholder}
					className="input"
					required={required ? true : false}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
			) : type === "textarea" ? (
				<textarea
					placeholder={placeholder}
					className="input-textarea"
					required={required ? true : false}
					minLength={800}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
			) : (
				type === "date" && (
					<input
						type="date"
						placeholder={placeholder}
						className="date-input"
						required={required ? true : false}
						onChange={(e) => {
							onChange(e.target.value);
						}}
					/>
				)
			)}
		</div>
	);
};

export default Input;
