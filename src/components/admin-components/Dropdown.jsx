import React, { useState } from "react";
import "./styles.css";
import Checkbox from "./Checkbox";

const Dropdown = ({ displayTextToggle, data, outputArray }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (value) => {
		if (outputArray.includes(value)) {
			outputArray = outputArray.filter((item) => item !== value);
			return outputArray;
		} else {
			return outputArray.push(value);
		}
	};

	return (
		<div className="cusdropdown-container">
			<div
				className={`cusdropdown ${isOpen && "open"}`}
				onClick={handleToggleDropdown}
			>
				<div className="cusdropdown-toggle">
					{displayTextToggle}
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
						gap: 15,
						padding: "0 1.125rem 2rem 1.125rem",
					}}
				>
					{data.map((datum, index) => (
						<div
							key={index}
							onClick={() => {
								handleSelect(datum?.value);
								console.log(outputArray);
							}}
						>
							<Checkbox
								text={datum?.name}
								id={datum?.id}
								icon={datum?.icon}
								value={datum?.value}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
