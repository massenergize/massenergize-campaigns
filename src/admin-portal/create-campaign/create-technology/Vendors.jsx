import React, { useState } from "react";
import { Spinner } from "@kehillahglobal/ui";
import { Col, Container, Row, FormLabel, Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Chip from "src/components/admin-components/Chip";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import Button from "../../../components/admin-components/Button";
import useSWR from "swr";
import { addTechnologyVendor, fetchCampaignCommunityVendors } from "src/requests/technology-requests";

const Vendors = ({campaign_id, tech_id,techObject, updateTechObject}) => {

	let existing = [...(techObject?.vendors||[])?.map((tech) => tech?.vendor)].flat();
	const [selectedVendors, setSelectedVendors] = useState(existing || []);
	const [loading, setLoading] = useState(false);

	const { blow, pop } = useBubblyBalloons();

	const {data:allVendors, error, isLoading} = useSWR("campaigns.communities.vendors.list", () => fetchCampaignCommunityVendors(campaign_id), {
		shouldRetryOnError: true,
		errorRetryCount: 3,
		errorRetryInterval: 3000,
	});


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

	}

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

	return (
		<div style={{ height: "100vh" }}>
		<Container>
		  <Form>
			<FormLabel>
			  Choose one or more Vendors for this technology from the dropdown
			  below.
			</FormLabel>
  
			<MultiSelect
			  options={(allVendors || []).map((event) => {
				return {
				  ...event,
				  value: event?.id,
				  label: event?.name,
				};
			  })}
			  hasSelectAll={true}
			  value={selectedVendors}
			  onChange={(val) => setSelectedVendors(val)}
			  valueRenderer={(selected, _options) => {
				if(selected.length === 0) return "Select Vendors"
				if (selected.length === _options.length) return "All Vendors Selected";
				if (selected.length > 2) return `${selected.length} Vendors Selected`;
				return selected?.map(({ label }) => label).join(", ").concat(" Selected");
			  }}
			  className={"event-select"}
			/>
		  </Form>
  
		  <Row className="mt-4">
			<Col>
			  <Row>
				{selectedVendors?.map((vendor) => {
				  return (
					<Col sm={"auto mb-2"}>
					  <Chip
						text={vendor?.name}
						icon={vendor?.icon}
						id={vendor?.id}
						size={"sm"}
						className="mr-2 mb-5"
						onDismiss={(id, text) => {
						  setSelectedVendors(
							selectedVendors?.filter(
							  (vendor) => vendor?.id !== id
							)
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
		</Container>
	  </div>
	);
};

export default Vendors;
