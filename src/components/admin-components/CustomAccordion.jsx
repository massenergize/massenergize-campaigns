import React, { useEffect, useState } from "react";
import "./sideNav.css";

export default function CustomAccordion({
  renderHeader,
  elevate = true,
  radius,
  title,
  children,
  component,
  key,
  isOpen,
  onClick,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const header = () => {
    if (renderHeader) return renderHeader({ opened: open, setOpen });
    return (
      <div
        className={`accordion-header ${elevate ? "elevate-float-pro" : ""} d-flex justify-content-between`}
        onClick={() => {
          if (onClick) return onClick();
          setOpen(!open);
        }}
        style={{ alignItems: "center", borderWidth: 0, borderRadius: radius || 0 }}
      >
        <div
          className="accordion-title"
          style={{ fontWeight: "bold", marginLeft: 10, color: "var(--admin-theme-color)" }}
        >
          {title}
        </div>
        <div className="accordion-icon">
          {open ? (
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z" fill="#2D2D2D" />
            </svg>
          ) : (
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z" fill="#2D2D2D" />
            </svg>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="accordion" key={key} style={{ borderRadius: radius || 0 }}>
      {header()}
      {open && (
        <div
          className="accordion-body"
          style={{ borderBottomRightRadius: radius || 0, borderBottomLeftRadius: radius || 0 }}
        >
          {component || children}
        </div>
      )}
    </div>
  );
}
