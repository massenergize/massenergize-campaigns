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
import { useDispatch, useSelector } from "react-redux";
import { loadActiveLanguageAction, setActiveLanguageInStorage } from "../../../redux/actions/actions";

const LANGUAGE_LIST = [
  { name: "English", code: "en-US" },
  { name: "Español", code: "es-ES" },
  { name: "Portuguese", code: "pt-BR" },
];

function SPTOnePager() {
  const dispatch = useDispatch();
  const activeLanguage = useSelector((state) => state.activeLanguage);
  const campaign = useSelector((state) => state.campaign);
  const technology = (campaign?.technologies || [])[0];
  const goal_section = campaign?.goal_section;
  console.log("lets see campaign", campaign);

  const setActiveLanguage = (lang, reload = true) => {
    setActiveLanguageInStorage(lang);
    dispatch(loadActiveLanguageAction(lang));
    if (reload) window.location.reload();
  };
  return (
    <div>
      <SPTHero campaign={campaign} />
      <div
        className="phone-vanish"
        style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
      >
        {LANGUAGE_LIST.map((lang, index) => {
          if (lang?.code === activeLanguage) return null;
          return (
            <div
              key={index}
              onClick={() => setActiveLanguage(lang.code)}
              className="s-touchable-opacity"
              style={{ marginRight: 8, padding: "15px 20px", background: "rgba(223, 238, 240, 1)", borderRadius: 5 }}
            >
              <h4 style={{ margin: 0 }}>{lang.name}</h4>
            </div>
          );
        })}
      </div>

      {/* About Community Solar */}
      <SPTAboutSection technology={technology} />
      {/*  Our Goals */}
      <SPTGoalSections technology={technology} section={goal_section} />
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
      <SPTEventsSections campaign={campaign} technology={technology} />

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
