import React, { useState } from "react";
import "./styles.css";
import Checkbox from "./Checkbox";

const Dropdown = ({
	displayTextToggle,
	data,
	valueExtractor,
	labelExtractor,
	onItemSelect,
	multiple,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState([]);
	const [labelShowing, setLabelShowing] = useState(displayTextToggle);

	const handleToggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (value) => {
		onItemSelect && onItemSelect(value, selectedItem);

		if (multiple) {
			if (selectedItem.find((item) => item.id === value?.id)) {
				const filtered = selectedItem.filter((item) => item.id !== value?.id);
				setSelectedItem(filtered);
				console.log(filtered);
				return filtered;
			} else {
				setSelectedItem([...selectedItem, value]);
				return selectedItem;
			}
		} else {
			setSelectedItem([value]);
			setIsOpen(false);
		}
	};

	return (
		<div className="cusdropdown-container">
			<div
				className={`cusdropdown ${isOpen && "open"}`}
				onClick={handleToggleDropdown}
			>
				<div className="cusdropdown-toggle">
					{labelShowing}
					<span className={isOpen ? "arrow arrow-rotate" : "arrow "}>
						<svg
							stroke="#6e207c"
							fill="#6e207c"
							stroke-width="0"
							viewBox="0 0 16 16"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
								clip-rule="evenodd"
							></path>
						</svg>
					</span>
				</div>
			</div>
			<div
				className={
					isOpen
						? "cusdropdown-menu cusdropdown-menu-open"
						: "cusdropdown-menu cusdropdown-menu-close"
				}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: multiple && 20,
						padding: "0 1.125rem 2rem 1.125rem",
					}}
				>
					{data.map((datum, index) =>
						multiple ? (
							<div key={index}>
								<Checkbox
									label={labelExtractor && labelExtractor(datum)}
									id={`${datum?.id} ${index} ${
										labelExtractor && labelExtractor(datum)
									} `}
									icon={datum?.icon}
									value={valueExtractor && valueExtractor(datum)}
									onItemSelect={(val) => {
										handleSelect(val);
									}}
								/>
							</div>
						) : (
							<div key={index}>
								<p
									onClick={() => {
										handleSelect(valueExtractor && valueExtractor(datum));
										setLabelShowing(labelExtractor && labelExtractor(datum));
									}}
									className="cusdropdown-item"
								>
									{labelExtractor && labelExtractor(datum)}
								</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;