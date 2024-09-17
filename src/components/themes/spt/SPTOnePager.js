import React from "react";
import SPTHero from "./components/SPTHero";
import HelpBanner from "./components/HelpBanner";
import CustomAccordion from "../../admin-components/CustomAccordion";
import { ACCORDION_SECTIONS, FAQS } from "../../themes/spt/SPTConstants";
import SPTAboutSection from "./components/SPTAboutSection";
import SPTGoalSections from "./components/SPTGoalSections";
function SPTOnePager() {
  return (
    <div>
      <SPTHero />
      <div
        className="phone-vanish"
        style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
      >
        <div style={{ padding: "15px 20px", background: "antiquewhite", borderRadius: 5 }}>
          <h4 style={{ margin: 0 }}>Español</h4>
        </div>
        <div style={{ padding: "15px 20px", marginLeft: 10, background: "antiquewhite", borderRadius: 5 }}>
          <h4 style={{ margin: 0 }}>Portuguese</h4>
        </div>
      </div>

      {/* About Community Solar */}
      <SPTAboutSection />
      {/*  Our Goals */}
      <SPTGoalSections />
      {/* ------ FAQS----------- */}
      <div style={{ marginTop: 40, padding: "0% 7%" }}>
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
      <div style={{ marginTop: 40, padding: "0% 7%" }}>
        <HelpBanner />
      </div>

      {/* ------ Our Partners ------- */}

      <div style={{ padding: "0% 7%", margin: "40px 0px " }}>
        <h1>Our Partners</h1>
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
      <div style={{ marginTop: 40, padding: "0% 7%" }}>
        <h1>Events</h1>
        <div></div>
      </div>
      {/* ------------ Frequently Asked Questions --------- */}
      <div style={{ marginTop: 40, padding: "2% 7%", background: "rgba(236, 254, 255, 1)" }}>
        <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
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

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className=""
          style={{
            padding: "0% 7%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(0, 58, 68, 1)",
            height: 300,
            width: "75%",
          }}
        >
          <h1 style={{ color: "white", fontSize: 45, fontWeight: "normal", width: "67%" }}>
            Chat or text with our ambassadors{" "}
          </h1>

          <div
            style={{
              padding: "8px 25px",
              background: "rgba(255, 132, 71, 1)",
              // fontWeight: "bold",
              borderRadius: 4,
              width: "fit-content",
              marginTop: 10,
              color: "white",
            }}
          >
            Email Us!
          </div>
        </div>
        <div className="" style={{ width: "25%" }}>
          <img
            alt="Supporting Footer Media"
            src="https://massenergize-prod-files.s3.amazonaws.com/media/crowd-of-people-marching-on-a-rally-2975498.jpg"
            style={{ height: 300, width: "100%", background: "blue", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SPTOnePager;

const AccordionTitle = ({ section, setOpen, opened }) => {
  return (
    <div
      // className="touchable-opacity"
      className="spt-acc-title"
      onClick={() => setOpen(!opened)}
      style={
        {
          // width: "100%",
          // height: "100%",
          // padding: "10px 20px",
          // display: "flex",
          // flexDirection: "row",
          // alignItems: "center",
        }
      }
    >
      <h4 style={{ margin: 0, fontWeight: "normal" }}>{section?.title} </h4>
      <i className="fa fa-plus" style={{ marginLeft: "auto" }} />
    </div>
  );
};
