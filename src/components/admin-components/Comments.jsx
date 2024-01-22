import React, { useReducer, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "framer-motion";
import { Col, Container, Row, Modal } from "react-bootstrap";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { NoItems } from "@kehillahglobal/ui";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import Button from "../../components/admin-components/Button";
import { useSelector } from "react-redux";
import {
  createCampaignComment,
  deleteCampaignComment,
} from "../../requests/campaign-requests";
import {mutate } from "swr";
import { relativeTimeAgo } from "src/utils/utils";
// import Dropdown from "./Dropdown";

const Comments = ({ campaign, comments }) => {
  const { blow, pop } = useBubblyBalloons();

  const communities = campaign?.communities;
  const technologies = campaign?.technologies;

  const loggedInAdmin = useSelector((state) => state.authAdmin);

  // let comments = [...technologies?.map((tech) => tech?.comments)].flat();
  const [loading, setLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const onModalClose = () => {
    setOpenModal(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await createCampaignComment(formData);
        setOpenModal(false);
        mutate(`campaigns.comments.list-${campaign?.id}`, (data) => [...data, ...res])
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

  const handleDeleteComment = async (id) => {
    setLoading(true);
    try {
      const res = await deleteCampaignComment({ id, user_id: loggedInAdmin?.id });
      if (res) {
        mutate(`campaigns.comments.list-${campaign?.id}`, (data) =>data.filter((item) => item?.id !== id))
        setLoading(false);
        blow({
          title: "Success",
          message: "Comment created successfully",
          type: "success",
          duration: 5000,
        });
      }
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

  const [selectedId, setSelectedId] = useState(null);

  const initialState = {
    text: "",
    community_id: "",
    campaign_technology_id: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD_VALUE":
        return { ...state, [action.field]: action.value };
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  };

  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleFieldChange = (field, value) => {
    dispatch({ type: "SET_FIELD_VALUE", field, value });
  };

  return (
    <m.div initial={{ y: "15%" }} animate={{ y: 0 }} transition={{ duration: 0.2 }}>
      <div className="flex items-center justify-content-end">
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
          rounded={false}
          icon={faPlus}
          text="Create New Comment"
        >
          <span></span>
        </Button>
      </div>

      <Modal size={"xl"} show={openModal} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>Create New Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "70vh" }}>
          <Container className="border-dashed">
            <form>
              <Row className="my-4">
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
              <Row className="my-4 py-4">
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
              <Row className="py-4">
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
              <Row className="py-4">
                <Col>
                  <div>
                    <Button
                      text="Create Comment"
                      loading={loading}
                      disabled={loading}
                      onSubmit={handleClick}
                      rounded={false}
                    />
                  </div>
                </Col>
              </Row>
            </form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Container fluid>
        <Row className="mt-4 pt-4">
          {comments?.length > 0 ? (
            <Col>
              <h3>Comments</h3>
              <div className=" comment-card-con border-dashed mb-5">
                {technologies?.map((tech) => {
                  if (tech?.comments?.length === 0) return null;
                  return (
                    <m.div key={tech?.id} className="per-tech-comment">
                      <h5 className="theme-color"> {tech?.name} </h5>
                      <div className="comments-con">
                        {tech?.comments?.map((comment) => {
                          return (
                            <m.div
                              layoutId={comment.id}
                              key={comment?.id}
                              className={
                                selectedId === comment?.id
                                  ? "comment-card-expand"
                                  : "comment-card"
                              }
                            >
                              <m.h6 style={{ textDecoration: "underline" }}>
                                {comment?.user?.preferred_name
                                  ? comment?.user?.preferred_name
                                  : comment?.user?.full_name}
                              </m.h6>
                              <m.p
                                className="comment-text"
                                onClick={() => {
                                  setSelectedId(
                                    selectedId === comment?.id ? null : comment?.id,
                                  );
                                }}
                              >
                                {comment?.text && (
                                  <>
                                    {selectedId === comment.id ||
                                    comment.text.length <= 60
                                      ? comment.text
                                      : `${comment.text.slice(0, 60)}...`}
                                    {selectedId !== comment.id &&
                                      comment.text.length > 60 && (
                                        <span> Read More</span>
                                      )}
                                  </>
                                )}
                              </m.p>
                              <m.div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                {comment?.user?.id === loggedInAdmin?.id ? (
                                  <m.div
                                    className="comment-delete-btn"
                                    onClick={async () => {
                                      if (
                                        window.confirm(
                                          "Are you sure you want to delete this comment ?",
                                        )
                                      ) {
                                        await handleDeleteComment(comment?.id);
                                      }
                                    }}
                                  >
                                    <m.p>Delete</m.p>
                                  </m.div>
                                ) : (
                                  <m.div></m.div>
                                )}
                                <m.div className="comment-date">
                                  <m.p>{relativeTimeAgo(comment?.created_at)}</m.p>
                                </m.div>
                              </m.div>
                            </m.div>
                          );
                        })}
                      </div>
                    </m.div>
                  );
                })}
              </div>
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
