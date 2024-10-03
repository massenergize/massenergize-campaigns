import React, { useState } from "react";
import SPTButton from "./components/SPTButton";
import { useSelector } from "react-redux";
import { getPlaceholderURL } from "../../../utils/Values";
import { apiCall } from "../../../api/messenger";

const OTHER = "other";
function SPTContactSection({ themeKey, section, campaign_id }) {
  const { title, description, media } = section || {};
  const [form, setForm] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state?.user);

  const languages = useSelector((state) => state?.usersListOfLanguages);

  const updateForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const isValid = (form) => {
    if (!form?.full_name || !form?.email || !form?.phone_number) {
      setError("Please fill out all fields");
      return false;
    }
    return true;
  };

  const resetNotification = () => {
    setError(null);
    setSuccess(null);
  };
  const submit = () => {
    resetNotification();
    if (!isValid(form)) return;
    setLoading(true);
    // Make API call here
    //campaign_id, email, phone_number, full_name, language,community_id, other(json)
    const { community, community_name, zipcode } = user || {};
    const community_id = community?.id && community?.id !== OTHER ? community?.id : null;
    const other = { community_name, id: community_id, zipcode };
    const payload = { ...form, community_id, other, campaign_id };
    apiCall("/campaigns.contact.us", payload).then((response) => {
      console.log("SEE RESPONSE", response);
      setLoading(false);
      if (!response.success) {
        setError(response.error);
        return;
      }
      setForm({});
      setSuccess("Thank you for contacting us. We will get back to you shortly!");
    });
  };
  return (
    <div className="spt-contact-root" style={{ "--background-image": `url(${media?.url || getPlaceholderURL()})` }}>
      <div className="spt-contact-form">
        <div className="spt-t-area">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: description }} />
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
                    onChange={(e) => updateForm("full_name", e.target.value)}
                    value={form?.full_name}
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
                  <select
                    onChange={(e) => updateForm("language", e?.target.value)}
                    className="form-select"
                    value={form?.language}
                    id="inputGroupSelect01"
                  >
                    <option selected>Choose...</option>
                    {languages?.map((l) => (
                      <option value={l?.code}>{l?.name}</option>
                    ))}
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
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
                    onChange={(e) => updateForm("email", e.target.value)}
                    value={form?.email}
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
                    onChange={(e) => updateForm("phone_number", e.target.value)}
                    value={form?.phone_number}
                    type="telephone"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
            </div>
          </div>
          <SPTButton themeKey={themeKey} onClick={() => submit()} disable={loading}>
            {loading && <i className="fa fa-spinner fa-spin" style={{ marginRight: 5 }} />}
            {loading ? "" : "Contact Us"}
          </SPTButton>
          {error && <h6 style={{ color: "#dc3545" }}>{error}</h6>}
          {success && <h6 style={{ color: "#4ba64b" }}>{success}</h6>}
        </div>
      </div>
    </div>
  );
}

export default SPTContactSection;
