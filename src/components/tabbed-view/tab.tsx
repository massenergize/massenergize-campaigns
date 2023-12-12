import classes from "classnames";

export interface TabProps {
  label?: string
  active?: boolean
  onClick?: (index: number) => void
  children: any
}

export function Tab ({ label, active, children } : TabProps) {
  return (
    <div className={classes({active})}>
      {
        children.length > 0 ? (children) : (
          <h5>{label}</h5>
        )
      }
    </div>
  )
}
