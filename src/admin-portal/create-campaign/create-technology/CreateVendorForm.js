import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Input from "../../../components/admin-components/Input";
import FileUploader, { RESET } from "src/components/admin-components/FileUploader";
import Button from "../../../components/admin-components/Button";
import { apiCall } from "src/api/messenger";
import { objHasContent } from "src/utils/utils";
function CreateVendorForm({ setEditObj, notifyError, tech_id, data, vendors, notifySuccess, updateTechObject }) {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  //   const [isEditing, setIsEditing] = useState(false);
  const isEditing = data;
  const getValue = (key, source) => {
    source = source || formData;
    return (source || {})[key] || "";
  };

  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const contentIsValid = (data) => {
    const { name, website } = data || {};
    if (!name || !website) {
      notifyError("(name, website) Please make sure none of them is empty...");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    // setIsEditing(false);
    setFormData({});
    setEditObj(null);
    setFormData({ logo: RESET });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { ...formData, technology_id: tech_id };
    const url = isEditing ? "technologies.vendors.update" : "technologies.vendors.create";

    if (!contentIsValid(data)) return;
    setLoading(true);
    data = {
      ...data,
      ...(isEditing && !data.logo ? { logo: "reset" } : data.logo ? { logo: data.logo } : {}),
    };
    apiCall(url, data).then((res) => {
      const { data, success, error } = res || {};
      setLoading(false);

      if (!success) {
        console.log("ERROR: ", error);
        return notifyError(error);
      }
      const vendorItem = data;
      const source = vendors;
      let items = [];
      if (isEditing) {
        let rem = source?.filter((it) => it?.id !== vendorItem?.id);
        items = [...rem, vendorItem];
        resetForm();
      } else {
        items = [...(source || []), vendorItem];
        resetForm();
      }
      notifySuccess(isEditing ? "New changes saved!" : "Vendor created!");
      return updateTechObject({ vendors: items });
    });
  };

  useEffect(() => {
    // When editing, update the form data here
    if (!data) return;
    const { name, logo, website, id } = data;
    setFormData({ name, logo: logo?.url, website, vendor_id: id });
    // setIsEditing(true);
  }, [data]);

  const formHasContent = objHasContent(formData);

  return (
    <div className="p-3">
      <Row>
        <Col>
          <Input
            label="Name (Unique)*"
            placeholder="Enter name here..."
            // required={true}
            type="text"
            value={getValue("name")}
            onChange={(val) => {
              handleFieldChange("name", val);
            }}
          />
        </Col>
        <Col>
          <Input
            label="Website *"
            placeholder="www.vendors-website.com"
            // required={true}
            type="text"
            value={getValue("website")}
            onChange={(val) => {
              handleFieldChange("website", val);
            }}
          />
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          <FileUploader
            required={false}
            id="vendor_logo"
            text="Add a logo for the vendor"
            onChange={(val) => {
              handleFieldChange("logo", val);
            }}
            value={getValue("logo")}
            defaultValue={getValue("logo")}
          />
        </Col>
      </Row>

      <Button loading={loading} onSubmit={handleSubmit} rounded={false}>
        {isEditing ? "Save Changes" : "Create Vendor"}
      </Button>

      {formHasContent && (
        <small
          onClick={() => resetForm()}
          style={{
            fontWeight: "bold",
            marginLeft: 10,
            color: "red",
            textDecoration: "underline",
          }}
          className="touchable-opacity"
        >
          Reset Form
        </small>
      )}
    </div>
  );
}

export default CreateVendorForm;
