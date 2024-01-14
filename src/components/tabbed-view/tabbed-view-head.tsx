import { Tab, TabProps } from './tab'

interface TabbedViewHeadProps {
  tabs: Array<TabProps>
  setActiveTab: (index: number) => void
}

export function TabbedViewHead ({tabs, setActiveTab} : TabbedViewHeadProps) {

  return (
    <div>
      {
        tabs.map(({ label, active, children }, index) => (
          <Tab key={index} active={active} label={label} onClick={() => {
            setActiveTab(index)
          }}>
            {children}
          </Tab>
        ))
      }
    </div>
  )
}
