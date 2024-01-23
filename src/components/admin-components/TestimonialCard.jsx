import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import {
  deleteTestimonial,
  updateTestimonial,
} from "src/requests/technology-requests";
import { relativeTimeAgo } from "src/utils/utils";
import RenderHTML from "../RenderHtml";

const TestimonialCard = ({ test, platform, className = "" }) => {
  const [tick, setTick] = useState(test?.is_featured);

  const [loading, setLoading] = useState(false);
  const { blow, pop } = useBubblyBalloons();

  const handleFeatureOnCampaign = async () => {
    let beSure = window.confirm(
      test?.is_featured
        ? "Are you sure you want to unfeature?"
        : "Are you sure you want to Feature this Testimonial?",
    );
    if (beSure) {
      setTick(!tick);

      try {
        const payload = {
          id: test?.id,
          is_featured: !tick,
        };

        const res = await updateTestimonial(payload);

        if (res) {
          setLoading(false);
          blow({
            title: "Success",
            message: "Campaign Testimonial updated successfully.",
            type: "success",
            duration: 5000,
          });
        }
      } catch (e) {
        setLoading(false);
        setTick(tick);
        pop({
          title: "Error",
          message: "Something went wrong. Please try again later.",
          type: "error",
          timeout: 5000,
        });
      }
    }
  };

  const handleDelete = async () => {
    let beSure = window.confirm("Are you sure you want to delete this testimonial?");
    if (beSure) {
      try {
        const payload = {
          id: test?.id,
        };

        const res = await deleteTestimonial(payload);

        if (res) {
          setLoading(false);
          blow({
            title: "Success",
            message: "Testimonial deleted successfully.",
            type: "success",
            duration: 5000,
          });
        }
      } catch (e) {
        setLoading(false);
        pop({
          title: "Error",
          message: "Something went wrong. Please try again later.",
          type: "error",
          timeout: 5000,
        });
      }
    }
  };

  const handleApprove = async () => {
    let beSure = window.confirm(
      test?.is_published
        ? "Are you sure you want to Disapprove this testimonial?"
        : "Are you sure you want to Approve this testimonial?",
    );
    if (beSure) {
      try {
        const payload = {
          id: test?.id,
          is_published: !test?.is_published,
        };

        const res = await updateTestimonial(payload);

        if (res) {
          setLoading(false);
          blow({
            title: "Success",
            message: "Testimonial deleted successfully.",
            type: "success",
            duration: 5000,
          });
        }
      } catch (e) {
        setLoading(false);
        pop({
          title: "Error",
          message: "Something went wrong. Please try again later.",
          type: "error",
          timeout: 5000,
        });
      }
    }
  };

  return (
    <div className={"w-100 p-4 rounded-4 border relative " + className}>
      {
        platform !== "campaign" && <p
          style={{
            position: "absolute",
            top: "-10px",
            right: "20px",
          }}
          className="absolute bg-white py-1 px-3 border rounded-5"
        >
          {test?.community?.name}
        </p>
      }

      <div className="flex items-center justify-content-between">
        <h6 className="text-capitalize">{test?.user?.full_name} </h6>
        <div className="flex gap-3">
          <p className="text-muted"> {relativeTimeAgo(test?.created_at)}</p>
        </div>
      </div>
      <div className="my-3 flex items-start gap-3 justify-content-between">
        <div>
          <h6 className="fw-bold">{test?.title}</h6>
          {/* {test?.body} */}
          <RenderHTML html={test?.body}/>

        </div>
        {(test?.image || test?.file) && (
          <div>
            <img
              src={(test?.image || test?.file)?.url}
              alt=""
              style={{ height: "50px", objectFit: "cover" }}
              className="rounded-4"
            />
          </div>
        )}
      </div>
      <div className="flex gap-5 items-center justify-content-between">
        <div className="flex gap-5 items-center justify-content-start">
          {test?.is_published && (
            <div>
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor={test?.id}>
                  {test?.is_featured ? "Unfeature" : "Feature"}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={test?.id}
                  checked={tick}
                  onChange={handleFeatureOnCampaign}
                />
              </div>
            </div>
          )}
          {platform === "campaign" && (
            <button
              className={`text-white py-2 px-4 rounded-5 bg-primary flex items-center gap-2 ${
                test?.is_published ? "bg-danger" : "bg-success"
              }`}
              onClick={handleApprove}
            >
              {test?.is_published ? "Disapprove" : "Approve"}
              <FontAwesomeIcon icon={test?.is_published ? faThumbsDown : faThumbsUp} />
            </button>
          )}
        </div>
        {platform === "campaign" && (
          <button onClick={handleDelete} className="delbutton">
            <svg viewBox="0 0 448 512" className="svgIcon">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
