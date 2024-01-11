import classes from "classnames";
import "./horizontal-loader.scss";

export function HorizontalLoader ({ className = "", loading = true } : { className?: string, loading?: boolean }) {

  if (!loading) {
    return null;
  }

  return (
    <div className={classes(`horizontal-bar-wrap`, className)}>
      <div className="bar1 bar"></div>
      {/*<div className="bar2 bar"></div>*/}
      {/*<div className="bar3 bar"></div>*/}
      {/*<div className="bar4 bar"></div>*/}
    </div>
  )
}
