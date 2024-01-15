import React, { useState } from 'react';
import './sideNav.css';

export default function CustomAccordion ({title, component, key, isOpen, onClick}) {
  return (
    <div className="accordion" key={key}>
      <div className="accordion-header elevate-float d-flex justify-content-between"  onClick={onClick}>
        <div className="accordion-title">{title}</div>
        <div className="accordion-icon">
          {isOpen ? (
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z" fill="#2D2D2D" />
            </svg>
          ) : (
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.59 0.589996L6 5.17L1.41 0.589996L0 2L6 8L12 2L10.59 0.589996Z" fill="#2D2D2D" />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="accordion-body">
          {component}
        </div>
      )}
    </div>
  );
}