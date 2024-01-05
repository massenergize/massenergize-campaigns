import { Button, Col, Row } from "react-bootstrap";
import { AdminLayout } from "../../../layouts/admin-layout";
import { AllCampaignsView } from "../../../views/all-campaigns-view";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useBubblyBalloons } from "../../../lib/bubbly-balloon/use-bubbly-balloons";
import { Link } from "react-router-dom";

export function AllCampaigns() {
  const { blow, pop } = useBubblyBalloons();
  return (
    <AdminLayout>
      <Row className={"px-4"}>
        <Col>
          {/*region Header*/}
          <Row
            lg={{ gutter: 0 }}
            className="py-4 overflow-scroll gap-0 no-gutters g justify-content-between"
          >
            <Col>
              <div className="nav-tabs-container"></div>
            </Col>
            <Col md="auto">
              {/*<Button primary className="rounded-1 primary"
              onClick={() => {
                blow({
                  title: "New Campaign",
                  message: "This feature is not available yet",
                  type: "info",
                  timeout : false
                })

                const balloon = blow({
                  title: "Success",
                  message: "Campaign information saved successfully",
                  type: "success",
                  // duration: 5000,
                });
              }}
              >
                <FontAwesomeIcon icon={faPlus}/> New Campaign
              </Button>*/}

              <Link to={"/admin/campaign/new"}>
                <Button variant="success" className="rounded-1">
                  <FontAwesomeIcon icon={faPlus} /> New Campaign
                </Button>
              </Link>
            </Col>
          </Row>
          {/*endregion*/}

          {/*region Body: Content goes here*/}
          <Row className=" pt-4">
            <Col>
              <AllCampaignsView />
            </Col>
          </Row>
          {/*endregion*/}

          {/*region Footer*/}

          {/*endregion*/}
        </Col>
      </Row>
    </AdminLayout>
  );
}
