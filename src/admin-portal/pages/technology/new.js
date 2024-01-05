import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { technologyPages } from "../../../utils/Constants";
import CreateTechnologyPageWrapper from "../PageWrapper/CreateTechnologyPageWrapper";
import classes from "classnames";
import { AdminLayout } from "../../../layouts/admin-layout";
import { useBubblyBalloons } from "../../../lib/bubbly-balloon/use-bubbly-balloons";
import { useParams } from "react-router-dom";
import { Spinner } from "@kehillahglobal/ui";
import { apiCall } from "../../../api/messenger";
const INFO_INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  summary: "",
};

const UNPROTECTED = ["information"];
export function CreateTechnology() {
  let TABS = technologyPages;
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(TABS[0]?.key || "");
  const { campaign_id, technology_id } = useParams();

  const techIsNotCreatedYet = !technology_id;
  if (techIsNotCreatedYet) {
    TABS = TABS.map((tab) => {
      if (UNPROTECTED.includes(tab.key)) return tab;
      return { ...tab, deactivate: true };
    });
  }

  const [techObject, setTechObject] = useState(null);
  const [information, setInformation] = useState(INFO_INITIAL_STATE);
  const [coaches, setCoaches] = useState([]);

  const { notify } = useBubblyBalloons();

  const inflate = (techObject) => {
    const { summary, image, description, name, coaches } = techObject || {};
    setInformation({ summary, image: image?.url, description, name });
    setCoaches(coaches);
  };

  // TODO: MOve this into technology request file later
  const fetchTechnology = (id, cb) => {
    apiCall("/technologies.info", { id }).then((response) => {
      const { data, success, error } = response || {};
      cb && cb(data, success);
      if (!success) return notifyError(error);
      setTechObject(data);
      inflate(data);
    });
  };

  const updateTechObject = (data) => {
    const obj = { ...techObject, ...(data || {}) };
    setTechObject(obj);
    inflate(obj);
  };

  useEffect(() => {
    if (!technology_id) return;
    setLoading(true);
    fetchTechnology(technology_id, () => setLoading(false));
  }, [technology_id]);

  const notifyError = (message) => {
    notify({
      title: "Error",
      message: message,
      type: "error",
      timeout: 15000,
    });
  };
  const notifySuccess = (message) => {
    notify({
      title: "Success",
      message: message,
      type: "success",
      timeout: 15000,
    });
  };

  const renderTabs = () => {
    if (loading)
      return (
        <center>
          <Spinner color="#6e207c" radius={56} variation="TwoHalfCirclesType" />
        </center>
      );

    return (
      <Col>
        {TABS?.map((tab) => {
          return (
            activeTab === tab?.key && (
              <tab.component
                key={tab?.key}
                setInformation={setInformation}
                information={information}
                notifyError={notifyError}
                notifySuccess={notifySuccess}
                campaign_id={campaign_id}
                tech_id={technology_id}
                updateTechObject={updateTechObject} // only requires you to include the part of the techObject you want to update
                setActiveTab={setActiveTab}
                coaches={coaches}
                setCoaches={setCoaches}
              />
            )
          );
        })}
      </Col>
    );
  };

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <AdminLayout>
        {/*region Header*/}
        <Row
          lg={{ gutter: 0 }}
          className="pb-4 overflow-scroll gap-0 no-gutters g"
        >
          <Col>
            <div className="nav-tabs-container">
              {TABS?.map(({ key, name, deactivate }) => {
                return (
                  <div
                    key={key}
                    style={{ opacity: deactivate ? 0.6 : 1 }}
                    className={classes("nav-tabs-main tab", {
                      "tab-active": activeTab === key,
                    })}
                    onClick={() => {
                      if (deactivate) return;
                      setActiveTab(key);
                    }}
                  >
                    <h5 className={classes("nav-tabs")}>{name}</h5>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        {/*endregion*/}

        {/*region Body: Content goes here*/}
        <Row className="mt-4 pt-4">{renderTabs()}</Row>
        {/*endregion*/}

        {/*region Footer*/}
        {/*endregion*/}
      </AdminLayout>
    </div>
  );
}
