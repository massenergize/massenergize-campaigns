import {useState} from "react";
import { ReactElement } from "react";
import { TabbedViewHead } from "./tabbed-view-head";
import { TabPane } from "./tab-pane";

interface TabbedViewProps {
  tabs: Array<{ label?: string, children: any }>
  activeTab: number
  panes: Array<ReactElement>
  children: any
}

export function TabbedView ({ tabs, activeTab, children }: TabbedViewProps) {
  const [state, setState] = useState({
    activeTab: activeTab
  });

  const setActiveTab = (index: number) => {
    setState({
      activeTab: index
    })
  }

  return (
    <div>
      <TabbedViewHead tabs={tabs} setActiveTab={setActiveTab}/>

      {
        children.length > 0 ? children[state.activeTab] : children[0]
      }
    </div>
  )
}
