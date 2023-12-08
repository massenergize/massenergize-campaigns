import React, { useRef, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "../../components/admin-components/Button";
import Dropdown from "../../components/admin-components/Dropdown";
import Checkbox from "../../components/admin-components/Checkbox";
import Chip from "../../components/admin-components/Chip";
import Input from "../../components/admin-components/Input";
import FileUploader from "../../components/admin-components/FileUploader";
import { motion as m } from "framer-motion";
const Partners = () => {
	const scrollRef = useRef(null);

	const handleScrollTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const [formData, setFormData] = useState({
		coaches: [],
	});

	const opts = [
		{
			id: 1,
			name: "Brad",
			icon: (
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					version="1"
					viewBox="0 0 48 48"
					enable-background="new 0 0 48 48"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#FFCDD2"
						d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
					></path>
				</svg>
			),
		},
		{
			id: 2,
			name: "Tahiru",
			icon: (
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					version="1"
					viewBox="0 0 48 48"
					enable-background="new 0 0 48 48"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#FFCDD2"
						d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
					></path>
				</svg>
			),
		},
		{
			id: 3,
			name: "Sam",
			icon: (
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					version="1"
					viewBox="0 0 48 48"
					enable-background="new 0 0 48 48"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#FFCDD2"
						d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
					></path>
				</svg>
			),
		},
		{
			id: 4,
			name: "Cobbie",
			icon: (
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					version="1"
					viewBox="0 0 48 48"
					enable-background="new 0 0 48 48"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#FFCDD2"
						d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
					></path>
				</svg>
			),
		},
		{
			id: 5,
			name: "Frimps",
			icon: (
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					version="1"
					viewBox="0 0 48 48"
					enable-background="new 0 0 48 48"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="#FFCDD2"
						d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
					></path>
				</svg>
			),
		},
	];

	const handleRemove = (data) => {
		console.log(data);
	};

	const handleCoachAdd = async () => {};

	const handleSubmit = async () => {};

	return (
		<m.div
			initial={{ y: " 10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Container>
				{/* <form> */}
				<Row className="my-4">
					<Col>
						<Checkbox
							label="Disable the Partner's section"
							id="Disable the Partner's section"
							size="big"
						/>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<p>
							Pick out the actions you want to show up in this campaign. Or{" "}
							<span
								onClick={() => {
									handleScrollTo("create-partner");
								}}
								className="theme-color text-link"
							>
								Create a new partner
							</span>
						</p>
					</Col>
				</Row>
				<Row className="py-4">
					<Col>
						<div className="smallimages-container-wrapper">
							{formData?.coaches?.map((coach) => {
								return (
									<div className="" key={coach?.id} onClick={handleRemove}>
										<Chip text={coach?.name} icon={coach?.icon} />
									</div>
								);
							})}
						</div>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col>
						<Dropdown
							displayTextToggle="Select technologies for this campaign"
							data={opts}
							valueExtractor={(item) => item}
							labelExtractor={(item) => item?.name}
							multiple={true}
							onItemSelect={(selectedItem, allSelected) => {
								console.log(allSelected);
								setFormData({ ...formData, coaches: allSelected });
							}}
						/>
					</Col>
				</Row>
				<Row className="py-4 mt-4 justify-content-end">
					<Col>
						<Button
							text="Save Changes"
							onSubmit={handleSubmit}
							rounded={false}
						/>
					</Col>
				</Row>
				{/* </form> */}
			</Container>

			<Container>
				<form>
					<Row className="pt-4 mt-4">
						<Col className="pt-4 mt-4">
							<h5 className="theme-color">Create A New Partner </h5>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Name"
								placeholder="Enter name of partner here..."
								required={true}
								type="textbox"
								onChange={(val) => {
									setFormData({ ...formData, name: val });
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Email"
								placeholder="Enter email of partner here..."
								required={true}
								type="email"
								onChange={(val) => {
									setFormData({ ...formData, email: val });
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Phone Number "
								placeholder="Enter contact of partner here..."
								required={false}
								type="textbox"
								onChange={(val) => {
									setFormData({ ...formData, contact: val });
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Website"
								placeholder="Enter website of partner here..."
								required={false}
								type="textbox"
								onChange={(val) => {
									setFormData({ ...formData, email: val });
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<FileUploader
								required={false}
								id="partner_logo"
								text="Upload a logo"
								valueExtractor={(val) => {
									// handleFieldChange("logo", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4 mt-4 justify-content-end">
						<Col>
							<Button text="Submit" onSubmit={handleSubmit} rounded={false} />
						</Col>
					</Row>
				</form>
			</Container>
		</m.div>
	);
};

export default Partners;
