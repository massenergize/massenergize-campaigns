import { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import FileUploader from "../../../components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import "../../adminStyles.css";
import { apiCall } from "../../../utils/api_call";
import MERichText from "../../../components/admin-components/RichText";

const Info = ({ technologyInfo, setTechnologyInfo, setActiveTab }) => {
	const initialState = {
		name: "",
		image: "",
		description: "",
		summary: "",
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "SET_FIELD_VALUE":
				return { ...state, [action.field]: action.value };
			default:
				throw new Error(`Unsupported action type: ${action.type}`);
		}
	};

	const [formData, dispatch] = useReducer(reducer, initialState);

	const handleFieldChange = (field, value) => {
		dispatch({ type: "SET_FIELD_VALUE", field, value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		apiCall("technologies.create", formData).then((res) => {
			if (res?.success) {
				setTechnologyInfo({ ...technologyInfo, ...res?.data });
				setActiveTab("Coaches");
			}
		});
	};

	return (
		<div>
			<Container>
				<form>
					<Row className="py-4">
						<Col>
							<Input
								label="Technology Name"
								placeholder="Enter your technology here...."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("name", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<Input
								label="Summary"
								placeholder="Add a Summary for this focus......."
								required={true}
								type="textarea"
								onChange={(val) => {
									handleFieldChange("summary", val);
								}}
								maxLength="100"
							/>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
                         <MERichText
						 label="Description"
						 placeholder="Add more description for this technology......."	
						 required={true}
						 onEditorChange = {(val, _) => {
							 handleFieldChange("description", val);
						 }}	
						 value={formData?.description}


						 />
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<FileUploader
								required={false}
								id="tech_image"
								text="Add an image for the action"
								valueExtractor={(val) => {
									handleFieldChange("image", val);
								}}
							/>
						</Col>
					</Row>
					<Row className="py-4 justify-content-end">
						<Col>
							<Button
								text="Save & Continue"
								onSubmit={handleSubmit}
								rounded={false}
							/>
						</Col>
					</Row>
				</form>
			</Container>
		</div>
	);
};

export default Info;
