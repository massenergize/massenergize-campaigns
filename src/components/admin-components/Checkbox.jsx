import React, { useState } from "react";
import "./styles.css";

const Checkbox = ({
	label,
	size,
	icon,
	id,
	valueExtractor,
	labelExtractor,
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
				onChange={(e) => valueExtractor(e.target.checked)}
			/>
			<span className="checkbox-icon"></span>
			<span className="text">{label ? label : labelExtractor()}</span>
		</label>
	);
};

export default Checkbox;
