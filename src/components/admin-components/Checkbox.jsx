import React, { useState } from "react";
import "./styles.scss";

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
}) => {
	return (
		<label htmlFor={id} className={size === "big" ? "custom-checkbox checkbox-big" : "custom-checkbox checkbox-small"}>
			<input
				type="checkbox"
				id={id}
				onChange={(e) => {
					valueExtractor && valueExtractor(value ? value : e.target.checked);
					typeof onItemSelect === 'function' && onItemSelect(value);
				}}
			/>
			<span className="checkbox-icon"></span>
			<span className="text">
				<span>{icon}</span> {label ? label : labelExtractor()}
			</span>
		</label>
	);
};

export default Checkbox;
