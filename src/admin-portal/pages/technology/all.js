import { Col, Row } from "react-bootstrap";
import { AdminLayout } from "../../../layouts/admin-layout";
import { AllCampaignsView } from "../../../views/all-campaigns-view";


export function AllTechnologies () {

  return (
    <AdminLayout>
      <Row style={{ padding: "1rem", }}>
        <Col>
          {/*region Header*/}
          <Row lg={{ gutter: 0 }} className="pb-4 overflow-scroll gap-0 no-gutters g">
            <Col>
              <div className="nav-tabs-container"></div>
            </Col>
          </Row>
          {/*endregion*/}

          {/*region Body: Content goes here*/}
          <Row className="mt-4 pt-4">
            <Col>
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
