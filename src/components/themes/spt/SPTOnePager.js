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
  const overviewItems = technology?.overview || [];
  const goal_section = campaign?.goal_section;
  const vendorRels = technology?.vendors || [];
  const vendorsSection = technology?.vendors_section;
  const faqs = technology?.faqs || [];
  const callout_section = campaign?.callout_section;
  const contact_section = campaign?.contact_section;
  const faq_section = technology?.faq_section;

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
        {overviewItems?.map((overview, index) => {
          return (
            <div key={overview?.id} style={{ marginBottom: 10 }}>
              <CustomAccordion
                renderHeader={({ opened, setOpen }) => (
                  <AccordionTitle section={overview} setOpen={setOpen} opened={opened} />
                )}
                elevate={false}
                radius={6}
                title={overview.title}
                key={overview?.id}
                component={
                  <div className="spt-body-font" dangerouslySetInnerHTML={{ __html: overview?.description }} />
                }
              />
            </div>
          );
        })}
      </div>

      {/*  --- Help Area -----*/}
      {/* <div style={{ marginTop: 40, padding: "0% 7%" }}> */}
      <HelpBanner section={callout_section} />
      {/* </div> */}

      {/* ------ Our Partners ------- */}

      <div style={{ padding: "0% 7%", margin: "40px 0px " }}>
        <SPTSectionTitle>{vendorsSection?.title}</SPTSectionTitle>
        {/* <h1>Our Partners</h1> */}
        <div
          style={{
            paddingTop: 40,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {vendorRels.map(({ vendor }) => {
            return (
              <img
                role="button"
                className="s-touchable-opacity"
                onClick={() => {
                  if (vendor?.website) window.open(vendor?.website, "_blank");
                }}
                //placeholder image
                src={vendor?.logo?.url}
                alt="Community Solar"
                style={{ flexBasis: "20%", objectFit: "cover", height: 100, marginRight: 30 }}
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
        <SPTSectionTitle style={{ margin: "20px 0px" }}>{faq_section?.title}</SPTSectionTitle>
        <div>
          {faqs?.map(({ id, question: title, answer: description }, index) => {
            return (
              <div key={id} style={{ marginBottom: 10 }}>
                <CustomAccordion
                  renderHeader={({ opened, setOpen }) => (
                    <AccordionTitle section={{ title, description }} setOpen={setOpen} opened={opened} />
                  )}
                  elevate={false}
                  radius={6}
                  title={title}
                  key={index}
                  component={<div className="spt-body-font" dangerouslySetInnerHTML={{ __html: description }}></div>}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* --------------------- Footer -------------------- */}

      <SPTFooter section={contact_section} />
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
