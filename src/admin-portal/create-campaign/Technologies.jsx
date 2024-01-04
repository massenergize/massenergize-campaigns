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
import { addLabelsAndValues } from "../../helpers/utils/array";
import { useCampaignContext } from "../../hooks/use-campaign-context";
import { useBubblyBalloons } from "../../lib/bubbly-balloon/use-bubbly-balloons";
import { updateCampaignTechnologies } from "../../requests/campaign-requests";

function Technology ({ tech, handleRemove }) {
  let image = tech?.image?.url;
  const { id, name, } = tech;
  const navigate = useNavigate();

  return (
    // <Link to={`/admin/campaign/edit-technology/${id}`} className="image-edit-btn">
    <Card className={"position-relative"} onClick={()=> navigate(`/admin/campaign/${tech?.campaign_id}/technology/${tech?.id}/`)}>
      <Card.Body className={"p-0"}>
        <Card.Img variant="top" src={image} style={{ height: 280 }}/>
      </Card.Body>
      <Card.Footer>
        <Card.Title className={"mb-0"}>{name}</Card.Title>
        <Card.Text>{name}</Card.Text>
      </Card.Footer>

      <span onClick={() => {
        handleRemove(tech);
      }} className="image-close-btn d-flex">
      <FontAwesomeIcon icon={faClose} className={"m-auto"}/>
    </span>
    </Card>
    // </Link>
  )
}

const Technologies = ({}) => {
  const navigate = useNavigate();

  const { notify, pop } = useBubblyBalloons();
  const {
    campaignDetails,
    originalCampaignDetails,
    lists,
    handleCampaignDetailsChange,
    setNewCampaignDetails,
  } = useCampaignContext();

  const { technologies } = campaignDetails;
  const { allTechnologies, } = lists;

  const originalTechnologies = originalCampaignDetails.technologies;
  const originalTechnologiesSet = new Set(originalCampaignDetails?.technologies?.map((tech) => tech.id));

  const handleRemove = (data) => {
    const filteredTechnologies = technologies.filter((tech) => tech.id !== data.id);
    handleCampaignDetailsChange("technologies", filteredTechnologies);
  };

  const handleSubmit = async (e) => {
    try {
      const payload = {
        campaign_id: campaignDetails?.id,
        technology_ids: technologies.map((tech) => tech.id),
      };

      const res = await updateCampaignTechnologies(payload);

      if (res) {
        notify({
          title: "Success",
          message: "Campaign Technologies updated successfully.",
          type: "success",
          timeout: 15000,
        })
      }
    } catch (e) {
      notify({
        title: "Error",
        message: "Something went wrong. Please try again later.",
        type: "error",
        timeout: 15000,
      })
    }
  }

  let listChanged = false;
  const TECHNOLOGIES_SIZE = technologies?.length;
  const ORIGINAL_TECHNOLOGIES_SIZE = originalTechnologies?.length;

  if (ORIGINAL_TECHNOLOGIES_SIZE !== TECHNOLOGIES_SIZE) {
    listChanged = true;
  } else {
    for (let i = 0; i < TECHNOLOGIES_SIZE; i++) {
      if (!originalTechnologiesSet.has(technologies[i]?.id)) {
        listChanged = true;
        break;
      }
    }
  }

  let notification = null;

  return (
    <Container>
      <form>
        <Row className="">
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

                return selected.map(({ label, id }, i) => {
                  return label + (i < allTechnologies?.data?.length ? ", " : "");
                })
              }}
              onChange={(val) => {
                if (!(val?.length < 1)) {
                  handleCampaignDetailsChange("technologies", val);
                } else {
                  if (notification) {
                    console.log("=== notification ===", notification)
                    pop(notification)
                  }
                  notification = notify({
                    title: "Not Allowed",
                    message: "You must select at least one technology.",
                    type: "error",
                    timeout: 150000,
                    onClose: () => {
                      // notification = null;
                    }
                  })
                }
              }}
              labelledBy="Select"
            />
          </Col>
        </Row>
        {/*{
          TECHNOLOGIES_SIZE < 1 ? (
            <Row className="mt-4 pb-4 justify-content-center">
              <Col sm="auto" className={"py-5"}>
                <img src="/img/technology-illustration.svg" alt="No Technology Illustration"/>
                <h6 className={"text-center mt-4 mb-0"}>No technologies selected</h6>
                <p className={"text-center text-sm"}>
                  Please select one or more technologies from the dropdown above.
                </p>
              </Col>
            </Row>
          ) : null
        }
*/}
        <Row className="mt-4 pb-4 justify-content-start">
          {
            TECHNOLOGIES_SIZE > 0 ? <>
              {
                technologies.map((tech) => {
                  return (
                    <Col md={4} lg={3} className={"mb-3 px-2 h-100"}>
                      <Technology tech={tech} handleRemove={handleRemove} navigate={navigate}/>
                    </Col>
                  );
                })
              }
            </> : null
          }
          <Col md={4} lg={3} className={"mb-3 px-2 h-100"}>
            <Link to={`/admin/technology/new/${campaignDetails?.id}`}>
              <Card className={"position-relative border-dashed border-2"}>
                <Card.Body className={"p-0 bg-light-gray"}>
                  <Card.Img variant="" src="/img/add-new.svg" style={{ height: 180 }}/>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        {
          <Row className="mt-4 py-4 justify-content-end">
            <Col className="mt-4 py-4">
              <ProgressButton
                text="Save Changes"
                onClick={handleSubmit}
                rounded={false}
                disabled={listChanged === false || TECHNOLOGIES_SIZE < 1}
              >Save Changes</ProgressButton>
            </Col>
          </Row>
        }
      </form>
    </Container>
    // </m.div>
  );
};

export default Technologies;
