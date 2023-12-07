import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Input from "./Input";
import Button from "./Button";

const IncentivesBar = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState([]);
	const [labelShowing, setLabelShowing] = useState();

	const handleToggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const [formData, setFormData] = useState({
		description: "",
		title: "",
		icon: "",
	});

	const handleSelect = (value) => {};

	const handleUpdate = async () => {};

	return (
		<div className="cusdropdown-container">
			<div
				className={`incentivesBardropdown ${isOpen && "open"}`}
				onClick={handleToggleDropdown}
			>
				<div className="cusdropdown-toggle">
					<h6 className="theme-color">
						<span>
							<FontAwesomeIcon
								className="pr-4 icentiveBarIcon"
								icon={data?.icon}
							/>
						</span>{" "}
						{data?.title}
					</h6>
					<span
						className={
							isOpen
								? "arrowincentivesBar arrowincentivesBar-rotate"
								: "arrowincentivesBar"
						}
					>
						<svg
							stroke="#6e207c"
							fill="#6e207c"
							stroke-width="0"
							viewBox="0 0 1024 1024"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
						</svg>
					</span>
				</div>
			</div>
			<div
				className={
					isOpen
						? "cusdropdown-menu incentivesBar-menu-open"
						: "cusdropdown-menu cusdropdown-menu-close"
				}
			>
				<Container>
					<form>
						<Row className="py-4">
							<Col className="px-4">
								<Input
									label="Title"
									placeholder="Enter title here..."
									required={true}
									type="textbox"
									onChange={(val) => {
										setFormData({ ...formData, title: val });
									}}
									value={data?.title}
								/>
							</Col>
						</Row>
						<Row className="py-4">
							<Col className="px-4">
								<Input
									label="Description"
									placeholder="Add a more description for this incentive..."
									required={false}
									type="textarea"
									onChange={(val) => {
										setFormData({ ...formData, description: val });
									}}
									value={data?.description}
								/>
							</Col>
						</Row>
						<Row className="py-4">
							<Col className="px-4">
								<p>Pick an Icon</p>
								<h4>THIS IS A SPACE FOR THE ICON PICKER</h4>
							</Col>
						</Row>
						<Row className="py-4 justify-content-end">
							<Col className="px-4">
								<Button
									text="Save Changes"
									onSubmit={handleUpdate}
									rounded={false}
								/>
							</Col>
						</Row>
					</form>
				</Container>
			</div>
		</div>
	);
};

export default IncentivesBar;
