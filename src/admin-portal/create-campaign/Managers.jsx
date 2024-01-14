import React, { useReducer, useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { addCampaignManager } from "../../requests/campaign-requests";
import { CampaignManagersView } from "./campaign-managers-view";
import Modal from "react-bootstrap/Modal";
import Input from "../../components/admin-components/Input";
import { toSentenceCase } from "../../helpers/utils/string";
import { useBubblyBalloons } from "../../lib/bubbly-balloon/use-bubbly-balloons";
import { useCampaignContext } from "../../hooks/use-campaign-context";
import { apiCall } from "../../api/messenger";

function Managers ({ campaignDetails, setCampaignDetails, setStep, lists }) {
  const [pagesCount, setPagesCount] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [notification, setNotification] = useState(null);

  const { updateCampaignDetails } =
    useCampaignContext();

  const { managers: campaignManagers } = campaignDetails;

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

  let [canGotoPreviousPage, setCanPreviousPage] = useState(false);
  let [canGotoNextPage, setCanGotoNextPage] = useState(false);

  const { notify } = useBubblyBalloons();

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
      const manager = await addCampaignManager(formData?.email, campaignDetails?.id);

      if (manager) {
        const newManagers = [...campaignManagers, manager];
        updateCampaignDetails("managers", newManagers);
        // setCampaignManagers(newManagers);

        makeNotification("Manager added successfully", true);

        notify({
          title: "Success",
          message: "Manager added successfully",
          type: "success",
          duration: 5000,
        });
        handleClose();
      }
    } catch (e) {
      setNotification({ message: toSentenceCase(e.message), good: false });
    }
  };

  const handleRemove = async (manager) => {
    try {
      const res = await apiCall("campaigns.managers.remove", {
        campaign_manager_id: manager.id,
      });
      if (res.success) {
        const newManagers = campaignManagers?.filter(
          (item) => item.id !== manager.id,
        );
        updateCampaignDetails("managers", newManagers);

        handleClose();
        notify({
          title: "Success",
          message: "Manager delete successfully",
          type: "success",
          duration: 5000,
        });
      } else {
        handleClose();
        notify({
          title: "Error",
          message: "Something went wrong",
          type: "error",
          duration: 5000,
        });
      }
    } catch (e) {}
  };

  // useEffect(() => {
  // 	handleFieldChange("user_ids", count);
  // }, [count]);

  return (
    <div>
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
              handleRemove={handleRemove}
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
                type="email"
                onChange={(val) => {
                  handleFieldChange("email", val);
                }}
              />
              <div className="mt-4">
                {notification !== null ? (
                  <Alert
                    variant={notification?.good === true ? "success" : "danger"}
                    onClose={() => {
                      setNotification(null);
                    }}
                    dismissible
                  >
                    {notification?.message}
                  </Alert>
                ) : null}
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
}

export default Managers;
