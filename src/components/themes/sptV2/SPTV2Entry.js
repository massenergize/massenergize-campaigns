import React, { useEffect, useRef } from "react";
import SPTHero from "../spt/components/SPTHero";
import HelpBanner from "../spt/components/HelpBanner";
import CustomAccordion from "../../admin-components/CustomAccordion";
import { ACCORDION_SECTIONS, FAQS } from "../spt/SPTConstants";

import SPTFooter from "../spt/components/SPTV2Footer";
import SPTSectionTitle from "../spt/components/SPTSectionTitle";
import SPTEventsSections from "../spt/components/SPTEventsSections";
import { useDispatch, useSelector } from "react-redux";
import { getStaticText, loadActiveLanguageAction, setActiveLanguageInStorage } from "../../../redux/actions/actions";
import { DEFAULT_ENGLISH_CODE } from "../../../redux/redux-action-types";
import Hero from "./components/hero/Hero";
import SPTSectionComponent from "./components/SPTSectionComponent";
import SPTV2OurGoals from "./SPTV2OurGoals";
import SPTV2AboutSection from "./SPTV2AboutSection";
import { CAMPAIGN_TEMPLATE_KEYS, getPlaceholderURL, getTheme, PlaceholderImageURL } from "../../../utils/Values";
import SPTContactSection from "./SPTContactSection";
import EligibilitySection from "./EligibilitySection";
import SPTV2AboutCampaign from "./SPTV2AboutCampaign";
import { fetchUrlParams, scrollIntoView } from "../../../utils/utils";

function SPTV2Entry() {
  const goalsArea = useRef(null);
  const aboutTecArea = useRef(null);
  const benefitsArea = useRef(null);
  const eligibilityArea = useRef(null);
  const faqArea = useRef(null);
  const contactArea = useRef(null);
  const partnersArea = useRef(null);
  const eventsArea = useRef(null);
  const aboutCampaignArea = useRef(null);
  const howItWorks = useRef(null);
  const heroArea = useRef(null);

  const idsToRefMap = {
    hero: heroArea,
    goals: goalsArea,
    about_tec: aboutTecArea,
    benefits: benefitsArea,
    eligibility: eligibilityArea,
    faq: faqArea,
    contact: contactArea,
    partners: partnersArea,
    events: eventsArea,
    about_campaign: aboutCampaignArea,
    how_it_works: howItWorks,
  };

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
  const about_us_section = campaign?.about_us_section;
  const eligibility_section = campaign?.eligibility_section;
  const faq_section = technology?.faq_section;
  const languages = useSelector((state) => state?.usersListOfLanguages);
  const overviewTitle = technology?.overview_title;
  const deals = technology?.deals;
  const deal_section = technology?.deal_section;

  const scrollToSection = (id) => {
    const ref = idsToRefMap[id];
    scrollIntoView(ref, 100);
  };

  const { spt } = getStaticText();
  const { overview } = spt || {};

  const setActiveLanguage = (lang, reload = true) => {
    setActiveLanguageInStorage(lang);
    dispatch(loadActiveLanguageAction(lang));
    if (reload) window.location.reload();
  };

  const themeKey = CAMPAIGN_TEMPLATE_KEYS.SINGLE_TECHNOLOGY_CAMPAIGN_SPT_V2;
  const theme = getTheme(themeKey);

  const section = fetchUrlParams("section");
  const salt = fetchUrlParams("salt");

  useEffect(() => {
    scrollToSection(section);
  }, [salt]);

  return (
    <div>
      <div ref={heroArea}>
        <Hero themeKey={themeKey} />
      </div>
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
      <div ref={goalsArea}>
        <SPTV2OurGoals themeKey={themeKey} section={goal_section} />
      </div>
      {/* About Community Solar */}
      <div ref={aboutTecArea}>
        <SPTV2AboutSection themeKey={themeKey} technology={technology} />
      </div>
      {/* ------ BENEFITS----------- */}
      <div ref={benefitsArea} className="spt-section-padding spt-section-margin-top">
        <SPTSectionTitle>{overviewTitle || overview?.title?.text}</SPTSectionTitle>
        <div className="mobile-margin" style={{ marginTop: 40, "--my-custom-margin": "10px 0px" }}></div>
        <div className="spt-benefits-part">
          {overviewItems?.map((overview) => {
            return (
              <div className="spt-benefits-item" key={overview?.id} style={{ marginBottom: 10 }}>
                {overview?.image && <img src={overview?.image?.url} alt="Benefit" />}
                <div>
                  <h5 style={{}}>{overview?.title}</h5>
                  <p
                    style={{ color: theme?.darkText }}
                    className="spt-body-font"
                    dangerouslySetInnerHTML={{ __html: overview?.description }}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="spt-section-padding spt-section-margin-top">
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
      </div> */}

      <div ref={aboutCampaignArea}>
        <SPTV2AboutCampaign
          cImage={campaign?.image}
          cDescription={campaign?.description}
          section={about_us_section}
          themeKey={themeKey}
          technology={technology}
          cTitle={campaign?.title}
        />
      </div>

      {/* --- How does it work? ------ */}
      <div ref={howItWorks}>
        <SPTSectionComponent>
          <SPTSectionTitle>{deal_section?.title}</SPTSectionTitle>
          <div className="how-it-works">
            <img src={deal_section?.media?.url} alt="How it works" />
            <div className="items">
              {deals?.map((item, index) => {
                return (
                  <div className="how-it-works-item" style={{ "--text-color": theme?.color }} key={item?.id}>
                    <h6>
                      {index + 1}. {item?.title}
                    </h6>
                    <p
                      className="spt-body-font"
                      style={{ color: theme?.darkText, textAlign: "justify" }}
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </SPTSectionComponent>
      </div>

      {/* --------- ELIGIBILITY -------- */}
      <div ref={eligibilityArea}>
        <EligibilitySection section={eligibility_section} themeKey={themeKey} technology={technology} />
      </div>
      {/*  --- Help Area -----*/}
      {/* <HelpBanner themeKey={themeKey} section={callout_section} /> */}
      {/* </div> */}

      {/* ------------ Frequently Asked Questions --------- */}
      <div ref={faqArea} style={{ marginTop: 40, padding: "2% 7%", background: theme?.colorLight }}>
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
                  component={
                    <div
                      style={{ color: theme?.darkText, padding: 15 }}
                      className="spt-body-font"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      <div ref={contactArea}>
        <SPTContactSection campaign_id={campaign?.id} section={callout_section} themeKey={themeKey} />
      </div>
      {/* ------------ Events --------- */}
      <SPTEventsSections themeKey={themeKey} campaign={campaign} technology={technology} />

      {/* ------ Our Partners ------- */}

      <div ref={partnersArea} style={{ padding: "0% 7%", margin: "40px 0px " }}>
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
                className="s-touchable-opacity partner-img"
                onClick={() => {
                  if (vendor?.website) window.open(vendor?.website, "_blank");
                }}
                //placeholder image
                src={vendor?.logo?.url}
                alt="Community Solar"
                style={{ flexBasis: "20%", objectFit: "contain", marginRight: 30 }}
              />
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
