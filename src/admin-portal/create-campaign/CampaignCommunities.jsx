import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormLabel } from "react-bootstrap";
import CustomAccordion from "../../components/admin-components/CustomAccordion";
import IncentivesBar from "../../components/admin-components/IncentivesBar";
import Input from "../../components/admin-components/Input";
import Button from "../../components/admin-components/Button";
import SectionsForm from "./create-technology/SectionsForm";
import { updateCampaign, updateCampaignCommunityInfo } from "../../requests/campaign-requests";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { findItemAtIndexAndRemainder } from "src/utils/utils";
import { MultiSelect } from "react-multi-select-component";
import { useCampaignContext } from "src/hooks/use-campaign-context";
import { apiCall } from "src/api/messenger";
import CampaignCommunitiesExtraLinks from "./CampaignCommunitiesExtraLinks";

export default function CampaignCommunities({ campaignDetails, setCampaignDetails }) {
  const { communities } = campaignDetails;
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({});

  const { lists, setNewCampaignDetails } = useCampaignContext();

  const { allCommunities } = lists || {};

  const [loading, setLoading] = useState(false);
  const [comChangeLoading, setComChangeLoading] = useState(false);
  const [comsInThisCampaign, setComsInThisCampaign] = useState([]);
  const { blow, pop } = useBubblyBalloons();

  const handleFieldChange = (tabId, field, value) => {
    setFormData({ ...formData, [tabId]: { ...formData[tabId], [field]: value } });
  };

  const getValue = (tabId, name, fallback = "") => (formData[tabId] || {})[name] || fallback;

  const openAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const notifyError = (error) => {
    pop({
      title: "Error",
      message: error,
      type: "error",
    });
  };
  const saveChanges = () => {
    const community_ids = comsInThisCampaign?.map((c) => c.value);
    if (!community_ids || !community_ids?.length) return;
    setComChangeLoading(true);
    apiCall("/campaigns.communities.add", { community_ids, campaign_id: campaignDetails?.id })
      .then((response) => {
        setComChangeLoading(false);
        const { data, success, error } = response || {};
        if (!success) return notifyError(error);
        setNewCampaignDetails({ ...campaignDetails, communities: data });
      })
      .catch((e) => {
        setComChangeLoading(false);
        notifyError(e);
        console.log("ERROR_SAVING_CHANGES", e);
      });
  };

  const handleSave = async (tabId) => {
    setLoading(true);
    const toGo = formData[tabId] || {};
    try {
      const res = await updateCampaignCommunityInfo({
        campaign_community_id: tabId,
        ...toGo,
        extra_links: JSON.stringify(toGo?.extra_links || []),
      });
      setLoading(false);
      const { remainder, index } = findItemAtIndexAndRemainder(
        campaignDetails?.communities,
        (found) => found.id === res?.id,
      );
      remainder.splice(index, 0, res);
      setCampaignDetails("communities", remainder);
      blow({
        title: "Success",
        message: "Community information updated successfully",
        type: "success",
      });
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: "An error occurred while updating community information",
        type: "error",
      });
    }
  };

  const saveDefaultCommunitySettings = async () => {
    setLoading(true);
    const toGo = formData["default_community_settings"] || {};

    try {
      const res = await updateCampaign({
        id: campaignDetails?.id,
        default_community_settings: JSON.stringify({
          text: toGo?.alias,
          url: toGo?.help_link,
        }),
      });
      setLoading(false);
      setCampaignDetails("default_community_settings", res);
      blow({
        title: "Success",
        message: "Default community information updated successfully",
        type: "success",
      });
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: "An error occurred while updating default community information",
        type: "error",
      });
    }
  }

  useEffect(() => {
    let d = campaignDetails?.communities || [];
    d = d?.map(({ community: c }) => ({ value: c?.id, label: c?.name }));

    const initial = {
      ...communities?.reduce((acc, item) => {
        acc[item?.id] = { help_link: item?.help_link, alias: item?.alias, extra_links: item?.extra_links };
        return acc;
      }, {}),
      default_community_settings: {
        help_link: campaignDetails?.default_community_settings?.url,
        alias: campaignDetails?.default_community_settings?.text,
        extra_links: campaignDetails?.default_community_settings?.extra_links,},
    };

    setFormData(initial);
    setComsInThisCampaign(d);
  }, [campaignDetails?.communities]);


  return (
    <Container fluid style={{ minHeight: "50vh" }}>
      <div style={{ marginBottom: 20 }}>
        <Row className="py-4">
          <Col>
            <h6 style={{ fontWeight: "bold", color: "var(--admin-theme-color)" }}>
              Add or remove communities from this campaign
            </h6>
            <MultiSelect
              options={(allCommunities?.data || []).map((campaign) => {
                return {
                  ...campaign,
                  value: campaign?.id,
                  label: campaign?.name,
                };
              })}
              value={comsInThisCampaign}
              valueRenderer={(selected, _options) => {
                if (selected.length === 0) return "Select Communities";
                if (selected.length === _options.length) return "All Communities Selected";
                if (selected.length > 5) return `${selected.length} Communities Selected`;
                return selected
                  ?.map(({ label }) => label)
                  .join(", ")
                  .concat(" Selected");
              }}
              onChange={(coms) => {
                setComsInThisCampaign(coms);
              }}
              labelledBy="Select"
            />
          </Col>
        </Row>

        <Button loading={comChangeLoading} onClick={() => saveChanges()}>
          Save Changes
        </Button>
      </div>
      {communities?.map((item) => (
        <Row className={"mb-4"} key={item?.id}>
          <Col>
            <CustomAccordion
              title={`Customize ${item?.alias || item?.community?.name}`}
              component={
                <HelpLinkForm
                  data={item}
                  getValue={getValue}
                  tabId={activeAccordion}
                  handleFieldChange={handleFieldChange}
                  handleSave={handleSave}
                  loading={loading}
                />
              }
              isOpen={item?.id === activeAccordion}
              onClick={() => openAccordion(item?.id)}
            />
          </Col>
        </Row>
      ))}
      <div>
      <CustomAccordion
          title={`Customize Default Community`}
          component={
            <HelpLinkForm
              data={campaignDetails?.default_community_settings}
              getValue={getValue}
              tabId={activeAccordion}
              handleFieldChange={handleFieldChange}
              handleSave={saveDefaultCommunitySettings}
              loading={loading}
              noExtraLinks={true}
            />
          }
          isOpen={"default_community_settings" === activeAccordion}
          onClick={() => openAccordion("default_community_settings")}
        />
      </div>
    </Container>
  );
}

const HelpLinkForm = ({ handleFieldChange, tabId, getValue, handleSave, loading, data, noExtraLinks }) => {
  return (
    <div className="m-3">
      <p className="text-muted">Click "Save Changes" to apply</p>
      <Row>
        <Col>
          <Input
            label="Coach help Link"
            placeholder="Add a link to help for this Eg: https://communities.massenergize.org/ "
            required={false}
            type="textbox"
            onChange={(val) => {
              handleFieldChange(tabId, "help_link", val);
            }}
            value={getValue(tabId, "help_link")}
          />
        </Col>
        <Col>
          <Input
            label="Community Alias"
            placeholder={`The current name is ${
              data?.alias || data?.community?.name || "..."
            }, want to try something else?`}
            required={false}
            type="textbox"
            onChange={(val) => {
              handleFieldChange(tabId, "alias", val);
            }}
            value={getValue(tabId, "alias")}
          />
        </Col>
      </Row>
      {!noExtraLinks && (
        <Row className="py-4 justify-content-end">
        <CampaignCommunitiesExtraLinks
          linkObjs={getValue(tabId, "extra_links")}
          setLinkObjs={(data) => handleFieldChange(tabId, "extra_links", data)}
        />
      </Row>
      )}
      <Row className="py-4 justify-content-end">
        <Col className="px-4">
          <Button
            text="Save Changes"
            onSubmit={() => handleSave(tabId)}
            rounded={false}
            loading={loading}
            disabled={loading}
          />
        </Col>
      </Row>
    </div>
  );
};
