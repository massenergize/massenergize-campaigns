import { Col, Row } from "react-bootstrap";
import { SWRConfig } from "swr";
import { fetchData } from "../helpers/utils/http";

import { useNavigate } from "react-router-dom";
import { Sidebar } from "@kehillahglobal/ui";

import { BOTTOM_MENU, SIDE_BAR_MENU } from "../layout-components/sidebarMenu";
import { useState } from "react";
import classes from "classnames";
import { apiCall } from "../api/messenger";
import AuthGuard from "../guards/AuthGuard";
import {useDispatch, useSelector} from "react-redux";
import {logUserOut, setCampaignAccountAction} from "../redux/actions/actions";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout (props: AdminLayoutProps) {
  const { children } = props;
  const [shrink, setShrink] = useState(true);
  const user = useSelector((state: any) => state.authAdmin);
  const account = useSelector((state: any) => state.campaignAccount);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = {
      userName: user?.full_name,
      role: user?.is_super_admin ? "Super Admin" : "Admin",
      userImage: user?.profile_picture?.url,
      companyName: account?.name,
  };
  return (

    <SWRConfig value={{ dedupingInterval: 500000, fetcher: fetchData }}>
      {/* @ts-ignore*/}
      <AuthGuard>
      <Row className={"overflow-hidden mx-0"}>
        <Col md={"auto"} className={classes(" side-bar-container position-relative px-0", { shrink })}>
          <Sidebar
            header={"Kehillah Global"}
            menu={SIDE_BAR_MENU}
            bottomMenu={BOTTOM_MENU}
            userDetails={userInfo}
            accounts={user?.campaign_accounts?.length > 1 ? user?.campaign_accounts : []}
            onItemSelect={(item: any) => {
              dispatch(setCampaignAccountAction(item))
              let encoded = btoa(JSON.stringify(item));
              localStorage.setItem("acc", encoded);
              window.location.href = `/admin/home`;
            }}
            dark={true}
            onTabItemClick={(e: any, { link, name }: any) => {
              if (!link && name === "SignOut") {
                const iAmSureIWantToLogOut = window.confirm(
                  "Are you sure you want to sign out?"
                );
                if (iAmSureIWantToLogOut) {
                  apiCall("/auth.logout",).then((res) => {
                    if (res.success) {
                      logUserOut()
                      localStorage.removeItem("acc");
                      window.location.href = "/login";
                    }
                  });
                }
              }
              navigate(link);
            }}
            onShrinkBtnClick={(data: any) => {
              console.log("Shrink button clicked", data);
            }}
            onStateChange={({ shrink }) => {
              setShrink(shrink);
            }}
            verified={user?.is_super_admin}
          />
        </Col>
        <Col>{children}</Col>
      </Row>
      </AuthGuard>
    </SWRConfig>
  );
}
