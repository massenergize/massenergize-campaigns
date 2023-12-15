import { Button, ButtonProps } from "react-bootstrap";

interface ProgressButtonProps extends ButtonProps {
  loading?: boolean;
}

export function ProgressButton ({ loading = false, ...props} : ProgressButtonProps) {
  return (
    <Button {...props}>
      {!loading ? props.children : null}
      {loading && (
        <img src="/img/oval.svg" alt="loading spinner"/>
      )}
    </Button>
  )
}
