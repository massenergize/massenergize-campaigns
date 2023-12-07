import React, { useEffect, useState } from "react";
import Input from "../../components/admin-components/Input";
import Button from "../../components/admin-components/Button";
import Chip from "../../components/admin-components/Chip";
import Checkbox from "../../components/admin-components/Checkbox";
import Dropdown from "../../components/admin-components/Dropdown";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileUploader from "../../components/admin-components/FileUploader";
import Information from "./create-campaign/Information";

const AllComponents = () => {
	const handleAlert = () => {
		window.alert("Hey, I am a button");
	};

	const dropDownDataNoIcons = [
		{
			name: "New Action for Wayland Energy Challenge",
			value: "New Action for Wayland Energy Challenge",
			id: 1,
		},
		{
			name: "Another Action in the System",
			value: "Another Action in the System",
			id: 2,
		},
		{
			name: "Third Action on the List",
			value: "Third Action on the List",
			id: 3,
		},
		{
			name: "Eco-Friendly Framingham Action",
			value: "Eco-Friendly Framingham Action",
			id: 4,
		},
		{
			name: "Another Action in the System",
			value: "Another Action in the System",
			id: 5,
		},
		{
			name: "Third Action on the List",
			value: "Third Action on the List",
			id: 6,
		},
		{
			name: "Eco-Friendly Framingham Action",
			value: "Eco-Friendly Framingham Action",
			id: 7,
		},
	];

	const dropDownDataIcons = [
		{
			name: "New Action for Wayland Energy Challenge",
			value: "New Action for Wayland Energy Challenge",
			id: 1,
			icon: <FontAwesomeIcon icon={faClock} />,
		},
		{
			name: "Another Action in the System",
			value: "Another Action in the System",
			id: 2,
			icon: <FontAwesomeIcon icon={faClock} />,
		},
		{
			name: "Third Action on the List",
			value: "Third Action on the List",
			id: 3,
			icon: <FontAwesomeIcon icon={faClock} />,
		},
		{
			name: "Eco-Friendly Framingham Action",
			value: "Eco-Friendly Framingham Action",
			id: 4,
			icon: <FontAwesomeIcon icon={faClock} />,
		},
	];

	const outputArray = [];

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				margin: "2rem 2rem",
			}}
		>
			{/* <Input
				label="First Name"
				placeholder="Enter name of partner here ..."
				required={true}
				type="textbox"
			/>

			<div
				style={{
					marginTop: "20px",
					width: "100%",
				}}
			>
				<Input
					label="Description"
					placeholder="Enter name of partner here ..."
					required={false}
					type="textarea"
				/>{" "}
			</div>
			<div
				style={{
					marginTop: "20px",
				}}
			>
				<Button text="Save Changes" onSubmit={handleAlert} rounded={true} />
			</div>
			<div
				style={{
					marginTop: "20px",
				}}
			>
				<Chip text="Brad" />
			</div>
			<div
				style={{
					marginTop: "20px",
				}}
			>
				<Chip
					text="Google"
					icon={
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							version="1.1"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							enable-background="new 0 0 48 48"
							height="1.5em"
							width="1.5em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#FFC107"
								d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
							></path>
							<path
								fill="#FF3D00"
								d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
							></path>
							<path
								fill="#4CAF50"
								d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
							></path>
							<path
								fill="#1976D2"
								d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
							></path>
						</svg>
					}
				/>
			</div>
			<div
				style={{
					marginTop: "20px",
				}}
			>
				<Checkbox
					label="Disable the Partner's section"
					id="Disable the Partner's section"
				/>
			</div>
			<div
				style={{
					marginTop: "20px",
				}}
			>
				<Checkbox
					label="Google"
					id="Google"
					size="big"
					icon={
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							version="1.1"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							enable-background="new 0 0 48 48"
							height="1.5em"
							width="1.5em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#FFC107"
								d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
							></path>
							<path
								fill="#FF3D00"
								d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
							></path>
							<path
								fill="#4CAF50"
								d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
							></path>
							<path
								fill="#1976D2"
								d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
							></path>
						</svg>
					}
				/>
			</div>

			<div
				style={{
					marginTop: "20px",
					width: "100%",
					maxWidth: "700px",
				}}
			>
				<Dropdown
					displayTextToggle="New Action for Wayland Energy"
					data={dropDownDataNoIcons}
					outputArray={outputArray}
					valueExtractor={(item) => item?.name}
					labelExtractor={(item) => item?.id}
					multiple={true}
					onItemSelect={(selectedItem, allSelected) =>
						console.log("=== selected===", selectedItem, allSelected)
					}
				/>
			</div>
			<div
				style={{
					marginTop: "20px",
					width: "100%",
				}}
			>
				<FileUploader text="Add an image for the action" />
			</div>
			<div
				style={{
					marginTop: "200px",
					width: "100%",
				}}
			></div> */}
			<div
				style={{
					marginTop: "20px",
					width: "100%",
				}}
			>
				<Information />
			</div>
		</div>
	);
};

export default AllComponents;
