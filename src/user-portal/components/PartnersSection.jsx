import React, { useRef, useEffect } from "react";
import CenteredWrapper from "../pages/wrappers/CenteredWrapper";
import { ArrowButtons } from "../../components/pieces/ArrowButtons";

const PartnersContainer = ({ children, containerRef }) => (
  <div
    ref={containerRef}
    style={{
      padding: "10px 0",
      overflowX: "auto",
      whiteSpace: "nowrap",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    {children}
  </div>
);

const PartnersGrid = ({ children }) => (
  <div style={{ display: "inline-flex", gap: "30px", padding: "0 20px" }}>{children}</div>
);

const PartnerLogo = ({ src, alt, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      transition: "opacity 0.2s ease-in-out",
    }}
  >
    <img style={{ width: "150px", height: "100px", objectFit: "contain" }} src={src} alt={alt} />
  </button>
);

const PartnersSection = ({ partners, title = "Our Partners" }) => {
  const containerRef = useRef(null);

  const noPartners = !partners?.length;
  const hasScrollablePartners = partners?.length > 4;

  useEffect(() => {
    // Ensure the ref is available before trying to use it
    if (containerRef.current) {
      const container = containerRef.current;
      const checkScroll = () => {
        if (container) {
          const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
            if (hasHorizontalScroll) {
                container.classList.add('has-scroll');
            } else {
                container.classList.remove('has-scroll');
            }
        }
      };

      // Initial check
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
      };
    }
  }, [partners]);

  return (
    <CenteredWrapper>
      <div className="row-flex t-with-filter-top">
        <h1>{title}</h1>
        {!noPartners && hasScrollablePartners && (
          <ArrowButtons containerRef={containerRef} style={{ marginLeft: "auto" }} />
        )}
      </div>

      <PartnersContainer containerRef={containerRef}>
        <PartnersGrid>
          {partners?.map((partner, index) => (
            <PartnerLogo
              key={partner.id || index}
              onClick={() => {
                if (partner?.website) window.open(partner?.website, "_blank");
              }}
              src={partner?.logo?.url}
              alt={partner?.name}
            />
          ))}
        </PartnersGrid>
      </PartnersContainer>
    </CenteredWrapper>
  );
};

export default PartnersSection;
