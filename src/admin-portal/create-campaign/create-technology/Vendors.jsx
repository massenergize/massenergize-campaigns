import React, { useState } from "react";
import { Spinner } from "@kehillahglobal/ui";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
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
import { addLabelsAndValues } from "../../../helpers/utils/array";
import { useTechnologyContext } from "../../../hooks/use-technology-context";
import vendors from "../../../user-portal/pages/technology/Vendors";
import { SWR_NO_REFRESH_CONFIG } from "../../../config/config";

const Vendors = ({ campaign_id, tech_id, techObject, updateTechObject }) => {
  let existing = [
    ...(techObject?.vendors || [])?.map((tech) => tech?.vendor),
  ].flat();
  const [selectedVendors, setSelectedVendors] = useState(existing || []);
  const [loading, setLoading] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(false);

  const { technology, handleTechnologyDetailsChange } = useTechnologyContext();

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
        updateTechObject(savedItems);
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

  if (isLoading) {
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
  }

  console.log("allVendors", allVendors)

  return (
    <div style={{ height: "100vh" }}>
      <Form>
        <FormLabel>
          Choose one or more Vendors for this technology from the dropdown below.
        </FormLabel>

        <MultiSelect
          options={addLabelsAndValues(allVendors || [])}
          labelledBy={"Select Vendors"}
          hasSelectAll={true}
          value={addLabelsAndValues(technology?.vendors || [])}
          onChange={(val) => {
            handleTechnologyDetailsChange("vendors", val);
          }}
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
        <Col>
          <Row>
            {(technology?.vendors || []).map((vendor, i) => {
              return (
                <Col key={i} sm={"auto mb-2"}>
                  <Chip
                    text={vendor?.name}
                    icon={vendor?.icon}
                    id={vendor?.id}
                    size={"sm"}
                    className="mr-2 mb-5"
                    onDismiss={(id, text) => {
                      handleTechnologyDetailsChange(
                        "vendors",
                        technology?.vendors.filter((vendor) => vendor?.id !== id),
                      );
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
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
    </div>
  );
};

export default Vendors;
