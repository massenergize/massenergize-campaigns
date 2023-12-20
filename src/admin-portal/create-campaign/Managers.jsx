import React, { useReducer, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import useSWR from "swr";
import { fetchAllUsersBySuperAdminManagers, fetchCampaignManagers } from "../../requests/campaign-requests";
import { CampaignManagersView } from "./campaign-managers-view";
import ComboBox from "../../components/combo-box/combo-box";
import debounce from 'lodash/debounce';
import { CAMPAIGN_MANAGERS } from "../../mocks/campaign";
import { ProgressButton } from "../../components/progress-button/progress-button";
import Modal from "react-bootstrap/Modal";
import Input from "../../components/admin-components/Input";
import FileUploader from "../../components/admin-components/FileUploader";


const Managers = ({ campaignDetails, setCampaignDetails, setStep, lists }) => {
  const [count, setCount] = useState([]);

  const [pagesCount, setPagesCount] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const opts = [
    {
      id: 1,
      first_name: "Brad",
      last_name: "Brad",
    },
    {
      id: 2,
      first_name: "Tahiru",
      last_name: "Tahiru",
    },
    {
      id: 3,
      first_name: "Sam",
      last_name: "Sam",
    },
    {
      id: 4,
      first_name: "Cobbie",
      last_name: "Cobbie",
    },
    {
      id: 5,
      first_name: "Frimps",
      last_name: "Frimps",
    },
  ];

  const initialState = {
    user_ids: [],
    campaign_id: [],
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

  const handleRemove = (data) => {
    const filtered = formData?.user_ids?.filter(
      (coach) => coach?.id !== data?.id
    );

    handleFieldChange("user_ids", filtered);

    // dispatch({ type: "SET_FIELD_VALUE", 'user_ids', filtered })
  };

  const handleAddCoach = async () => {
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // useEffect(() => {
  //   handleFieldChange("user_ids", count);
  // }, [count]);

  const {
    data: campaignManagers,
    error: campaignManagersError,
  } = useSWR(`campaigns.managers.list/${campaignDetails?.id}`, async () => {
    return await fetchCampaignManagers(campaignDetails?.id);
  });

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
          // let data = await fetchData(next, pageSize);

          // if (data) {
          //   // console.log({ pi : pageIndex + 1, pagesCount });
          //   if (pageIndex + 1 >= pagesCount) {
          //     setCanGotoNextPage(false);
          //   }
          //
          //   if (!canGotoPreviousPage && pagesCount > 1) {
          //     setCanGotoNextPage(true);
          //   }
          // }
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


  const [showSearchModal, setShowSearchModal] = useState(true);
  const [search, setSearch] = useState("");

  const handleClose = () => {
    setShowSearchModal(false);
  }

  /**
   * Slows down the execution of the event handler by 300ms
   * by which time more would have been typed. instead of doing so on every keystroke
   * @returns {undefined|void}
   */
  const debounceMatches = function () {
    return debounce(() => {
      // do the search call here
      // in this implementation, we are just setting the search term
      // updating the search term will trigger swr to revalidate
      setSearch(search);
    }, 300, { trailing: true })()
  }

  const {
    data: allManagers,
    error: allManagersError,
    isLoading: allManagersLoading,
    isValidating: allManagersValidating,
  } = useSWR(() => "users.listForCommunityAdmin/" + search, async () => {
    return await fetchAllUsersBySuperAdminManagers("users.listForCommunityAdmin", { "params": { "search_text": search } });
  }, {
    fallbackData: CAMPAIGN_MANAGERS,
  });

  return (
    <div>
      <Row className="">
        <Col></Col>
        <Col md={"auto"}>
          <Button variant={"success"} onClick={() => {
            setShowSearchModal(true);
          }}>Add Manager</Button>
        </Col>
      </Row>

      <Row className="py-4">
        <Col>
          <CampaignManagersView managers={campaignManagers?.data} pagination {
            ...{
              pageIndex,
              pageSize,
              pagesCount,
              canGotoPreviousPage,
              canGotoNextPage,
              gotoPage,
              previousPage,
              nextPage,
            }
          } />
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
          <ProgressButton onSubmit={handleSubmit} rounded={false}>Save Changes</ProgressButton>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row className="pt-4 mt-4">
            <Col className="pt-4 mt-4">
              <h5 className="theme-color">KEY CONTACT </h5>
              <p className="custom-letter-spacing-p mt-3">
                Please include details of the key contact of this campaign
              </p>
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <Input
                id="fullName"
                name="fullName"
                label="Full Name"
                placeholder="Enter full name here ..."
                required={true}
                type="textbox"
                value={campaignDetails?.key_contact?.name}
                onChange={(val) => {
                  handleFieldChange("full_name", val);
                  handleFieldChange("key_contact", {
                    ...campaignDetails.key_contact,
                    name : val
                  })
                }}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <Input
                id="email"
                name="email"
                label="Email of Contact"
                placeholder="Enter email here ..."
                required={true}
                type="email"
                onChange={(val) => {
                  handleFieldChange("email", val);
                  handleFieldChange("key_contact", {
                    ...campaignDetails.key_contact,
                    email : val
                  })
                }}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <Input
                id="contact"
                name="contact"
                label="Phone Number"
                placeholder="Enter Phone Number here...."
                required={true}
                type="textbox"
                onChange={(val) => {
                  handleFieldChange("phone_number", val);
                  handleFieldChange("phone_number", {
                    ...campaignDetails.key_contact,
                    phone_number : val
                  })
                }}
              />
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <FileUploader
                required={false}
                id="key_contact_profile"
                text="Upload a picture of the key contact"
                valueExtractor={(val) => {
                  handleFieldChange("key_contact_image", val);
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal size={"lg"} show={showSearchModal} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>
            Search for a manager
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col >
              <ComboBox
                id={"search"}
                name={"search"}
                floatList={true}
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
        </Modal.Body>
        <Modal.Footer>
          {/*<Button variant="secondary" onClick={handleClose}>
            Close
          </Button>*/}
          <Button variant="primary" onClick={handleClose}>
            Add Manager
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Managers;
