import React from "react";
import "./styles.css";

const Checkbox = ({ text, size, icon, id, value, onClick }) => {
	return (
		<label
			for={id}
			className={
				size === "big"
					? "custom-checkbox checkbox-big"
					: "custom-checkbox checkbox-small"
			}
			// onClick={onClick}
		>
			<input type="checkbox" id={id} value={value} />
			<span className="checkbox-icon"></span>
			<span className="text">
				{icon} {text}
			</span>
		</label>
	);
};

export default Checkbox;
