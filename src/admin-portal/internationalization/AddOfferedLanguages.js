import React from "react";
import { AdminLayout } from "../../layouts/admin-layout";
import { Container, Row } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { LANGUAGES } from "../../utils/internationalization/languages";

function AddOfferedLanguages() {
  const languages = Object.entries(LANGUAGES);
  return (
    <AdminLayout>
      <Container fluid className={"p-5"}>
        <Row style={{ height: "100vh" }}>
          <h3>Add Offered Languages</h3>
          <p>Add all languages that you want to offer on your campaign sites here</p>
          <div style={{ height: "100%", marginTop: 20 }}>
            <MultiSelect
              options={(languages || []).map(([value, label]) => {
                return {
                  value,
                  label,
                };
              })}
              
              valueRenderer={(selected, _options) => {
                if (selected.length === 0) return "Select languages";
                if (selected.length === _options.length) return "All languages selected";
                if (selected.length > 5) return `${selected.length} languages Selected`;
                return selected
                  ?.map(({ label }) => label)
                  .join(", ")
                  .concat(" Selected");
              }}
              onChange={(langs) => {
                
              }}
              labelledBy="Select"
            />

            <div
              style={{
                //   height: "100%",
                width: "100%",
                background: "#f8f8f8",
                borderRadius: 10,
                minHeight: 200,
                marginTop: 10,
              }}
            ></div>
          </div>
        </Row>
      </Container>
    </AdminLayout>
  );
}

export default AddOfferedLanguages;
