import { SideBar } from "../layout-components/side-bar/side-bar";
import { Col, Row } from "react-bootstrap";
import { SWRConfig } from "swr";
import { fetchData } from "../helpers/utils/http";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout(props: AdminLayoutProps) {
  const { children } = props;
  return (
    <SWRConfig value={{ dedupingInterval : 5000, fetcher : fetchData }}>
    <Row>
      <Col md={"auto"}>
        <SideBar />
      </Col>
      <Col>{children}</Col>
    </Row>
    </SWRConfig>
  );
}
