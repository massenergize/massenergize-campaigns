export interface TabPaneProps {
  children: any
  active?: boolean
}

export function TabPane ({children, active } :TabPaneProps) {
  return (
    <div>{children}</div>
  )
}
