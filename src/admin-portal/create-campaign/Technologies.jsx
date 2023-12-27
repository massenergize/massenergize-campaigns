import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/styles/admin-styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ProgressButton } from "../../components/progress-button/progress-button";
import { MultiSelect } from "react-multi-select-component";
import { Card } from "react-bootstrap";
import { addLabelsAndValues, diffArray } from "../../helpers/utils/array";
import Chip from "../../components/admin-components/Chip";

const Technologies = ({ campaignDetails, setCampaignDetails, setStep, lists }) => {
  const { technologies } = campaignDetails;

  const navigate = useNavigate();

  const {
    allTechnologies,
  } = lists;

  const originalTechnologies = Object.assign([], technologies);

  const handleRemove = (data) => {
    const filteredTechnologies = technologies.filter((tech) => tech.id !== data.id);
    setCampaignDetails("technologies", filteredTechnologies);
  };

  const handleSubmit = (e) => {
  }

  const enableSave = () => {
    // let's check if the form has changed
    if (originalTechnologies?.length !== technologies?.length) {
      return true;
    }
    // if the lengths are the same, we need to check if the values are the same
    // we can do this by checking if the ids are the same
    let changed = false;
    for (let i = 0; i < originalTechnologies?.length; i++) {
      if (originalTechnologies[i]?.id !== technologies[i]?.id) {
        changed = true;
        break;
      }
    }
    return changed;
  }

  // console.log("technologies", technologies, allTechnologies.data)
  return (
    // <m.div initial={{ y: " 10%" }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
    <Container>
      <form>
        <Row>
          <Col>
            <p>Choose one or more technologies for your campaign from the dropdown below.</p>
            <small className={"text-muted"}>
              If you don't see the technology you're looking for, you can {" "}
              <Link className="theme-color text-link" to={"/admin/campaign/create-technology"}>
                Create a new technology.
              </Link>
            </small>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <MultiSelect
              options={allTechnologies.data}
              value={addLabelsAndValues(technologies)}
              valueRenderer={(selected, _options) => {
                if (selected?.length < 1) {
                  return "Select Technologies...";
                }

                if (selected?.length === allTechnologies?.data?.length) {
                  return "All Selected";
                }

                return selected.map(({label, id}, i) => {
                  return label + (i < allTechnologies?.data?.length ? ", " : "");
                  /*return <Chip size={"sm"} text={label} id={id} onDismiss={() => {
                    handleRemove({id})
                  }}/>*/
                })
              }}
              onChange={(val) => {
                setCampaignDetails("technologies", val);
              }}
              labelledBy="Select"
            />
          </Col>
        </Row>

        <Row className="mt-4 pb-4 justify-content-start">{
          technologies.map((tech) => {
            let image = tech?.image?.url;
            const { id, name, } = tech;

            return (
              <Col md={3} className={"mb-3 h-100"} style={{ height: 300 }}>
                {/*<Link to={`/admin/campaign/edit-technology/${id}`} className="image-edit-btn">*/}
                  <Card style={{ width: '18rem' }} className={"position-relative"}>
                    <Card.Body>
                      <Card.Img variant="top" src={image}/>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{name}</Card.Text>
                    </Card.Body>

                    <span onClick={() => {handleRemove(tech);}} className="image-close-btn d-flex">
                    <FontAwesomeIcon icon={faClose} className={"m-auto"}/>
                  </span>
                  </Card>
                {/*</Link>*/}

                {/*<div key={tech?.id} className={"border rounded position-relative"}>
                    <div className="small-image-container rounded" style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}>
                      <img className={classes("small-image ", { "d-none": image })}
                           src={image}
                           alt=""
                           onError={() => {
                             image = "/img/fallback-img.png"
                           }}/>
                    </div>
                    <p className="text-center pb-3 small-image-text light-gray-back rounded mb-0">{tech?.name}</p>
                    <span onClick={() => {
                      handleRemove(tech);
                    }} className="image-close-btn">
                    <FontAwesomeIcon icon={faClose}/>
                  </span>
                  </div>*/}
              </Col>);
          })}
        </Row>

        <Row className="mt-4 py-4 justify-content-end">
          <Col className="mt-4 py-4">
            <ProgressButton
              text="Save Changes"
              onClick={handleSubmit}
              rounded={false}
              disabled={diffArray(technologies, originalTechnologies, function (a, b) {
                if (a.length !== b.length) {
                  return false;
                }
                for (let i = 0; i < a.length; i++) {
                  if (a[i].id !== b[i].id) {
                    return false;
                  }
                }
                return true;
              } )}
            >Save Changes</ProgressButton>
          </Col>
        </Row>
      </form>
    </Container>
    // </m.div>
  );
};

export default Technologies;
