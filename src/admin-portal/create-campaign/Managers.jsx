import { useReducer, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import useSWR from "swr";
import {
	addCampaignManager,
	fetchAllUsersBySuperAdminManagers,
	fetchCampaignManagers,
	removeCampaignManager,
} from "../../requests/campaign-requests";
import { CampaignManagersView } from "./campaign-managers-view";
import { ProgressButton } from "../../components/progress-button/progress-button";
import Modal from "react-bootstrap/Modal";
import Input from "../../components/admin-components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Managers = ({ campaignDetails, setCampaignDetails, setStep, lists }) => {
	const [pagesCount, setPagesCount] = useState(1);
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(10);

	const initialState = {
		email: "",
	};
	// don't allow selection of more than 5 managers

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

	// useEffect(() => {
	//   handleFieldChange("user_ids", count);
	// }, [count]);

	const { data: campaignManagers, error: campaignManagersError } = useSWR(
		`campaigns.managers.list/${campaignDetails?.id}`,
		async () => {
			return await fetchCampaignManagers(campaignDetails?.id);
		}
	);

	// region Pagination

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
	//endregion

	const [showSearchModal, setShowSearchModal] = useState(false);
	const [search, setSearch] = useState("");
	const [notification, setNotification] = useState(null);

	const handleClose = () => {
		setShowSearchModal(false);
	};

	/**
	 * Slows down the execution of the event handler by 300ms
	 * by which time more would have been typed. instead of doing so on every keystroke
	 * @returns {undefined|void}
	 */
	// const debounceMatches = function () {
	// 	return debounce(
	// 		() => {
	// 			// do the search call here
	// 			// in this implementation, we are just setting the search term
	// 			// updating the search term will trigger swr to revalidate
	// 			setSearch(search);
	// 		},
	// 		300,
	// 		{ trailing: true }
	// 	)();
	// };

	const {
		data: allManagers,
		error: allManagersError,
		isLoading: allManagersLoading,
		isValidating: allManagersValidating,
	} = useSWR(
		() => "users.listForCommunityAdmin/" + search,
		async () => {
			return await fetchAllUsersBySuperAdminManagers(
				"users.listForCommunityAdmin",
				{ params: { search_text: search } }
			);
		},
		{
			fallbackData: [],
		}
	);

	const handleManagerAdd = async () => {
		try {
			const manager = await addCampaignManager(
				formData?.email,
				campaignDetails?.id
			);

			if (manager) {
				setNotification(true);
			}
		} catch (e) {
			setNotification(false);
			console.log(e);
		}
	};

	console.log("=====all Managers =====", campaignManagers);

	return (
		<div>
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
					{allManagersLoading ? (
						""
					) : (
						<CampaignManagersView
							managers={campaignManagers || []}
							events={allManagers}
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
					)}
				</Col>
			</Row>
			{/*<Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <ComboBox
                    id={"search"}
                    name={"search"}
                    items={(allManagers?.data || CAMPAIGN_MANAGERS || []).map((manager) => {
                      // items={(CAMPAIGN_MANAGERS).map((manager) => {
                      return {
                        ...manager,
                        value: manager.full_name,
                        label: manager.full_name,
                      };
                    })}
                    label="Search for a manager"
                    placeholder="Search for a manager"
                    value={search}
                    onTextInputChange={(name, value) => {
                      console.log(name, value);
                    }}
                    onChange={(name, val) => {

                      setSearch(val);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Dropdown
            displayTextToggle="Select technologies for this campaign"
            data={opts}
            valueExtractor={(item) => item}
            labelExtractor={(item) => item?.first_name}
            multiple={true}
            onItemSelect={(selectedItem, allSelected) => {
              setCount(allSelected);
              handleFieldChange("user_ids", allSelected);
            }}
            defaultValue={formData?.user_ids}
          />
        </Col>
      </Row>*/}
			{/*<Row className="py-4">
        <Col>
          <p>
            Please include details of the new managers of this campaign. Or{" "}
            <span className="theme-color">
									Add campaign coaches from existing user
								</span>
          </p>
        </Col>
      </Row>*/}

			<Row className="py-4 mt-4 justify-content-end">
				<Col>
					<ProgressButton onSubmit={handleSubmit} rounded={false}>
						Save Changes
					</ProgressButton>
				</Col>
			</Row>

			<Modal size={"lg"} show={showSearchModal} centered onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className={"text-sm"}>Search for a manager</Modal.Title>
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
									// handleFieldChange("email", {
									// 	...campaignDetails.key_contact,
									// 	email: val,
									// }
									// );
								}}
							/>
							<div>
								{notification === true ? (
									<div className="p-3 mt-4 bg-green text-center flex items-center text-white justify-content-between">
										<h6>Existing Manager added</h6>
										<FontAwesomeIcon
											icon={faClose}
											className="p-1 cursor-pointer"
											onClick={() => {
												setNotification(null);
											}}
										/>
									</div>
								) : (
									notification === false && (
										<div>
											<div className="p-3 mt-4 bg-danger text-center flex items-center text-white justify-content-between">
												<h6>Manager not Found</h6>
												<FontAwesomeIcon
													icon={faClose}
													className="p-1 cursor-pointer"
													onClick={() => {
														setNotification(null);
													}}
												/>
											</div>
										</div>
									)
								)}
							</div>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					{/*<Button variant="secondary" onClick={handleClose}>
            Close
          </Button>*/}
					<Button variant="primary" onClick={handleManagerAdd}>
						Add Manager
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Managers;
