import React from "react";
import SPTButton from "./components/SPTButton";

function SPTContactSection() {
  return (
    <div className="spt-contact-root">
      <div className="spt-contact-form">
        <div className="spt-t-area">
          <h1>Get In Touch</h1>
          <p>
            Our Energy Advisors provide expert, unbiased energy advice at no cost to you. Call or send a text message to
            (857) 293-1201)
          </p>
        </div>

        <div className="spt-form-area">
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">
                    Name
                  </span>
                  <input
                    placeholder="Your Name..."
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <label className="input-group-text" for="inputGroupSelect01">
                    Language
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">
                    Email
                  </span>
                  <input
                    placeholder="Your Email Address..."
                    type="email"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">
                    Phone #
                  </span>
                  <input
                    placeholder="Your Phone Number..."
                    type="telephone"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
            </div>
          </div>
          <SPTButton>Contact Us</SPTButton>
          <h6>Thank you for submitting your details, we will get back to you shortly!</h6>
        </div>
      </div>
    </div>
  );
}

export default SPTContactSection;
