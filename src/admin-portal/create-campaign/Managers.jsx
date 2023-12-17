import React, { useEffect, useReducer, useState } from "react";
import { Col, Container, InputGroup, Row, Button, Card } from "react-bootstrap";
import Dropdown from "../../components/admin-components/Dropdown";
import Chip from "../../components/admin-components/Chip";
import useSWR from "swr";
import { fetchAllCampaignManagers, fetchCampaignManagers } from "../../requests/campaign-requests";
import { CampaignManagersView } from "./campaign-managers-view";
import ComboBox from "../../components/combo-box/combo-box";
import debounce from 'lodash/debounce';
import {CAMPAIGN_MANAGERS} from "../../mocks/campaign";


const Managers = ({campaignDetails, setCampaignDetails, setStep, lists}) => {
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

  const handleAddCoach = async () => {};

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


  const [search, setSearch] = useState("");

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
  } = useSWR(() => "campaigns.managers.list" + search, async () => {
    return await fetchAllCampaignManagers(campaignDetails?.id, search);
  }, {
    fallbackData: CAMPAIGN_MANAGERS,
  });

  return (
    // <Container>
      <form onSubmit={(e) => {e.preventDefault();}}>
        <Row className="py-4">
          <Col>
          </Col>

          <Col md={"auto"}>
            <Button variant={"success"}>Add Manager</Button>
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
        <Row className="mt-4">
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
            {/*<Dropdown*/}
            {/*  displayTextToggle="Select technologies for this campaign"*/}
            {/*  data={opts}*/}
            {/*  valueExtractor={(item) => item}*/}
            {/*  labelExtractor={(item) => item?.first_name}*/}
            {/*  multiple={true}*/}
            {/*  onItemSelect={(selectedItem, allSelected) => {*/}
            {/*    setCount(allSelected);*/}
            {/*    handleFieldChange("user_ids", allSelected);*/}
            {/*  }}*/}
            {/*  defaultValue={formData?.user_ids}*/}
            {/*/>*/}
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <p>
              Please include details of the new managers of this campaign. Or{" "}
              <span className="theme-color">
									Add campaign coaches from existing user
								</span>
            </p>
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
      </form>
    // </Container>
  );
};

export default Managers;
