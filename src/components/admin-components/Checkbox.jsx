import { useState } from "react";
import "../../assets/styles/styles.scss";

function CheckboxLabel ({ label, icon }) {
	return (
		<span className="text">
				<span>{icon}</span> {label}
			</span>
	);
}

const Checkbox = ({
										label,
										size,
										icon,
										id,
										name,
										value,
	onChange,
	checked,
	labelOnRight = true,
	valueExtractor,
	labelExtractor,
	onItemSelect,
	selectedValues,
}) => {
	const [isChecked, setIsChecked] = useState(
		selectedValues && selectedValues.includes(value)
	);

	return (
		<label htmlFor={id} className={size === "big" ? "custom-checkbox checkbox-big" : "custom-checkbox checkbox-small"}>
			{
				labelOnRight === false ? (<CheckboxLabel label={label} icon={icon}/>) : null
			}
			<input
				type="checkbox"
				id={id}
				checked={checked}
				value={value}
				onChange={(e) => {typeof onChange === "function" && onChange(e.target.checked, e.target.value, name)}}
			/>
			<span className="checkbox-icon"></span>
			{
				labelOnRight ? (<CheckboxLabel label={label} icon={icon}/>) : null
			}
		</label>
	);
};

export default Checkbox;
