import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faCar, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ListGroup } from "react-bootstrap";
import classes from "classnames";

const icons = [
  faCoffee,
  faCar,
  faAppleAlt,
  // add more icons as needed
];

const colors = ['red', 'yellow', 'white', 'yellow', 'purple', 'orange'];

function IconPicker ({error, onSelect}) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedColor, setSelectedColor] = useState('black');

  const handleIconClick = (icon, color) => {
    setSelectedIcon(icon);
    setSelectedColor(color);

    if (typeof onSelect === 'function') {
      onSelect(icon, color);
    }
  };

  return (
    <div>
      <ListGroup horizontal>
        {icons.map((icon, index) => (
          <ListGroup.Item
            className={classes({"border-danger" : error})}
            variant={selectedIcon === icon ? 'primary' : 'light'}
            key={index}
            onClick={() => handleIconClick(icon, colors[index])}
            active={icon === selectedIcon}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={icon} color={selectedIcon === icon ? "#fff" : '#6e207c'}/>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default IconPicker;
