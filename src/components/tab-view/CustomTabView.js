import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const tabs = [
  {
    title: (
      <span>
        <i className=" fa fa-home" />
        <span style={{ color: "var(--app-medium-green)" }}> Home</span>
      </span>
    ),
    key: "heat-pump",
    component: <h1> this bruddah is short as hell</h1>,
  },
  {
    title: (
      <span>
        <i className=" fa fa-sun-o" /> Home Solar
      </span>
    ),
    key: "home-solar",
    component: <h1> this is the home solar if you ask me</h1>,
  },
  {
    title: (
      <span>
        <i className=" fa fa-sunshine" /> Community Solar
      </span>
    ),
    key: "community-solar",
    component: <h1> this is the community solar my geee</h1>,
  },
];

function CustomTabView({ data = [], defaultTab }) {
  const [key, setKey] = useState(defaultTab);
  const pageContent = data?.map((tab) => (
    <Tab eventKey={tab.key} key={tab?.key} title={tab.title}>
      {tab.component}
    </Tab>
  ));
  useEffect(() => {
    setKey(defaultTab);
  }, [defaultTab]);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      {pageContent}
    </Tabs>
  );
}

export default CustomTabView;
