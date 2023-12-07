import React, { useState } from "react";

const FileUploader = ({ text, valueExtractor, required, id }) => {
	const [previewUrl, setPreviewUrl] = useState(null);

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		valueExtractor(event.target.files[0]);

		if (selectedFile) {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				setPreviewUrl(fileReader.result);
			};
			fileReader.readAsDataURL(selectedFile);
		}
	};

	return (
		<div className="file-upload">
			<label htmlFor={id} className="file-input-label">
				<input
					type="file"
					id={id}
					className="file-input"
					onChange={handleFileChange}
					required={required}
				/>
				<div>
					{previewUrl ? (
						<img src={previewUrl} alt="Preview" className="preview-image" />
					) : (
						<span
							style={{
								position: "absolute",
								top: "2.6rem",
								left: "2.5rem",
							}}
						>
							<svg
								stroke="#D1D5DB"
								fill="#D1D5DB"
								stroke-width="0"
								viewBox="0 0 20 20"
								height="4em"
								width="4em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
						</span>
					)}
				</div>
				{}
			</label>
			<p
				style={{
					color: "#9CA3AF",
				}}
			>
				{text} {required && "*"}
			</p>
		</div>
	);
};

export default FileUploader;
