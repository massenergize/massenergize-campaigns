import React from "react";
import "../../assets/styles/styles.scss";

const Input = ({
	label,
	placeholder,
	required,
	type,
	onChange,
	maxLength,
	value,
}) => {
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
					maxLength={maxLength}
					value={value}
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
					maxLength={maxLength}
					value={value}
				/>
			) : type === "textarea" ? (
				<textarea
					placeholder={placeholder}
					className="input-textarea"
					required={required ? true : false}
					// minLength={800}
					onChange={(e) => {
						onChange(e.target.value);
					}}
					maxLength={maxLength}
					value={value}
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
						// value={value}
					/>
				)
			)}
		</div>
	);
};

export default Input;
