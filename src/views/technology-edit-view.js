import { useTechnologyContext } from "../hooks/use-technology-context";
import { technologyPages } from "../utils/Constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBubblyBalloons } from "../lib/bubbly-balloon/use-bubbly-balloons";
import useSWR from "swr";
import { fetchTechnology } from "../requests/technology-requests";
import { Button, Col, Container, Row } from "react-bootstrap";
import classes from "classnames";

import BackButton from "../components/admin-components/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { HorizontalPushLoader } from "../components/horizontal-push-loader/horizontal-push-loader";
import usePrevious from "../hooks/use-previous";

const INFO_INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  summary: "",
  help_link:""
};

const UNPROTECTED = ["information"];

export function TechnologyEditView () {
  const { setNewTechnologyDetails } = useTechnologyContext();
  let TABS = technologyPages;

  const [techObject, setTechObject] = useState(null);

  const [information, setInformation] = useState(INFO_INITIAL_STATE);
  const [coaches, setCoaches] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS[0]?.key || "");
  const { campaign_id, technology_id, campaign_technology_id } = useParams();

  const getTechnologyId = () => {
    return technology_id || techObject?.technology?.id;
  };

  const techIsNotCreatedYet = !getTechnologyId();

  const params = useParams()


  if (techIsNotCreatedYet) {
    TABS = TABS.map((tab) => {
      if (UNPROTECTED.includes(tab.key)) return tab;
      return { ...tab, deactivate: true };
    });
  }

  const { notify } = useBubblyBalloons();

  const inflate = (techObject) => {
    const { summary, image, description, name, coaches, help_link } = techObject || {};
    if (!techIsNotCreatedYet) {
      // Will only run when updating "information", not creating (cos at that time, techObject is null...)
      setInformation({ summary, image: image?.url, description, name, help_link });
    }
    setCoaches(coaches);
  };

  const updateTechObject = (data) => {
    const obj = { ...techObject, ...(data || {}) };
    setTechObject(obj);
    setNewTechnologyDetails(obj)
    inflate(obj);
  };

  const {
    data: technologyData,
    error: technologyError,
    isValidating: technologyIsValidating,
    isLoading: technologyIsLoading,
  } = useSWR(technology_id ? `/technologies.info?id=${technology_id}` : null,
    async () => {
      return await fetchTechnology(technology_id);
    },
    {
      onSuccess: (data) => {
        setTechObject(data);
        setNewTechnologyDetails(data);
        inflate(data);
      },
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      errorRetryCount: 1,
    },
  );

  const prevTechnologyData = usePrevious(technologyData);

  useEffect(() => {
    if (prevTechnologyData === undefined && technologyData !== undefined) {
      setTechObject(technologyData);
      setNewTechnologyDetails(technologyData);
      inflate(technologyData);
    }
  }, [prevTechnologyData, technologyData, setNewTechnologyDetails]);

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
    return (
      <Col>
        {/*</Link>*/}
        {TABS?.map((tab) => {
          return (
            activeTab === tab?.key && (
              <tab.component
                key={tab?.key}
                techObject={techObject}
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

  if (technologyIsLoading) {
    return (
      <Container className="d-flex m-auto" style={{ height: "70vh" }}>
        <HorizontalPushLoader className={"mt-5"}/>
      </Container>
    );
  }

  return (
    <div className={"p-3 mt-2"}>
      {/*region Header*/}
      <Row className="overflow-scroll">
        <Col>
          <Row className="w-10 justify-content-between">
            <Col md="auto">
              <BackButton />
            </Col>
            <Col>
              <h4 className="text-center">{information?.name|| ""}</h4>
            </Col>
            <Col md="auto">
              {(technology_id ||
                techObject?.technology?.id) && (
                 <Button
                   variant="primary"
                   onClick={() => {
                     window.open(
                       `/campaign/${campaign_id}/technology/${campaign_technology_id}?preview=true`,
                       "_blank",
                     );
                   }}
                 >
                   Preview Technology <FontAwesomeIcon icon={faExternalLink} />
                 </Button>
               )}
            </Col>
          </Row>

          <div className="nav-tabs-container" style={{ marginTop: 10 }}>
            {TABS?.map(({ key, name, deactivate }) => {
              return (
                <div
                  tabIndex={0}
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
      <Row className="">{renderTabs()}</Row>
      {/*endregion*/}

      {/*region Footer*/}
      {/*endregion*/}
    </div>
  );
}
