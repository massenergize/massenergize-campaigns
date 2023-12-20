import { Col, Row } from "react-bootstrap";
import { SWRConfig } from "swr";
import { fetchData } from "../helpers/utils/http";

import { useNavigate } from "react-router-dom";
import { Sidebar } from "@kehillahglobal/ui";

import { BOTTOM_MENU, SIDE_BAR_MENU } from "../layout-components/sidebarMenu";
import { useState } from "react";
import classes from "classnames";
import { logUserOut } from "../redux/actions/actions";
import { apiCall } from "../api/messenger";
import { BubblyBalloonProvider } from "../components/bubbly-balloon/bubbly-balloon-context";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout (props: AdminLayoutProps) {
  const { children } = props;
  const [shrink, setShrink] = useState(true);

  const navigate = useNavigate();

  const userInfo = {};
  return (
    <BubblyBalloonProvider>
      <SWRConfig value={{ dedupingInterval: 500000, fetcher: fetchData }}>
        <Row className={"overflow-hidden mx-0"}>
          <Col md={"auto"} className={classes(" side-bar-container position-relative px-0", { shrink })}>
            <Sidebar
              header={"Kehillah Global"}
              menu={SIDE_BAR_MENU}
              bottomMenu={BOTTOM_MENU}
              userDetails={userInfo}
              dark={true}
              onTabItemClick={(e, { link, name }) => {
                if (!link && name === "SignOut") {
                  const iAmSureIWantToLogOut = window.confirm(
                    "Are you sure you want to sign out?"
                  );
                  if (iAmSureIWantToLogOut) {
                    apiCall("/auth.logout",).then((res) => {
                      if (res.success) {
                        logUserOut()
                        // window.location.href = "/login";
                      }
                    });
                  }
                }
                navigate(link);
              }}
              onShrinkBtnClick={(data) => {
                console.log("Shrink button clicked", data);
              }}
              onStateChange={({ shrink }) => {
                setShrink(shrink);
              }}
            />
          </Col>
          <Col>{children}</Col>
        </Row>
      </SWRConfig>
    </BubblyBalloonProvider>
  );
}
