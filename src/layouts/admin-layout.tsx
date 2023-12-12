import { SideBar } from "../layout-components/side-bar/side-bar";
import { Col, Row } from "react-bootstrap";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout(props: AdminLayoutProps) {
  const { children } = props;
  return (
    <Row>
      <Col md={"auto"}>
        <SideBar />
      </Col>
      <Col>{children}</Col>
    </Row>
  );
}
