import { Button, ButtonProps } from "react-bootstrap";
import "./progress-button.scss";

interface ProgressButtonProps extends ButtonProps {
  loading?: boolean;
  progressRingSize?: number;
  progressRingColor?: string;
}

export function ProgressButton ({ loading = false, progressRingSize = 20, progressRingColor = "#fff", ...props }: ProgressButtonProps) {
  return (
    <Button {...props}>
      {!loading ? props.children : null}
      {/* {loading && (img src="/img/oval.svg" alt="loading spinner"/>)} */}

      {loading && (
        <svg id="check" className={loading ? "progress" : "ready"}
             version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 100 100" xmlSpace="preserve"
             style={{ width: progressRingSize + "px", height: progressRingSize + "px", backgroundColor : "transparent" }}
        >
          <circle id="circle" cx="50" cy="50" r="46" stroke={progressRingColor} fill="transparent"/>
          <polyline id="tick" stroke={progressRingColor} points="25,55 45,70 75,33" fill="transparent"/>
        </svg>)
      }
    </Button>
  )
}
