import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBan, faBullhorn, faChartLine, faPenToSquare, } from "@fortawesome/free-solid-svg-icons";
import StatsCard from "../../../../components/admin-components/StatsCard";
import { statsData } from "../../../../utils/Constants";
import Comments from "../../../../components/admin-components/Comments";
import Testimonials from "../../../../components/admin-components/Testimonials";
import classes from "classnames";
// import Button from "../../../../components/admin-components/Button";
import useSWR from "swr";
import { fetchCampaign } from "../../../../requests/campaign-requests";
import { useParams } from "react-router-dom";
import NProgress from 'nprogress';
import { AdminLayout } from "../../../../layouts/admin-layout";

export function CampaignStatistics ({}) {
  const { id } = useParams();
  const data = statsData;

  const statistics = Object.entries(statsData?.data);

  const tabs = [
    {
      name: "Comments",
      component: Comments,
    },
    {
      name: "Testimonials",
      component: Testimonials,
    },
  ];

  const {
    data: campaign,
    error: campaignError,
    isValidating: campaignValidating,
    isLoading: campaignLoading
  } = useSWR(`campaigns.info/${id}`, async () => {
    return await fetchCampaign("campaigns.info", id);
  });

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    if (campaignLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [campaignLoading]);

  const [activeTab, setActiveTab] = useState(tabs[0]?.name);

  const CAMPAIGN = campaign ? {
    stats: {
      shares: [
        {
          utm_medium: "email",
          count: 1,
        },
        {
          utm_medium: "Whatsapp",
          count: 2,
        },
      ],
      likes: [
        {
          technology: "Community Solar",
          count: 1,
        },
        {
          technology: "Heat Pump",
          count: 1,
        },
      ],
      views: [
        {
          technology: "Change Name",
          count: 1,
        },
        {
          technology: "Community Solar",
          count: 2,
        },
      ],
      followers: [
        {
          community: 24,
          count: 5,
        },
      ],
      comments: [
        {
          technology: "Community Solar",
          count: 2,
        },
      ],
      testimonials: [
        {
          technology: "Change Name",
          count: 4,
        },
        {
          technology: "Community Solar",
          count: 4,
        },
        {
          technology: "Heat Pump",
          count: 3,
        },
      ],
    },
    ...campaign
  } : null;

  console.log({ CAMPAIGN })

  return (
    <AdminLayout>
      <Container fluid className={""}>
        <Row>
          {/*region campaign content*/}
          {
            !campaignLoading && !campaignError ? (
              <Col>
                <div className="gradient-bg">
                  <Container>
                    <Row>
                      <Col>
                        <Row className="d-flex campaign-text justify-content-end">
                          {/*<h3 className="">CAMPAIGN</h3>*/}

                          <Col md={"auto"}>
                            <Button className="disable-btn mr-3" onClick={() => {
                              window.history.back();
                            }}>
                              <FontAwesomeIcon icon={faArrowLeft}/>
                            </Button>
                            &nbsp;
                            <Button className="disable-btn">
                              <FontAwesomeIcon icon={faBan}/> Unpublish
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <Container className="title--container">
                  <Row>
                    <Col className="update-btn-con">
                      <button className="update-btn">
                        <FontAwesomeIcon icon={faPenToSquare}/> Update
                      </button>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mt-4">
                      <h3 className="title-txt">
                        <FontAwesomeIcon icon={faBullhorn} style={{ marginRight: "5px" }}/>{" "}WAYLAND ENERGY CAMPAIGN
                      </h3>
                      <p className="mt-4">
                        You are required to complete this section before you gain access
                        to the other sections (tagline){" "}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mt-4">
                      <div className="d-flex gap-5">
                        <p className="camp-date">
                          Start Date : <span>27th Jun 2020</span>
                        </p>
                        <p className="camp-date">
                          End Date : <span>27th Aug 2020 </span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>

                <Container className="stats-cont">
                  <Row>
                    <Col>
                      <h3 className="text-decoration-underline pt-4">
                        Campaign Statistics{" "}
                        <span>
									<FontAwesomeIcon icon={faChartLine}/>
								</span>
                      </h3>
                      <div className="statss-con-div">
                        {statistics?.map((data, index) => {
                          return (
                            <div key={index}>
                              <StatsCard data={data} index={index}/>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <Button
                          text="Download Data File"
                          // onSubmit={handleClick}
                          rounded={false}
                          // icon={faPlus}
                        />{" "}
                      </div>
                    </Col>
                  </Row>
                </Container>

                <Container className="my-4">
                  <Row className="mt-4">
                    <div className="nav-tabs-container mt-4">
                      {tabs?.map((tab) => (
                        <div
                          key={tab?.name}
                          className={classes("nav-tabs-main tab", {
                            "tab-active": activeTab === tab?.name,
                          })}
                          onClick={() => setActiveTab(tab?.name)}
                        >
                          <h5 className={classes("nav-tabs")}>{tab?.name}</h5>
                        </div>
                      ))}
                    </div>
                    <Col className="mt-4"></Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="mt-4"></Col>
                  </Row>
                  <Row className="">
                    <Col>
                      {tabs?.map((tab) => {
                        return (
                          activeTab === tab?.name && <tab.component key={tab?.name}/>
                        );
                      })}
                    </Col>
                  </Row>
                </Container>
              </Col>
            ) : null
          }
          {/*endregion*/}

          {/*region error and loader*/}
          {
            !campaignLoading && campaignError ? (
              <Col>
                <h5>An error occured</h5>
              </Col>
            ) : null
          }

          {
            campaignLoading ? (
              <Col>
                <h5>Loading...</h5>
              </Col>
            ) : null
          }
        </Row>
      </Container>
    </AdminLayout>
  );
}
