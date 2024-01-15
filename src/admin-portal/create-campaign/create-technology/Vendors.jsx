import React, { useState } from "react";
import { Spinner } from "@kehillahglobal/ui";
import {
  Col,
  Container,
  Row,
  FormLabel,
  Form,
  Button as BTN,
} from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Chip from "src/components/admin-components/Chip";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import Button from "../../../components/admin-components/Button";
import useSWR from "swr";
import {
  addTechnologyVendor,
  fetchCampaignCommunityVendors,
} from "src/requests/technology-requests";
import CustomAccordion from "../../../components/admin-components/CustomAccordion";
import SectionForm from "./SectionsForm";

const Vendors = ({ campaign_id, tech_id, techObject, updateTechObject }) => {
  let existing = [
    ...(techObject?.vendors || [])?.map((tech) => tech?.vendor),
  ].flat();
  const [selectedVendors, setSelectedVendors] = useState(existing || []);
  const [loading, setLoading] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);

  const { blow, pop } = useBubblyBalloons();

  const { data: allVendors, isLoading } = useSWR(
    "campaigns.communities.vendors.list",
    () => fetchCampaignCommunityVendors(campaign_id),
    {
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 3000,
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
        setLoading(false);
        updateTechObject(savedItems);
        blow({
          title: "Success",
          message: "Vendors saved successfully",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
      console.log("===e===", e);
      setLoading(false);
      pop({
        title: "Error",
        message: "Error saving vendors",
        type: "error",
        duration: 5000,
      });
    }
  };

  if (isLoading)
    return (
      <div
        className=""
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

  console.log(allVendors);

  return (
    <div style={{ height: "100vh" }}>
      <div className="py-5">
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
          onClick={() => setOpenAccordion(!openAccordion)}
        />
      </div>
      <Container>
        <Form>
          <FormLabel>
            Choose one or more Vendors for this technology from the dropdown below.
          </FormLabel>

          <MultiSelect
            options={(allVendors || []).map((vendor) => {
              return {
                ...vendor,
                value: vendor?.id,
                label: `${vendor?.name} --- ${vendor?.communities[0]?.name} community`,
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
        </Form>

        <Row className="mt-4">
          {/* <Col>
            <table>
              {selectedVendors?.map((vendor) => {
                return (
                  <Col key={vendor?.id} sm={"auto mb-2"}>
                    <Chip
                      text={vendor?.name}
                      icon={vendor?.icon}
                      id={vendor?.id}
                      size={"sm"}
                      className="mr-2 mb-5"
                      onDismiss={(id, text) => {
                        setSelectedVendors(
                          selectedVendors?.filter((vendor) => vendor?.id !== id),
                        );
                      }}
                    />
                  </Col>
                );
              })}
            </table>
          </Col> */}

          {selectedVendors?.length > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Website</th>
                    <th scope="col">Key Contact</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {(selectedVendors || [])?.map((vendor) => {
                    return (
                      <tr key={vendor?.id} className="text-sm">
                        <td>{vendor?.name}</td>
                        <td
                          onClick={() => {
                            console.log(vendor);
                          }}
                        >
                          {vendor?.website ? vendor?.website : "N/A"}
                        </td>
                        <td className="text-capitalize">
                          {vendor?.key_contact?.email
                            ? vendor?.key_contact?.email
                            : "N/A"}
                        </td>
                        <td className="text-cnter">
                          <BTN
                            // style={{ marginLeft: 10 }}
                            onClick={(id, text) => {
                              if (
                                window.confirm(
                                  "Are you sure you want to remove this vendor?",
                                )
                              ) {
                                const filtered = selectedVendors?.filter(
                                  (vend) => vend?.id !== vendor?.id,
                                );
                                setSelectedVendors(filtered);
                              }
                            }}
                            variant="primary"
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
          ) : null}
        </Row>

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
      </Container>
    </div>
  );
};

export default Vendors;
