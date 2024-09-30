import React from "react";
import SPTHero from "../spt/components/SPTHero";
import HelpBanner from "../spt/components/HelpBanner";
import CustomAccordion from "../../admin-components/CustomAccordion";
import { ACCORDION_SECTIONS, FAQS } from "../spt/SPTConstants";

import SPTFooter from "../spt/components/SPTFooter";
import SPTSectionTitle from "../spt/components/SPTSectionTitle";
import SPTEventsSections from "../spt/components/SPTEventsSections";
import { useDispatch, useSelector } from "react-redux";
import { getStaticText, loadActiveLanguageAction, setActiveLanguageInStorage } from "../../../redux/actions/actions";
import { DEFAULT_ENGLISH_CODE } from "../../../redux/redux-action-types";
import Hero from "./components/hero/Hero";
import SPTSectionComponent from "./components/SPTSectionComponent";
import SPTV2OurGoals from "./SPTV2OurGoals";
import SPTV2AboutSection from "./SPTV2AboutSection";
import { CAMPAIGN_TEMPLATE_KEYS, getTheme } from "../../../utils/Values";

const LANGUAGE_LIST = [
  { name: "English", code: "en-US" },
  { name: "Español", code: "es-ES" },
  { name: "Portuguese", code: "pt-BR" },
];

function SPTV2Entry() {
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
  const languages = useSelector((state) => state?.usersListOfLanguages);
  const overviewTitle = technology?.overview_title;

  const { spt } = getStaticText();
  const { overview } = spt || {};

  const setActiveLanguage = (lang, reload = true) => {
    setActiveLanguageInStorage(lang);
    dispatch(loadActiveLanguageAction(lang));
    if (reload) window.location.reload();
  };

  const themeKey = CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2;
  const theme = getTheme(themeKey);
  return (
    <div>
      <Hero themeKey={themeKey} />
      {/* <SPTHero campaign={campaign} /> */}
      <div
        className="phone-vanish"
        style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
      >
        {languages.map((lang, index) => {
          if (!activeLanguage && lang?.code === DEFAULT_ENGLISH_CODE) return null;
          if (lang?.code === activeLanguage) return null;
          return (
            <div
              key={index}
              onClick={() => setActiveLanguage(lang.code)}
              className="s-touchable-opacity"
              style={{
                marginRight: 30,
                padding: "15px 20px",
                background: theme?.color2,
                borderRadius: 5,
                color: "white",
              }}
            >
              <h4 style={{ margin: 0 }}>{lang.name}</h4>
            </div>
          );
        })}
      </div>

      {/*  Our Goals */}
      <SPTV2OurGoals themeKey={themeKey} section={goal_section} />
      {/* About Community Solar */}
      <SPTV2AboutSection themeKey={themeKey} technology={technology} />
      {/* ------ BENEFITS----------- */}
      <div className="spt-section-padding spt-section-margin-top">
        <SPTSectionTitle>{overviewTitle || overview?.title?.text}</SPTSectionTitle>
        <div className="mobile-margin" style={{ marginTop: 40, "--my-custom-margin": "10px 0px" }}></div>
        {overviewItems?.map((overview, index) => {
          return (
            <div key={overview?.id} style={{ marginBottom: 10 }}>
              <CustomAccordion
                renderHeader={({ opened, setOpen }) => (
                  <AccordionTitle themeKey={themeKey} section={overview} setOpen={setOpen} opened={opened} />
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
      <HelpBanner themeKey={themeKey} section={callout_section} />
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
                style={{ flexBasis: "20%", objectFit: "contain", height: 100, marginRight: 30 }}
              />
            );
          })}
        </div>
      </div>

      {/* ------------ Events --------- */}
      <SPTEventsSections themeKey={themeKey} campaign={campaign} technology={technology} />

      {/* ------------ Frequently Asked Questions --------- */}
      <div style={{ marginTop: 40, padding: "2% 7%", background: theme?.colorLight }}>
        {/* <h1 >Frequently Asked Questions</h1> */}
        <SPTSectionTitle style={{ margin: "20px 0px" }}>{faq_section?.title}</SPTSectionTitle>
        <div>
          {faqs?.map(({ id, question: title, answer: description }, index) => {
            return (
              <div key={id} style={{ marginBottom: 10 }}>
                <CustomAccordion
                  wrapperStyle={{ borderColor: theme?.forBorders }}
                  renderHeader={({ opened, setOpen }) => (
                    <AccordionTitle
                      themeKey={themeKey}
                      section={{ title, description }}
                      setOpen={setOpen}
                      opened={opened}
                    />
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

      <SPTFooter themeKey={themeKey} section={contact_section} />
    </div>
  );
}

export default SPTV2Entry;

const AccordionTitle = ({ section, setOpen, opened, themeKey }) => {
  const theme = getTheme(themeKey);
  return (
    <div
      // className="touchable-opacity"
      style={opened ? { background: theme?.color, borderColor: "green" } : {}}
      className={`spt-acc-title ${opened ? "spt-acc-t-opened" : ""}`}
      onClick={() => setOpen(!opened)}
    >
      <h4>{section?.title} </h4>
      <i className="fa fa-plus" style={{ marginLeft: "auto" }} />
    </div>
  );
};
