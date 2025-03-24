import React, { useReducer, useState } from "react";
import { Alert, Button as BTN, Button, Col, Row } from "react-bootstrap";
import { CampaignPartnersView } from "./campaign-partners-view";
import Modal from "react-bootstrap/Modal";
import Input from "../../components/admin-components/Input";
import { toSentenceCase } from "../../helpers/utils/string";
import { useBubblyBalloons } from "../../lib/bubbly-balloon/use-bubbly-balloons";
import { useCampaignContext } from "../../hooks/use-campaign-context";
import FileUploader from "../../components/admin-components/FileUploader";
import CustomAccordion from "src/components/admin-components/CustomAccordion";
import SectionsForm from "./create-technology/SectionsForm";
import { createPartner, removePartner, updateCampaign } from "../../requests/campaign-requests";

function Partners({ campaignDetails, setCampaignDetails, setStep, lists }) {
  const [pagesCount, setPagesCount] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [notification, setNotification] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(false);
  const { updateCampaignDetails } = useCampaignContext();
  const [loading, setLoading] = useState(false);

  const { partners: campaignPartners } = campaignDetails;

  const initialState = {
    name: "",
    logo: null,
    phone_number: "",
    email: "",
    website: "",
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

  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleClose = () => {
    setShowSearchModal(false);
    setNotification(null);
  };

  const handlePartnerAdd = async () => {
    try {
      setLoading(true);
      const partner = await createPartner({
        ...formData,
        logo: formData.logo,
        campaign_id: campaignDetails?.id,
      });

      if (partner) {
        const newPartners = [...campaignPartners, partner];
        updateCampaignDetails("partners", newPartners);

        makeNotification("Partner added successfully", true);

        notify({
          title: "Success",
          message: "Partner added successfully",
          type: "success",
          duration: 5000,
        });
        setLoading(false);
        handleClose();
      }
    } catch (e) {
      setLoading(false);
      setNotification({ message: toSentenceCase(e.message), good: false });
    }
  };

  const getValue = (name, fallback = "") => (formData || {})[name] || fallback;

  const handleRemove = async (partner) => {
    try {

      const res = await removePartner(partner.id);
      if (res) {
        const newPartners = campaignPartners?.filter((item) => item.id !== partner.id);
        updateCampaignDetails("partners", newPartners);

        handleClose();
        notify({
          title: "Success",
          message: "Partner deleted successfully",
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
              Add Partner
            </Button>
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            {campaignPartners?.length > 0 ? (
              <CampaignPartnersView
                updateCampaignDetails={updateCampaignDetails}
                partners={campaignPartners || []}
                pagination
                handleRemove={handleRemove}
                {...{
                  pageIndex,
                  pageSize,
                  pagesCount,
                  canGotoPreviousPage,
                  canGotoNextPage,
                  // gotoPage,
                  // previousPage,
                  // nextPage,
                }}
              />
            ) : (
              <div className="w-100 flex items-center flex-column text-center">
                <div>
                  <img src="/img/no-data.svg" alt="" />
                  <h5 className="">No partners added to this campaign</h5>
                </div>
                <div className="text-center">
                  <h6 className="text-muted">Click the 'Add Partners' button to add</h6>
                  <div className="mt-4">
                    <BTN variant={"success"} onClick={() => setShowSearchModal(true)}>
                      <span>Add Partner</span>
                    </BTN>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </>

      <Modal size={"lg"} show={showSearchModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>Add a partner to {campaignDetails?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Input
                id="name"
                name="name"
                label="Partner Name"
                placeholder="Enter partner name here...."
                required={true}
                type="text"
                onChange={(val) => {
                  handleFieldChange("name", val);
                }}
              />
              <Input
                id="website"
                name="website"
                label="Website"
                placeholder="https://www.partnerwebsite.com"
                required={false}
                type="text"
                onChange={(val) => {
                  handleFieldChange("website", val);
                }}
              />
              <div className="py-4">
                <FileUploader
                  required={false}
                  id="partner_logo"
                  text="Upload a logo"
                  onChange={(val) => {
                    handleFieldChange("logo", val);
                  }}
                  value={getValue("logo")}
                  defaultValue={getValue("logo")}
                />
              </div>
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
          <Button 
            variant="primary" 
            onClick={handlePartnerAdd}
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              "Add Partner"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Partners;
