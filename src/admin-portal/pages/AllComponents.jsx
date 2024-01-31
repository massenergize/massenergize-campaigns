import { Alert } from "react-bootstrap";
import Partners from "../create-campaign/Partners";
import Coaches from "../create-campaign/create-technology/Coaches";
import Goal from "../create-campaign/Goal";

const AllComponents = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				margin: "2rem 2rem",
			}}
		>
			<div style={{ marginTop: "20px", width: "100%", }}>
				{/* <Information />
				<Technologies />
				<Info /> */}
				{/* <Coaches /> */}
				{/* <Incentives /> */}
				<Partners />
				<Goal />
				<Alert variant={"danger"} className="border-0">
					This is a Red alert—check it out!
				</Alert>
			</div>
		</div>
	);
};

export default AllComponents;
