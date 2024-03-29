import { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBan,
  faBullhorn,
  faDownload,
  faEye,
  faGlobe,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import StatsCard from "../../../../components/admin-components/StatsCard";
import Comments from "../../../../components/admin-components/Comments";
import Testimonials from "../../../../components/admin-components/Testimonials";
import classes from "classnames";
// import Button from "../../../../components/admin-components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AdminLayout } from "../../../../layouts/admin-layout";
import useSWR, { mutate } from "swr";
import {
  fetchCampaign,
  fetchCampaignStats,
  updateCampaign,
} from "../../../../requests/campaign-requests";
import { apiCall } from "../../../../api/messenger";
import Loading from "../../../../components/pieces/Loading";
import { useBubblyBalloons } from "../../../../lib/bubbly-balloon/use-bubbly-balloons";
import GhostLoader from "../../../../components/admin-components/GhostLoader";
import { daysOfWeek, monthsOfYear } from "../../../../utils/Constants";

export function CampaignStatistics({}) {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { blow, pop } = useBubblyBalloons();

  const {
    data: stats,
    isLoading: statsLoading,
    isValidating: statsValidating,
    error: statsError,
  } = useSWR(
    `campaign.stats.get-${id}`,
    async () => {
      return await fetchCampaignStats(id);
    },
    {
      onSuccess: (data) => {},
    },
  );

  if (!statsLoading && statsError) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">An error occurred</h3>
      </div>
    );
  }

  if(statsLoading){
    return <div className="text-center mt-5">
      <Loading/>
    </div>
  }

  const { campaign, ...rest } = stats;

  const statistics = Object.entries(rest || {});
  const mutateCampaign = (data) => {
    mutate(`campaign.stats.get-${id}`, {
      ...stats,
      campaign: { ...campaign, is_published: data?.is_published },
    });
  };

  const handleUpdateCampaign = async () => {
    setLoading(true);
    try {
      const res = await updateCampaign({
        is_published: !campaign?.is_published,
        id: campaign?.id,
      });
      if (res) {
        mutate(`campaign.stats.get-${id}`, {
          ...stats,
          campaign: { ...campaign, is_published: res?.is_published },
        });
        setLoading(false);
        blow({
          title: "Success",
          message: !res?.is_published
            ? "Campaign published successfully"
            : "Campaign unpublished successfully",
          type: "success",
          timeout: false,
        });
      }
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: "An error occurred",
        type: "danger",
        timeout: false,
      });
    }
  };

  const formatDate = (date) => {
    let d = new Date(date);
    let d_date = d.getDate();
    let day = daysOfWeek[d.getDay()];
    let month = monthsOfYear[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${d_date} ${month} ${year} `;
  };

  return (
    <AdminLayout>
      <Container fluid className={"pb-5"}>
        {loading && <GhostLoader />}
        {/*region campaign content*/}
        <Row
          className="gradient-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		              url(${campaign?.image})`,
          }}
        >
          <Col>
            <Container className={"px-5"} style={{ maxWidth: "100" }}>
              <Row className="campaign-text justify-content-end">
                <Col>
                  <h3 className="">CAMPAIGN</h3>
                </Col>

                    <Col md={"auto"}>
                      <Button
                        className="btn-light mr-3"
                        onClick={() => {
                          window.history.back();
                        }}
                      >
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                      </Button>
                      &nbsp;
                      <ButtonGroup>
                        <Button
                          variant="warning"
                          onClick={() => {
                            window.open(`/campaign/${id}?preview=true`, "_blank");
                          }}
                        >
                          <FontAwesomeIcon icon={faEye} /> Sandbox Mode
                        </Button>
                        <Button
                          className={
                            campaign?.is_published ? "disable-btn" : "btn-primary"
                          }
                          onClick={() => {
                            handleUpdateCampaign();
                          }}
                        >
                          <FontAwesomeIcon
                            icon={campaign?.is_published ? faBan : faGlobe}
                          />{" "}
                          {campaign?.is_published ? "Unpublish" : "Publish"}
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>

        <Container className={"px-5"} style={{ maxWidth: "100" }}>
          <Row>
            <Col
              className="title--container rounded-4 py-5"
              style={{ paddingLeft: "3.6rem", paddingRight: "3.6rem" }}
            >
              <Row>
                <Col className="mt-4">
                  <h3 className="title-txt">
                    <FontAwesomeIcon
                      icon={faBullhorn}
                      style={{ marginRight: "5px" }}
                    />{" "}
                    {campaign?.title}
                  </h3>
                  <p className="mt-4">{campaign?.tagline}</p>
                  <Row>
                    <Col className="mt-4">
                      <div className="d-flex gap-5">
                        <p className="camp-date">
                          Start Date :{" "}
                          <span>
                            {campaign?.start_date
                              ? formatDate(campaign?.start_date)
                              : "Not specified"}
                          </span>
                        </p>
                        <p className="camp-date">
                          End Date :{" "}
                          <span>
                            {campaign?.end_date
                              ? formatDate(campaign?.end_date)
                              : "Not specified"}
                          </span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col className="update-btn-con">
                  <p className={campaign?.is_published ? "active" : "inactive"}></p>
                  <Link
                    target="_blank"
                    className="update-btn btn btn-primary py-2 px-3"
                    to={`/admin/campaign/${id}/edit`}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} /> Update
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className=" pt-4">
                Campaign Statistics{" "}
                {/*<span><FontAwesomeIcon icon={faChartLine}/></span>*/}
              </h3>
              <div className="statss-con-div row">
                {statistics?.map((data, index) => {
                  return (
                    <div key={index} className="col-md-3 mb-4">
                      <StatsCard data={data} index={index} />
                    </div>
                  );
                })}
              </div>
              <div>
                <Button
                  className="btn-success mr-3"
                  onClick={() => {
                    apiCall("/downloads.campaigns.performance", {
                      campaign_id: id,
                    }).then((res) => {
                      if (res?.success) {
                        // 	show a message asking user to check email
                        blow({
                          title: "Success",
                          message:
                            "File sent to your email. Please check your email",
                          type: "success",
                          timeout: false,
                        });
                      }
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faDownload} /> Download Data File
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/*endregion*/}

        {/*region error and loader*/}
      </Container>
    </AdminLayout>
  );
}
