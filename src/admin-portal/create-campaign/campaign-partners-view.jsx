import React, { useState } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useBubblyBalloons } from "../../lib/bubbly-balloon/use-bubbly-balloons";
import Modal from "react-bootstrap/Modal";
import Input from "../../components/admin-components/Input";
import FileUploader from "../../components/admin-components/FileUploader";
import { toSentenceCase } from "../../helpers/utils/string";
import { updatePartner } from "../../requests/campaign-requests";

export const CampaignPartnersView = ({
  partners,
  handleRemove,
  updateCampaignDetails,
  pagination,
  pageIndex,
  pageSize,
  pagesCount,
  canGotoPreviousPage,
  canGotoNextPage,
  gotoPage,
  previousPage,
  nextPage,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const { notify } = useBubblyBalloons();
  const [loading, setLoading] = useState(false);


  const handleClose = () => {
    setShowEditModal(false);
    setSelectedPartner(null);
  };

  const handleEdit = (partner) => {
    setSelectedPartner(partner);
    setShowEditModal(true);
  };

  const handleUpdate = async () => {    
    try {
      const toSend = {
        id: selectedPartner.id,
        name: selectedPartner.name,
        website: selectedPartner.website,
        ...(selectedPartner.logo?.id ? {  } : { logo: selectedPartner.logo}),
      };
      setLoading(true);


      const updatedPartner = await updatePartner(toSend);

      if (updatedPartner) {
        const newPartners = partners.map((partner) => (partner.id === updatedPartner.id ? updatedPartner : partner));
        updateCampaignDetails("partners", newPartners);

        notify({
          title: "Success",
          message: "Partner updated successfully",
          type: "success",
          duration: 5000,
        });
        setLoading(false);
        handleClose();
      }
    } catch (e) {
        setLoading(false);
      notify({
        title: "Error",
        message: toSentenceCase(e.message),
        type: "error",
        duration: 5000,
      });
    }
  };

  const handleFieldChange = (field, value) => {
    setSelectedPartner({ ...selectedPartner, [field]: value });
  };
  const getValue = (name, fallback = "") => (selectedPartner || {})[name] || fallback;



  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner, index) => (
            <tr key={partner.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={partner?.logo?.url}
                  alt={partner?.name}
                  style={{ width: "100px", height: "50px", objectFit: "contain" }}
                />
              </td>
              <td className="align-middle">{partner.name}</td>
              <td className="align-middle">{partner.website}</td>
              <td className="align-middle">
                <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEdit(partner)}>
                  Edit
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => {
                    window.confirm("Are you sure you want to delete this partner?") && handleRemove(partner);
                }}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal size={"lg"} show={showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>Edit Partner</Modal.Title>
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
                value={getValue("name")}
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
                value={getValue("website")}
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
                  defaultValue={selectedPartner?.logo?.url}
                />
              </div>
    
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate} disabled={loading}>
            {loading? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ): (
                "Save Changes"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
