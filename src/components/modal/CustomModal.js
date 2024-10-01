import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { CAMPAIGN_TEMPLATE_KEYS } from "../../utils/Values";

const DEFAULT_THEME = {
  header: {
    background: "var(--app-main-color)",
    color: "white",
    padding: "10px 25px",
  },
  footer: {
    background: "black",
    padding: "5px 15px",
    height: "100%",
    margin: 0,
  },
};

function CustomModal(props) {
  const { show, component, modalNativeProps, fullControl, style, close, themeKey } = props || {};
  if (!show) return <></>;
  const styles = { ...(style || {}), ...(fullControl ? { padding: 0 } : {}) };

  const THEMES = {
    [CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT]: {
      header: {
        background: "var(--spt-main-color)",
      },
      footer: {
        background: "black",
        padding: "5px 15px",
        height: "100%",
        margin: 0,
      },
    },
    [CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2]: {
      header: {
        background: "var(--spt-v2-color-1)",
      },
      footer: {
        background: "white",
        padding: "5px 15px",
        height: "100%",
        margin: 0,
      },
    },
  };

  const theme = THEMES[themeKey] || DEFAULT_THEME;

  const renderComponent = () => {
    if (!component) return <></>;
    return component({ close });
  };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      style={styles}
      {...(modalNativeProps || {})}
    >
      <SmartHeader {...props} theme={theme} />
      {fullControl ? (
        <Modal.Body style={{ padding: 0 }}>{renderComponent()}</Modal.Body>
      ) : (
        <>
          <Modal.Body>{renderComponent()}</Modal.Body>
          <SmartFooter {...props} />
        </>
      )}
    </Modal>
  );
}

export default CustomModal;

const SmartHeader = ({ theme, renderHeader, close, title, imgSrc, iconName, noHeader }) => {
  if (noHeader) return <></>;
  if (renderHeader) return renderHeader();

  const renderHeaderMedia = () => {
    if (imgSrc)
      return (
        <img
          src={imgSrc || "https://i.pravatar.cc/300"}
          style={{
            borderRadius: "100%",
            width: 25,
            height: 25,
            marginBlock: 10,
            marginRight: 10,
          }}
          alt={""}
        ></img>
      );

    if (iconName) return <i className={`fa ${iconName}`} style={{ fontSize: 19, color: "white", marginRight: 6 }} />;

    return <></>;
  };
  return (
    <Modal.Header
      style={{
        background: "var(--app-main-color)",
        color: "white",
        padding: "10px 25px",
        ...(theme?.header || {}),
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {renderHeaderMedia()}
        <Modal.Title id="contained-modal-title-vcenter body-font">{title || "..."}</Modal.Title>
      </div>
      <Button
        className="touchable-opacity"
        variant="link"
        style={{ color: "white", textDecoration: "none" }}
        onClick={() => close && close()}
      >
        <span aria-hidden="true" className="fa fa-times" style={{ fontSize: 20 }}></span>
      </Button>
    </Modal.Header>
  );
};

const SmartFooter = ({ renderFooter, close, noFooter, theme }) => {
  if (noFooter) return <></>;
  if (renderFooter) return renderFooter();
  return (
    <Modal.Footer style={{ padding: 0, fontWeight: "bold" }}>
      <div
        className="touchable-opacity"
        style={{
          background: "black",
          padding: "5px 15px",
          height: "100%",
          margin: 0,
          ...(theme?.footer || {}),
        }}
        onClick={() => close && close()}
      >
        <p
          style={{
            color: "white",
            margin: 0,
            padding: "7px 20px",
          }}
        >
          CLOSE
        </p>
      </div>
      <div
        className="touchable-opacity"
        style={{
          background: "var(--app-main-color)",
          padding: "5px 15px",
          height: "100%",
          margin: 0,
          borderBottomRightRadius: 5,
        }}
        onClick={() => window.open("http://google.com", "_blank")}
      >
        <p
          style={{
            color: "white",
            margin: 0,
            padding: "7px 20px",
          }}
        >
          GO
        </p>
      </div>
    </Modal.Footer>
  );
};
