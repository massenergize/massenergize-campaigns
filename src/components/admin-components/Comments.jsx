import React, { useReducer, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion as m } from "framer-motion";
import { Col, Container, Row, Button as BTN } from "react-bootstrap";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { NoItems } from "@kehillahglobal/ui";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";

import Button from "../../components/admin-components/Button";
import {useSelector} from "react-redux";
import {createCampaignComment, deleteCampaignComment} from "../../requests/campaign-requests";
// import Dropdown from "./Dropdown";

const Comments = ({ campaign, mutateData }) => {

  const { blow, pop } = useBubblyBalloons();

  const communities = campaign?.communities;
  const technologies = campaign?.technologies;


  const loggedInAdmin = useSelector((state) => state.authAdmin);

let comments = [...technologies?.map((tech) => tech?.comments)].flat();
const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
   try {
        setLoading(true);
        const res = await createCampaignComment(formData);
        if (res) {

            setOpenCreateForm(false);
        mutateData(res);
            setLoading(false);
        blow({
            title: "Success",
            message: "Comment created successfully",
            type: "success",
            duration: 5000,
        });
        }
   }
    catch (e) {
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
    try {
      setLoading(true);
      const res = await deleteCampaignComment({id, user_id: loggedInAdmin?.id});
      if (res) {

          mutateData(res);
          setLoading(false)
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
  }

  const timeAgo = (date) => {
    const currentDate = new Date();
    const inputDate = new Date(date);

    const diffInSeconds = Math.floor((currentDate - inputDate) / 1000);

    if (diffInSeconds < 60) {
      return "Just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minutes ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hours ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} days ago`;
    } else if (diffInSeconds < 2592000) {
      const weeks = Math.floor(diffInSeconds / 604800);
      return `${weeks} weeks ago`;
    } else {
      return "More than a month ago";
    }
  };

  const [selectedId, setSelectedId] = useState(null);
  const [openCreateForm, setOpenCreateForm] = useState(false);

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
    <m.div
      initial={{ y: "15%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <div className="">
          {/* <h3>Comments</h3> */}

          {openCreateForm ? (
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
                        console.log(selectedItem);
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

                        <BTN
                            style={{ marginLeft: 10, padding: "10px 20px", borderRadius:0}}
                            onClick={() => setOpenCreateForm(false)}
                            variant="danger"
                        >
                            <span>Cancel</span>
                        </BTN>
                    </div>
                  </Col>
                </Row>
              </form>
            </Container>
          ) : (
            <div>
                <BTN
                    onClick={() => {
                        setOpenCreateForm(true);
                    }}
                    // rounded={false}
                    icon={faPlus}

                >
                    <span>Create New Comment</span>
                </BTN>
            </div>
          )}
        </div>
      </div>

      <Container>
          <Row className="mt-4 pt-4">
        {comments?.length > 0 ? (
            <Col>
              <h3>Comments</h3>
              <div className=" comment-card-con border-dashed mb-5">
                {technologies?.map((tech) => {
					if (tech?.comments?.length === 0) return null;
                  return (
                    <m.div className="per-tech-comment">
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
                                  <m.h6 style={{textDecoration: "underline"}}>
                                      {comment?.user?.preferred_name
                                          ? comment?.user?.preferred_name
                                          : comment?.user?.full_name}
                                  </m.h6>
                                  <m.p className="comment-text"  onClick={() => {
                                      setSelectedId(selectedId === comment?.id ? null : comment?.id);
                                  }}>
                                      {comment?.text && (
                                          <>
                                              {selectedId === comment.id || comment.text.length <= 60
                                                  ? comment.text
                                                  : `${comment.text.slice(0, 60)}...`}
                                              {selectedId !== comment.id && comment.text.length > 60 &&
                                               <span> Read More</span>}
                                          </>
                                      )}
                                  </m.p>
                                  <m.div style={{display:'flex', justifyContent:'space-between'}}>
                                      {comment?.user?.id === loggedInAdmin?.id ? (<m.div className="comment-delete-btn"
                                                                                         onClick={async () =>{
                                                                                             if (window.confirm("Are you sure you want to delete this comment ?")) {
                                                                                                 await handleDeleteComment(comment?.id)
                                                                                             }
                                                                                         } }>
                                          <m.p>Delete</m.p>
                                      </m.div>):(<m.div></m.div>)}
                                      <m.div className="comment-date">
                                          <m.p>{timeAgo(comment?.created_at)}</m.p>
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
                text={"Silence speaks volumes! Be the first to share your thoughts. Add a comment and spark the conversation."} />
		
        )}
          </Row>
      </Container>
    </m.div>
  );
};

export default Comments;
