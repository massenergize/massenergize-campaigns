import { Col, Row } from "react-bootstrap";
import { SWRConfig } from "swr";
import { fetchData } from "../helpers/utils/http";

import {useNavigate} from "react-router-dom"
import {Sidebar}  from "@kehillahglobal/ui"

import {SIDE_BAR_MENU} from "../layout-components/sidebarMenu";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout(props: AdminLayoutProps) {
  const { children } = props;

  const navigate = useNavigate();

  const userInfo = {}
  return (
    <SWRConfig value={{ dedupingInterval : 5000, fetcher : fetchData }}>
    <Row>
      <Col md={"auto"}>
        <Sidebar
          menu={SIDE_BAR_MENU}
          bottomMenu={[] }
          userDetails={userInfo}
          dark={true}
          onTabItemClick={(e, { link, name }) => {

            navigate(link);
          }}
          // onShrinkBtnClick={() => setSideRatio(SHRINK_SIDE_RATIO)}
          // onStateChange={handleSidebarStateChange}
        />
      </Col>
      <Col>{children}</Col>
    </Row>
    </SWRConfig>
  );
}
