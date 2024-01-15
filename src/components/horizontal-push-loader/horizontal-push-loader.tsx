import "./horizontal-push-loader.scss"
export function HorizontalPushLoader ({className = ""}: {className?: string}) {
  return <div className={"pusher " + className}></div>;
}
