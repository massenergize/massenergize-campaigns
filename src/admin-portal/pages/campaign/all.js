import { Button, Col, Row } from "react-bootstrap";
import { AdminLayout } from "../../../layouts/admin-layout";
import { AllCampaignsView } from "../../../views/all-campaigns-view";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useBubblyBalloons } from "../../../lib/bubbly-balloon/use-bubbly-balloons";
import { Link } from "react-router-dom";
import Searchbar from "../../../components/admin-components/Searchbar";

export function AllCampaigns() {
  const { blow, pop } = useBubblyBalloons();
  return (
    <AdminLayout>
      <Row className={"px-4"}>
        <Col>
          {/*region Header*/}
          <Row
            style={{ alignItems: "center" }}
            lg={{ gutter: 0 }}
            className=" mt-5 overflow-scroll gap-0 no-gutters g justify-content-between"
          >
            <Col>
              <h3>All Campaigns</h3>
            </Col>
            <Col md="auto">
              <Link to={"/admin/campaign/new"}>
                <Button variant="success" className="rounded-1">
                  <FontAwesomeIcon icon={faPlus} /> New Campaign
                </Button>
              </Link>
            </Col>
          </Row>
          {/*endregion*/}

          {/*region Body: Content goes here*/}
          {/* <Row>
            <Col>
              <Searchbar />
            </Col>
          </Row> */}
          <Row className=" pt-1">
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
