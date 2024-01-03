import { useReducer, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import useSWR, {mutate} from "swr";
import {
	addCampaignManager,
	fetchCampaignManagers,
} from "../../requests/campaign-requests";
import { CampaignManagersView } from "./campaign-managers-view";
import Modal from "react-bootstrap/Modal";
import Input from "../../components/admin-components/Input";
import { Spinner } from "@kehillahglobal/ui";
import Notification from "src/components/pieces/Notification";

const Managers = ({ campaignDetails, setCampaignDetails, setStep, lists }) => {
	const [pagesCount, setPagesCount] = useState(1);
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [notification, setNotification] = useState(null);

	const initialState = {
		email: "",
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
		console.log(formData);
	};

	const makeNotification = (message, good = false) => {
		setNotification({ message, good });
	};

	const {data: campaignManagers,error: campaignManagersError,isLoading} = useSWR(`campaigns.managers.list`, async () => {
		return await fetchCampaignManagers(campaignDetails?.id);
	});

	let [canGotoPreviousPage, setCanPreviousPage] = useState(false);
	let [canGotoNextPage, setCanGotoNextPage] = useState(false);

	const gotoPage = async function (next) {
		if (next !== pageIndex) {
			if (next < pageIndex) {
				if (canGotoPreviousPage) {
					// await fetchData(next, pageSize);
				}
			} else if (next > pageIndex) {
				if (canGotoNextPage) {
				}
			}
		}
	};

	const previousPage = async function () {
		if (canGotoPreviousPage) {
			// return await fetchData(pageIndex - 1, pageSize);
		}
	};

	const nextPage = async function () {
		if (canGotoNextPage) {
			// return await fetchData(pageIndex + 1, pageSize);
		}
	};

	const [showSearchModal, setShowSearchModal] = useState(false);

	const handleClose = () => {
		setShowSearchModal(false);
		setNotification(null);
	};

	const handleManagerAdd = async () => {
		try {
			const manager = await addCampaignManager(formData?.email,campaignDetails?.id);

			if (manager) {
				mutate(`campaigns.managers.list`);
				makeNotification("Manager added successfully", true);
				handleClose();
			}
		} catch (e) {
			makeNotification("An Error occurred", false);
			console.log("ERROR ADDING MANAGER", e);
		}
	};

	// useEffect(() => {
	// 	handleFieldChange("user_ids", count);
	// }, [count]);

	return (
		<div>
			{isLoading ? (
				<div
					className=""
					style={{ width: "100%", display: "flex", justifyContent: "center" }}
				>
					<Spinner color="#6e207c" radius={56} variation="TwoHalfCirclesType" />
				</div>
			) : (
				<>
					<Row className="">
						<Col></Col>
						<Col md={"auto"}>
							<Button
								variant={"success"}
								onClick={() => {
									setShowSearchModal(true);
								}}
							>
								Add Manager
							</Button>
						</Col>
					</Row>
					<Row className="py-4">
						<Col>
							<CampaignManagersView
								managers={campaignManagers || []}
								// events={allManagers}
								pagination
								{...{
									pageIndex,
									pageSize,
									pagesCount,
									canGotoPreviousPage,
									canGotoNextPage,
									gotoPage,
									previousPage,
									nextPage,
								}}
							/>
						</Col>
					</Row>
				</>
			)}

			<Modal size={"lg"} show={showSearchModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className={"text-sm"}>
						Add a manager to {campaignDetails?.title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col>
							<Input
								id="contact"
								name="contact"
								label="Manager Email"
								placeholder="Enter email here...."
								required={true}
								type="textbox"
								onChange={(val) => {
									handleFieldChange("email", val);
								}}
							/>
							<div className="mt-4">
								{notification && (
									<Notification show={notification.message} good={notification.good}>
										{notification?.message}
									</Notification>
								)}
							</div>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleManagerAdd}>
						Add Manager
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Managers;
