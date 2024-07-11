import React from "react";
import { AdminLayout } from "../../layouts/admin-layout";
import { Container, Row } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { LANGUAGES } from "../../utils/internationalization/languages";
import { useDispatch, useSelector } from "react-redux";
import { updateOfferedLanguageAction } from "src/redux/actions/actions";
import Button from "src/components/admin-components/Button";

const DEFAULT_OFFERED_PER_CAMPAIGN = [{ label: "English (US)", value: "en-US" }];
function AddOfferedLanguages({ campaignDetails: campaign }) {
  const languages = Object.entries(LANGUAGES);
  const cOffered = useSelector((state) => state?.campaignOfferedLanguages);
  const dispatch = useDispatch();
  const campaignId = campaign?.id;

  const getOfferedForThisCampaign = () => {
    if (!cOffered) return DEFAULT_OFFERED_PER_CAMPAIGN;
    return cOffered[campaignId];
  };

  const updateInRedux = (data) => {
    return dispatch(updateOfferedLanguageAction({ ...(cOffered || {}), [campaignId]: data }));
  };

  const getLangWithKey = (key) => {
    return languages?.find(([k]) => key === k);
  };

  const removeLang = (key) => {
    const offered = getOfferedForThisCampaign();
    const newOffered = offered?.filter(({ value }) => value !== key);
    updateInRedux(newOffered);
  };
  const offered = getOfferedForThisCampaign();

  return (
    // <AdminLayout>
    <Container className={""}>
      <Row style={{ height: "100vh" }}>
        {/* <Row style={{}}> */}
        {/* <h3>Add Offered Languages</h3> */}
        <p>Add all languages that you want to offer on your campaign sites here</p>
        <div style={{ height: "100%", marginTop: 20 }}>
          {/* <div style={{ marginTop: 20 }}> */}
          <MultiSelect
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
          />

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
            {offered?.map((lang) => {
              return (
                <h6
                  className="touchable-opacity"
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
                  {lang?.label}

                  <span
                    onClick={() => removeLang(lang?.value)}
                    style={{ marginLeft: "auto", color: "#c83131", fontSize: 16 }}
                  >
                    Remove
                  </span>
                </h6>
              );
            })}
          </div>

          <div style={{ padding: "20px 00px" }}>
            <Button>Save</Button>
          </div>
        </div>
      </Row>
    </Container>
    // </AdminLayout>
  );
}

export default AddOfferedLanguages;
