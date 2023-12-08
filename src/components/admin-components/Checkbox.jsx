import React, { useState } from "react";
import "./styles.css";

const Checkbox = ({
	label,
	size,
	icon,
	id,
	valueExtractor,
	labelExtractor,
	value,
	onItemSelect,
}) => {
	return (
		<label
			for={id}
			className={
				size === "big"
					? "custom-checkbox checkbox-big"
					: "custom-checkbox checkbox-small"
			}
		>
			<input
				type="checkbox"
				id={id}
				onChange={(e) => {
					valueExtractor && valueExtractor(value ? value : e.target.checked);
					onItemSelect && onItemSelect(value);
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
