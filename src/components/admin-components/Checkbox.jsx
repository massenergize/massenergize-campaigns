import { useState } from "react";
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
	const [isChecked, setIsChecked] = useState(
		selectedValues && selectedValues.includes(value)
	);

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
					const newValue = value ? value : e.target.checked;
					valueExtractor && valueExtractor(newValue);

					if (newValue) {
						typeof onItemSelect === "function" && onItemSelect(value);
					} else {
						typeof onItemSelect === "function" && onItemSelect(null);
					}

					setIsChecked(newValue);
					setIsChecked(e.target.checked);
				}}
				checked={isChecked ? true : false}
			/>
			<span className="checkbox-icon"></span>
			<span className="text">
				<span>{icon}</span> {label ? label : labelExtractor()}
			</span>
		</label>
	);
};

export default Checkbox;
