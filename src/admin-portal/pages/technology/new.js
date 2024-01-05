import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { technologyPages } from "../../../utils/Constants";
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

export function CreateTechnology() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(technologyPages[0]?.key || "");

  const [techObject, setTechObject] = useState(null);
  const [information, setInformation] = useState(INFO_INITIAL_STATE);
  const [coaches, setCoaches] = useState([]);

  const { notify } = useBubblyBalloons();

  const { campaign_id, technology_id } = useParams();

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

  console.log("TECH_OBJECT_HERE", techObject);

  const renderTabs = () => {
    if (loading)
      return (
        <center>
          <Spinner color="#6e207c" radius={56} variation="TwoHalfCirclesType" />
        </center>
      );

    return (
      <Col>
        {technologyPages?.map((tab) => {
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
              {technologyPages?.map((page) => (
                <div
                  key={page?.key}
                  className={classes("nav-tabs-main tab", {
                    "tab-active": activeTab === page?.key,
                  })}
                  onClick={() => setActiveTab(page?.key)}
                >
                  <h5 className={classes("nav-tabs")}>{page?.name}</h5>
                </div>
              ))}
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
