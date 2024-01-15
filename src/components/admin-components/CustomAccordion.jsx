import React, { useState } from 'react';
import './sideNav.css';

export default function CustomAccordion ({title, component, key, isOpen, onClick}) {
  return (
    <div className="accordion" key={key}>
      <div className="accordion-header"  onClick={onClick}>
        {title}
      </div>
      {isOpen && (
        <div className="accordion-body">
          {component}
        </div>
      )}
    </div>
  );
}