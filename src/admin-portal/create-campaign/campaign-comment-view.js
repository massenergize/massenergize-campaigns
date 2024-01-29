
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Comments from "src/components/admin-components/Comments";
import Loading from "src/components/pieces/Loading";
import { fetchAllCampaignComments } from "src/requests/campaign-requests";
import useSWR, { mutate } from "swr";

export const CampaignCommentView = ({ campaign }) => {


  const {
    data: comments,
    isLoading: commentsLoading,
    error: commentsError,
    mutate: mutateComments
  } = useSWR(
    `campaigns.comments.list/${campaign?.id}`,
    async () => {
      return await fetchAllCampaignComments(campaign.id);
    },
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );


  const setComments = (newData) => {
    mutateComments([...newData, ...comments])
  }

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
            <Comments campaign={campaign}  comments={comments} setComments={setComments}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
