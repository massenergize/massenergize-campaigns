import React from 'react';
import { stripChars, toSentenceCase } from "../../helpers/utils/string";
import RenderHTML from "../RenderHtml";

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = { errorInfo : null, hasError : false, };
  }

  static getDerivedStateFromError (error, errorInfo) {
    // Update state so the next render will show the fallback UI.
    return { error, errorInfo, hasError : true, };
  }

  componentDidCatch (error, errorInfo) {
    // You can also log the error to an error reporting service
    //  logErrorToMyService(error, errorInfo);
    this.setState({ errorInfo });
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>
        <h1>Something went wrong.</h1>
        <h4>{toSentenceCase(this.state.error.message)}</h4>
        {
          this.state.errorInfo &&
          <RenderHTML html={stripChars(this.state.errorInfo.componentStack, "\n", "<br/>")} tag={"p"}/>
        }
      </div>;
    }
    return this.props.children;
  }
}
