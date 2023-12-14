import React, { useState } from "react";
import "../../assets/styles/styles.scss";

const Checkbox = ({
	label,
	size,
	icon,
	id,
	name,
	valueExtractor,
	labelExtractor,
	value,
	onItemSelect,
	selectedValues,
}) => {
	const isChecked = selectedValues && selectedValues.includes(value);

	return (
		<label
			htmlFor={id}
			className={`${
				size === "big" ? "checkbox-big" : " checkbox-small"
			} custom-checkbox`}
		>
			<input
				type="checkbox"
				id={id}
				onChange={(e) => {
					valueExtractor && valueExtractor(value ? value : e.target.checked);
					typeof onItemSelect === "function" && onItemSelect(value);
				}}
				checked={isChecked}
			/>
			<span className="checkbox-icon"></span>
			<span className="text">
				<span>{icon}</span> {label ? label : labelExtractor()}
			</span>
		</label>
	);
};

export default Checkbox;
