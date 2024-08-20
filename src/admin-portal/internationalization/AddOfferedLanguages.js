import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../layouts/admin-layout";
import { Container, Row, ToggleButton } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { LANGUAGES } from "../../utils/internationalization/languages";
import { useDispatch, useSelector } from "react-redux";
import { loadLanguagesAction, updateOfferedLanguageAction } from "src/redux/actions/actions";
import Button from "src/components/admin-components/Button";
import ToggleSwitch from "src/components/toggle-switch/ToggleSwitch";
import Loading from "src/components/pieces/Loading";
import { apiCall } from "src/api/messenger";
import {DEFAULT_LANGUAGE_CODE} from "../../utils/Constants";
export const getOfferedForThisCampaign = (objFromRedux, id) => {
  if (!objFromRedux) return DEFAULT_OFFERED_PER_CAMPAIGN;
  return objFromRedux[id];
};

const DEFAULT_OFFERED_PER_CAMPAIGN = [{ label: "English (US)", value: "en-US" }];
function AddOfferedLanguages({ campaignDetails: campaign }) {
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [error, setError] = useState("");
  const [trackChanges, setChanges] = useState({});
  const languages = useSelector((state) => state?.languageList);
  languages?.sort((a, b) => a?.name?.localeCompare(b?.name));

  // const cOffered = useSelector((state) => state?.campaignOfferedLanguages);
  const dispatch = useDispatch();
  const campaignId = campaign?.id;

  const putLanguageListInRedux = (data) => {
    return dispatch(loadLanguagesAction(data));
  };

  const includeNewLanguage = (key, status) => {
    setChanges({ ...trackChanges, [key]: status });
  };

  const pushChanges = () => {
    setUpdateLoading(true);
    const body = { campaign_id: campaignId, supported_languages: JSON.stringify(trackChanges) };
    apiCall("campaigns.supported_languages.update", body).then((res) => {
      setUpdateLoading(false);
      if (!res?.success) return console.log("Error Saving Changes: ", res?.error);
      putLanguageListInRedux(res?.data);
    });
  };

  const fetchEssentials = () => {
    Promise.all([apiCall("campaigns.supported_languages.list", { campaign_id: campaignId })]).then(([langList]) => {
      setLoading(false);
      if (!langList?.success) {
        return setError(langList?.error || "Sorry, could not load list of languages");
      }
      putLanguageListInRedux(langList?.data);
      // updateInRedux(offeredList?.data);
    });
  };

  useEffect(() => {
    if (!languages?.length) fetchEssentials();
    else setLoading(false);
  }, []);

  if (error) return <p style={{ width: "100%", textAlign: "center", fontWeight: "bold", color: "#df5555" }}>{error}</p>;
  if (loading) return <Loading text="Fetching languages...." />;

  return (
    // <AdminLayout>
    <div style={{ padding: "" }}>
      <Row style={{ height: "100vh" }}>
        {/* <Row style={{}}> */}
        {/* <h3>Add Offered Languages</h3> */}
        <p>Add all the translation languages that you want to offer on your campaign site here</p>
        <div style={{ height: "100%", marginTop: 20 }}>
          {/* <div style={{ marginTop: 20 }}> */}
          {/* <MultiSelect
            multiple
            value={offered}
            options={(languages || []).map(([value, label]) => {
              return {
                value,
                label,
              };
            })}
            onChange={(vals) => updateInRedux(vals)}
            valueRenderer={(selected, _options) => {
              if (selected.length === 0) return "Select languages";
              if (selected.length === _options.length) return "All languages selected";
              if (selected.length > 5) return `${selected.length} languages Selected`;
              return selected
                ?.map(({ label }) => label)
                .join(", ")
                .concat(" Selected");
            }}
            labelledBy="Select"
          /> */}

          <div
            style={{
              //   height: "100%",
              width: "100%",
              background: "rgb(248 248 248 / 44%)",
              borderRadius: 10,
              minHeight: 200,
              marginTop: 10,
              padding: 30,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", paddingBottom: 20 }}>
              <h5 style={{ display: "inline", color: "#d8d8d8" }}>LANGUAGES</h5>
              <h5 style={{ marginLeft: "auto", display: "inline", color: "#d8d8d8" }}>Toggle ON/OFF</h5>
            </div>
            {languages?.map(({ name: label, code: k, is_active }) => {
              const isEnglish = k === DEFAULT_LANGUAGE_CODE;
              return (
                <h6
                  // className="touchable-opacity"
                  style={{
                    marginBottom: 15,
                    paddingBottom: 7,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    border: "solid 0px #e9e9e9",
                    borderBottomWidth: 2,
                  }}
                >
                  {label}

                  <div style={{ marginLeft: "auto" }}>
                    {!isEnglish && <ToggleSwitch onChange={(state) => includeNewLanguage(k, state)} ON={is_active} />}
                  </div>
                  {/* <span
                    onClick={() => removeLang(lang?.value)}
                    style={{ marginLeft: "auto", color: "#c83131", fontSize: 16 }}
                  >
                    Remove
                  </span> */}
                </h6>
              );
            })}
          </div>

          <div style={{ padding: "20px 00px" }}>
            <Button loading={updateLoading} onClick={() => pushChanges()}>
              Save
            </Button>
          </div>
        </div>
      </Row>
    </div>
    // </AdminLayout>
  );
}

export default AddOfferedLanguages;
