import React, { useEffect, useState } from "react";
import { Spinner } from "@kehillahglobal/ui";
import { Col, Container, Row, FormLabel, Form, Button as BTN } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Chip from "src/components/admin-components/Chip";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import Button from "../../../components/admin-components/Button";
import useSWR from "swr";
import {
  addTechnologyVendor,
  fetchCampaignCommunityVendors,
  removeTechnologyVendor,
} from "src/requests/technology-requests";
import CustomAccordion from "../../../components/admin-components/CustomAccordion";
import SectionForm from "./SectionsForm";
import CreateVendorForm from "./CreateVendorForm";
import { addLabelsAndValues } from "../../../helpers/utils/array";
import { useTechnologyContext } from "../../../hooks/use-technology-context";
import vendors from "../../../user-portal/pages/technology/Vendors";
import { SWR_NO_REFRESH_CONFIG } from "../../../config/config";
import { useSelector } from "react-redux";
import MeModal from "src/components/MEModal/MeModal";

const Vendors = ({ campaign_id, tech_id, techObject, updateTechObject, notifyError, notifySuccess }) => {
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);
  const [openForVendor, setOpenForVendor] = useState(false);
  const [editObj, setEditObj] = useState(null);

  const [openAddVendorModal, setOpenAddVendorModal] = useState(false);

  const user = useSelector((state) => state.authAdmin);

  const { blow, pop } = useBubblyBalloons();

  const { data: allVendors, isLoading } = useSWR(
    `campaigns.communities.vendors.list/${campaign_id}`,
    async () => await fetchCampaignCommunityVendors(campaign_id),
    {
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 3000,
      ...SWR_NO_REFRESH_CONFIG,
    },
  );

  const handleSaveVendors = async () => {
    setLoading(true);
    try {
      let toSend = {
        technology_id: tech_id,
        vendor_ids: selectedVendors.map((vendor) => vendor?.id),
      };
      const savedItems = await addTechnologyVendor(toSend);
      if (savedItems) {
        updateTechObject({ vendors: savedItems });
        setOpenAddVendorModal(false);
        blow({
          title: "Success",
          message: "Vendors saved successfully",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
      pop({
        title: "Error",
        message: "Error saving vendors",
        type: "error",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let existing = [...(techObject?.vendors || [])?.map((tech) => tech?.vendor)].flat();

    setSelectedVendors(existing);
  }, [techObject?.vendors]);
  const handleRemoveVendor = async (vendor) => {
    if (!window.confirm("Are you sure you want to remove this vendor?")) return;
    setLoading(true);
    try {
      let res = await removeTechnologyVendor({
        technology_id: tech_id,
        vendor_id: vendor?.id,
      });
      // const filtered = selectedVendors?.filter((vend) => vend?.id !== vendor?.id);
      // setSelectedVendors(filtered);
      let filtered = techObject?.vendors?.filter((vend) => vend?.vendor?.id !== vendor?.id);
      updateTechObject({ vendors: filtered });
      setLoading(false);
      blow({
        title: "Success",
        message: "Vendor removed successfully",
        type: "success",
      });
    } catch (e) {
      setLoading(false);
      pop({ title: "Error", message: "Error removing vendor", type: "error" });
    }
  };

  if (isLoading) {
    return (
      <div
        className="mt-5"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Spinner color="#6e207c" radius={56} variation="TwoHalfCirclesType" />
      </div>
    );
  }

  return (
    <div>
      <Container fluid className="" style={{ overflowX: "scroll", paddingBottom: 50, paddingRight: 0, paddingLeft: 0 }}>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", marginTop: "20px" }}>
          <BTN style={{ marginLeft: "auto" }} variant="success" onClick={() => setOpenAddVendorModal(true)}>
            <i className="fa fa-plus" style={{ marginRight: 7 }} />
            Import A Vendor
          </BTN>
        </div>

        <div className="py-3">
          <CustomAccordion
            title={"Customize The Title and Description of Vendors Section"}
            component={
              <SectionForm
                section="vendors_section"
                data={techObject?.vendors_section}
                updateTechObject={updateTechObject}
                tech_id={tech_id}
              />
            }
            isOpen={openAccordion}
            onClick={() => {
              setOpenAccordion(!openAccordion);
            }}
          />
        </div>

        <div className="py-3">
          <CustomAccordion
            title={"Create a new vendor"}
            isOpen={openForVendor}
            onClick={() => {
              setOpenForVendor(!openForVendor);
            }}
          >
            <CreateVendorForm
              vendors={techObject?.vendors || []}
              updateTechObject={updateTechObject}
              notifyError={notifyError}
              tech_id={tech_id}
              notifySuccess={notifySuccess}
              user={user}
              data={editObj}
              setEditObj={setEditObj}
            />
          </CustomAccordion>
        </div>

        <Row className="mt-5 px-4">
          {selectedVendors?.length > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Website</th>
                    {/* <th scope="col">Key Contact</th> */}
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {(selectedVendors || [])?.map((vendor) => {
                    const createdByCurrentUser = vendor?.user?.id === user?.id;

                    return (
                      <tr key={vendor?.id} className="text-sm">
                        <td>
                          {vendor?.name}{" "}
                          {createdByCurrentUser && (
                            <small
                              className="touchable-opacity"
                              style={{
                                fontWeight: "bold",
                                color: "var(--bs-green)",
                                textDecorationLine: "underline",
                                fontSize: 14,
                                margin: 10,
                              }}
                              onClick={() => {
                                setOpenForVendor(true);
                                setEditObj(vendor);
                              }}
                            >
                              Edit
                            </small>
                          )}
                        </td>
                        <td
                          onClick={() => {
                            console.log(vendor);
                          }}
                        >
                          {vendor?.website ? vendor?.website : "N/A"}
                        </td>
                        <td className="text-cnter row-flex">
                          <BTN
                            style={{ marginLeft: "auto" }}
                            // style={{ marginLeft: 10 }}
                            onClick={() => handleRemoveVendor(vendor)}
                            variant="danger"
                          >
                            <span>Remove</span>
                          </BTN>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <div className="w-100 flex items-center flex-column text-center">
              <div>
                <img src="/img/no-data.svg" alt="" />
                <p className="">No vendors have been associated with this technology yet.</p>
                <p>Select Vendors from the dropdown above</p>
              </div>
            </div>
          )}
        </Row>
      </Container>

      <MeModal
        style={{ height: "55vh" }}
        open={openAddVendorModal}
        onHide={() => setOpenAddVendorModal(false)}
        title={"Add vendor(s) to this technology"}
      >
        {importVendors()}
      </MeModal>
    </div>
  );

  function importVendors() {
    return (
      <Form className="py-3">
        <FormLabel>Choose one or more Vendors for this technology from the dropdown below.</FormLabel>

        <MultiSelect
          options={(allVendors || []).map((vendor) => {
            let communityName = vendor?.communities[0]?.name || "";
            communityName = communityName ? ` --- ${communityName} community` : "";
            return {
              ...vendor,
              value: vendor?.id,
              label: `${vendor?.name} ${communityName}`,
            };
          })}
          hasSelectAll={true}
          value={selectedVendors?.map((vendor) => {
            return {
              ...vendor,
              value: vendor?.id,
              label: vendor?.name,
            };
          })}
          onChange={(val) => setSelectedVendors(val)}
          valueRenderer={(selected, _options) => {
            if (selected.length === 0) return "Select Vendors";
            if (selected.length === _options.length) return "All Vendors Selected";
            if (selected.length > 2) return `${selected.length} Vendors Selected`;
            return selected
              ?.map(({ label }) => label)
              .join(", ")
              .concat(" Selected");
          }}
          className={"event-select"}
        />
        {/* show selected vendors in a chip */}
        <div className="mt-2" style={{ display: "flex", flexWrap: "wrap" }}>
          {selectedVendors?.map((vendor) => {
            return (
              <Chip
                key={vendor?.id}
                text={vendor?.name}
                className="mx-1 my-1"
                // onDelete={() => {
                //   setSelectedVendors(selectedVendors?.filter((vend) => vend?.id !== vendor?.id));
                // }}
              />
            );
          })}
        </div>

        <Row className="mt-4 justify-content-end">
          <Col>
            <Button
              text="Save Changes"
              loading={loading}
              disabled={loading}
              onSubmit={handleSaveVendors}
              rounded={false}
            />
          </Col>
        </Row>
      </Form>
    );
  }
};

export default Vendors;
