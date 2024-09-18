import React from "react";
import SPTHero from "./components/SPTHero";
import HelpBanner from "./components/HelpBanner";
import CustomAccordion from "../../admin-components/CustomAccordion";
import { ACCORDION_SECTIONS, FAQS } from "../../themes/spt/SPTConstants";
import SPTAboutSection from "./components/SPTAboutSection";
import SPTGoalSections from "./components/SPTGoalSections";
import SPTFooter from "./components/SPTFooter";
import SPTSectionTitle from "./components/SPTSectionTitle";
import SPTEventsSections from "./components/SPTEventsSections";
function SPTOnePager() {
  return (
    <div>
      <SPTHero />
      <div
        className="phone-vanish"
        style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="s-touchable-opacity"
          style={{ padding: "15px 20px", background: "antiquewhite", borderRadius: 5 }}
        >
          <h4 style={{ margin: 0 }}>Español</h4>
        </div>
        <div
          className="s-touchable-opacity"
          style={{ padding: "15px 20px", marginLeft: 10, background: "antiquewhite", borderRadius: 5 }}
        >
          <h4 style={{ margin: 0 }}>Portuguese</h4>
        </div>
      </div>

      {/* About Community Solar */}
      <SPTAboutSection />
      {/*  Our Goals */}
      <SPTGoalSections />
      {/* ------ FAQS----------- */}
      <div className="spt-section-padding spt-section-margin-top">
        {ACCORDION_SECTIONS.map((section, index) => {
          return (
            <div key={index} style={{ marginBottom: 10 }}>
              <CustomAccordion
                renderHeader={({ opened, setOpen }) => (
                  <AccordionTitle section={section} setOpen={setOpen} opened={opened} />
                )}
                elevate={false}
                radius={6}
                title={section.title}
                key={index}
                component={<p className="spt-body-font">{section.description}</p>}
                isOpen={index === 0}
              />
            </div>
          );
        })}
      </div>

      {/*  --- Help Area -----*/}
      {/* <div style={{ marginTop: 40, padding: "0% 7%" }}> */}
      <HelpBanner />
      {/* </div> */}

      {/* ------ Our Partners ------- */}

      <div style={{ padding: "0% 7%", margin: "40px 0px " }}>
        <SPTSectionTitle>Our Partners</SPTSectionTitle>
        {/* <h1>Our Partners</h1> */}
        <div
          style={{
            paddingTop: 40,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {[2, 3, 4, 5].map((item) => {
            return (
              <img
                //placeholder image
                src="https://via.placeholder.com/280"
                alt="Community Solar"
                style={{ flexBasis: "23%", objectFit: "cover", height: 100 }}
              />
            );
          })}
        </div>
      </div>

      {/* ------------ Events --------- */}
      <SPTEventsSections />

      {/* ------------ Frequently Asked Questions --------- */}
      <div style={{ marginTop: 40, padding: "2% 7%", background: "rgba(236, 254, 255, 1)" }}>
        {/* <h1 >Frequently Asked Questions</h1> */}
        <SPTSectionTitle style={{ margin: "20px 0px" }}>Frequently Asked Questions</SPTSectionTitle>
        <div>
          {FAQS.map((section, index) => {
            return (
              <div key={index} style={{ marginBottom: 10 }}>
                <CustomAccordion
                  renderHeader={({ opened, setOpen }) => (
                    <AccordionTitle section={section} setOpen={setOpen} opened={opened} />
                  )}
                  elevate={false}
                  radius={6}
                  title={section.title}
                  key={index}
                  component={<p className="spt-body-font">{section.description}</p>}
                  isOpen={index === 0}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* --------------------- Footer -------------------- */}

      <SPTFooter />
    </div>
  );
}

export default SPTOnePager;

const AccordionTitle = ({ section, setOpen, opened }) => {
  return (
    <div
      // className="touchable-opacity"
      className={`spt-acc-title ${opened ? "spt-acc-t-opened" : ""}`}
      onClick={() => setOpen(!opened)}
    >
      <h4>{section?.title} </h4>
      <i className="fa fa-plus" style={{ marginLeft: "auto" }} />
    </div>
  );
};
