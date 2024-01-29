import React, { useReducer, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { NoItems } from "@kehillahglobal/ui";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import Button from "../../components/admin-components/Button";
import { useDispatch, useSelector } from "react-redux";
import { createCampaignComment, deleteCampaignComment } from "../../requests/campaign-requests";
import { mutate } from "swr";
import { relativeTimeAgo } from "src/utils/utils";
import classes from "classnames"; // import Dropdown from "./Dropdown";
import { setCampaignCommentsAction } from "src/redux/actions/actions";

const Comments = ({ campaign, comments }) => {
  const { blow, pop } = useBubblyBalloons();

  // const [comments, setComments] = useState([...campaignComments]);
  const reduxDispatch = useDispatch();

  const communities = campaign?.communities;
  const technologies = campaign?.technologies;

  const loggedInAdmin = useSelector((state) => state.authAdmin);

  // let comments = [...technologies?.map((tech) => tech?.comments)].flat();
  const [loading, setLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const onModalClose = () => {
    setOpenModal(false);
  };

  const [selectedId, setSelectedId] = useState(null);

  const initialState = {
    text: "",
    community_id: "",
    campaign_technology_id: "",
  };

  const updateInRedux = (items) => {
    reduxDispatch(setCampaignCommentsAction(items));
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD_VALUE":
        return { ...state, [action.field]: action.value };
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  };

  const handleCreateComment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await createCampaignComment(formData);
      setOpenModal(false);
      // setComments(res);
      setLoading(false);
      blow({
        title: "Success",
        message: "Comment created successfully",
        type: "success",
        duration: 5000,
      });
    } catch (e) {
      setLoading(false);
      pop({
        title: "Error",
        message: e.message,
        type: "error",
        duration: 5000,
      });
    }
  };

  /**
   *
   * @param id
   * @returns {Promise<void>}
   */
  const handleDeleteComment = async (id) => {
    setLoading(true);
    const without = comments.filter((comment) => comment?.id !== id);
    // let's do pre-optimistic update
    // let allComments = [...comments]; // copy the comments
    updateInRedux(without);

    try {
      const res = await deleteCampaignComment({ id, user_id: loggedInAdmin?.id });
      if (res) {
        blow({
          title: "Success",
          message: "Comment created successfully",
          type: "success",
          duration: 5000,
        });
      }
    } catch (e) {
      pop({
        title: "Error",
        message: e.message,
        type: "error",
        duration: 5000,
      });
      // revert back to original comments
      // setComments(allComments);
      updateInRedux(comments);
    } finally {
      setLoading(false);
      // allComments = null; // set allComments up for garbage collection
    }
  };

  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleFieldChange = (field, value) => {
    dispatch({ type: "SET_FIELD_VALUE", field, value });
  };

  return (
    <m.div initial={{ y: "15%" }} animate={{ y: 0 }} transition={{ duration: 0.2 }}>
      <div className="flex items-center justify-content-end">
        {/* DONT UNCHECK THIS.  */}
        {/* <Button
          onClick={() => {
            setOpenModal(true);
          }}
          rounded={false}
          icon={faPlus}
          text="Create New Comment"
        >
          <span></span>
        </Button> */}
      </div>

      <Modal size={"lg"} show={openModal} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>Create New Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row className="">
              <Col>
                <Dropdown
                  displayTextToggle="Select the Community "
                  data={communities}
                  valueExtractor={(item) => item?.community?.id}
                  labelExtractor={(item) => item?.community?.name}
                  multiple={false}
                  onItemSelect={(selectedItem, allSelected) => {
                    handleFieldChange("community_id", selectedItem);
                  }}
                  selectedValues={[]}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Dropdown
                  displayTextToggle="Select the Technology "
                  data={technologies}
                  valueExtractor={(item) => item?.campaign_technology_id}
                  labelExtractor={(item) => item?.name}
                  multiple={false}
                  onItemSelect={(selectedItem, allSelected) => {
                    handleFieldChange("campaign_technology_id", selectedItem);
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Input
                  label="Comment"
                  placeholder="Eneter the comment here..."
                  required={true}
                  type="textarea"
                  onChange={(val) => {
                    handleFieldChange("text", val);
                  }}
                />
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Row className="mt-3">
            <Col>
              <div>
                <Button text="Create Comment" loading={loading} disabled={loading} onSubmit={handleCreateComment} />
              </div>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>

      <Container fluid>
        <Row className="mt-4 pt-4">
          {comments?.length > 0 ? (
            <Col>
              <h3>Comments</h3>
              <Row className="  mb-3 ">
                {comments?.map((comment, i) => {
                  return (
                    <Col
                      md={4}
                      key={comment?.id}
                      className={classes(
                        "me-3 mb-3",
                        selectedId === comment?.id ? "comment-card-expand" : "comment-card",
                      )}
                    >
                      <h6 style={{ textDecoration: "underline" }} className={"mb-1"}>
                        {comment?.user?.preferred_name ? comment?.user?.preferred_name : comment?.user?.full_name}
                      </h6>
                      <p
                        tabIndex={0}
                        role={"button"}
                        className="comment-text"
                        onClick={() => {
                          setSelectedId(selectedId === comment?.id ? null : comment?.id);
                        }}
                      >
                        {comment?.text && (
                          <>
                            {selectedId === comment.id || comment.text.length <= 60
                              ? comment.text
                              : `${comment.text.slice(0, 60)}...`}
                            {selectedId !== comment.id && comment.text.length > 60 && <span> Read More</span>}
                          </>
                        )}
                      </p>
                      <div className={"mt-2"} style={{ display: "flex", justifyContent: "space-between" }}>
                        {comment?.user?.id === loggedInAdmin?.id ? (
                          <div
                            className="comment-delete-btn"
                            onClick={async () => {
                              if (window.confirm("Are you sure you want to delete this comment ?")) {
                                await handleDeleteComment(comment?.id);
                              }
                            }}
                          >
                            <p>Delete</p>
                          </div>
                        ) : null}
                        <div className="comment-date">
                          <p>{relativeTimeAgo(comment?.created_at)}</p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          ) : (
            <NoItems
              text={
                "Silence speaks volumes! Be the first to share your thoughts. Add a comment and spark the conversation."
              }
            />
          )}
        </Row>
      </Container>
    </m.div>
  );
};

export default Comments;
