import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCar, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

const icons = [
    faCoffee,
    faCar,
    faAppleAlt,
    // add more icons as needed
];

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

function IconPicker() {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [selectedColor, setSelectedColor] = useState('black');

    const handleIconClick = (icon, color) => {
        setSelectedIcon(icon);
        setSelectedColor(color);
    };

    return (
        <div>
            {icons.map((icon, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={icon}
                    onClick={() => handleIconClick(icon, colors[index % colors.length])}
                    style={{ cursor: 'pointer', color: selectedIcon === icon ? selectedColor : 'black' }}
                />
            ))}
            <p>Selected Icon: {selectedIcon && <FontAwesomeIcon icon={selectedIcon} color={selectedColor} />}</p>
        </div>
    );
}

export default IconPicker;