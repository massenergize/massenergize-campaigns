import { useTechnologyContext } from "../hooks/use-technology-context";
import { technologyPages } from "../utils/Constants";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBubblyBalloons } from "../lib/bubbly-balloon/use-bubbly-balloons";
import useSWR from "swr";
import { fetchTechnology } from "../requests/technology-requests";
import { Spinner } from "@kehillahglobal/ui";
import { Col, Row } from "react-bootstrap";
import classes from "classnames";

import BackButton from "../components/admin-components/BackButton";

const INFO_INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  summary: "",
};

const UNPROTECTED = ["information"];

export function TechnologyEditView ({}) {
  const { technology, handleTechnologyDetailsChange, setNewTechnologyDetails } = useTechnologyContext();
  let TABS = technologyPages;

  const [loading, setLoading] = useState(false);

  const [techObject, setTechObject] = useState(null);

  const [information, setInformation] = useState(INFO_INITIAL_STATE);
  const [coaches, setCoaches] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS[0]?.key || "");
  const { campaign_id, technology_id } = useParams();

  const getTechnologyId = () => {
    return technology_id || techObject?.technology?.id;
  };

  const techIsNotCreatedYet = !getTechnologyId();

  if (techIsNotCreatedYet) {
    TABS = TABS.map((tab) => {
      if (UNPROTECTED.includes(tab.key)) return tab;
      return { ...tab, deactivate: true };
    });
  }

  const { notify } = useBubblyBalloons();

  const inflate = (techObject) => {
    const { summary, image, description, name, coaches } = techObject || {};
    if (!techIsNotCreatedYet) {
      // Will only run when updating "information", not creating (cos at that time, techObject is null...)
      setInformation({ summary, image: image?.url, description, name });
    }
    setCoaches(coaches);
  };

  // TODO: MOve this into technology request file later
  // const fetchTechnologyI = (id, cb) => {
  //   apiCall("/technologies.info", { id }).then((response) => {
  //     const { data, success, error } = response || {};
  //     cb && cb(data, success);
  //     if (!success) return notifyError(error);
  //     setTechObject(data);
  //     inflate(data);
  //   });
  // };

  const updateTechObject = (data) => {
    const obj = { ...techObject, ...(data || {}) };
    setTechObject(obj);
    inflate(obj);
  };

  /*  useEffect(() => {
      if (!technology_id) return;
      setLoading(true);
      fetchTechnology(technology_id, () => setLoading(false));
    }, [technology_id]);*/

  const {
    data,
    isLoading,
    isValidating,
  } = useSWR(technology_id ? `/technologies.info?id=${technology_id}` : null, async () => {
    return await fetchTechnology(technology_id);
  }, {
    onSuccess: (data) => {
      setTechObject(data);
      console.log("data", data)
      setNewTechnologyDetails(data);
      inflate(data);
    }
  });

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
          <Spinner color="#6e207c" radius={56} variation="TwoHalfCirclesType"/>
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
                tech_id={getTechnologyId()}
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
    <div style={{ padding: "1rem", }}>
      {/*region Header*/}
      <Row className="pb-4 overflow-scroll gap-0 no-gutters g">
        <Col>
          <BackButton/>

          <div className="nav-tabs-container" style={{ marginTop: 10 }}>
            {TABS?.map(({ key, name, deactivate }) => {
              return (
                <div
                  key={key}
                  style={{ opacity: deactivate ? 0.6 : 1 }}
                  className={classes("nav-tabs-main tab", { "tab-active": activeTab === key, })}
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
    </div>
  )
}
