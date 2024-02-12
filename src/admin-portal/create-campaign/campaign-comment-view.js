import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Comments from "src/components/admin-components/Comments";
import Loading from "src/components/pieces/Loading";
import { setCampaignCommentsAction } from "src/redux/actions/actions";
import { fetchAllCampaignComments } from "src/requests/campaign-requests";
import useSWR, { mutate } from "swr";

export const CampaignCommentView = ({ campaign }) => {
  const [commentsError, setCommentError] = useState(null);
  const [commentsLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.campaignComments);

  useEffect(() => {
    if (comments?.length) return;
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const comments = await fetchAllCampaignComments(campaign.id);
      setLoading(false);
      dispatch(setCampaignCommentsAction(comments));
    } catch (e) {
      setLoading(false);
      setCommentError(e);
      console.log("ERROR_LOADING_COMMENTS:", e?.toString());
    }
  };

  if (commentsLoading) {
    return <Loading />;
  }

  if (commentsError) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">An error occurred</h3>
      </div>
    );
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Comments
              campaign={campaign}
              comments={comments}
              // setComments={updateComments}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
