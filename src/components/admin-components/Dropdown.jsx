import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import Checkbox from "./Checkbox";

const Dropdown = ({
                    displayTextToggle,
                    data,
                    valueExtractor,
                    labelExtractor,
                    onItemSelect,
                    multiple,
                    defaultValue,
                    label,
                  }) => {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(defaultValue && Array.isArray(defaultValue) ? defaultValue : []);
  const [labelShowing, setLabelShowing] = useState(displayTextToggle);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [nv, setNv] = useState([]);

  const handleSelect = (value) => {
    if (multiple) {
      if (selectedItems?.find((item) => item?.id === value?.id)) {
        const filtered = selectedItems?.filter((item) => item?.id !== value?.id);
        setSelectedItems((prev) => {
          typeof onItemSelect === "function" && onItemSelect(value, filtered);
          return[...filtered]
        });

        // return filtered;
      } else {
        setSelectedItems((prev) => {
          typeof onItemSelect === "function" && onItemSelect(value, [...prev, value]);
          return [...prev, value];
        });
        // return selectedItems;
      }
    } else {
      setSelectedItems((prev) => {
        typeof onItemSelect === "function" && onItemSelect(value, [...prev, value]);
        return [value]
      });
      setIsOpen(false);
    }
  };

  // useEffect(() => {
  // 	onItemSelect && onItemSelect(nv, selectedItems);
  // 	setSelectedItem(nselectedItem);

  // 	// setLabelShowing();
  // 	console.log(nselectedItem, selectedItems);
  // }, []);

  useEffect(() => {
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className="cusdropdown-container">
      <div className={`cusdropdown ${isOpen && "open"}`} onClick={handleToggleDropdown}>
        <div className="cusdropdown-toggle">
          {labelShowing}
          <span className={isOpen ? "arrow arrow-rotate" : "arrow "}>
						<svg
              stroke="#6e207c"
              fill="#6e207c"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
							<path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                clipRule="evenodd"
              ></path>
						</svg>
					</span>
        </div>
      </div>
      <div className={isOpen ? "cusdropdown-menu cusdropdown-menu-open" : "cusdropdown-menu cusdropdown-menu-close"}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: multiple && 20,
          padding: "0 1.125rem 2rem 1.125rem",
        }}>
          {data.map((datum, index) =>
            multiple ? (
              <div key={index}>
                <Checkbox
                  label={labelExtractor && labelExtractor(datum)}
                  id={`${datum?.id} ${index} ${
                    labelExtractor && labelExtractor(datum)
                  } `}
                  icon={datum?.icon}
                  value={valueExtractor && valueExtractor(datum)}
                  onItemSelect={(val) => {
                    handleSelect(val);
                    setNv(val);
                  }}
                />
              </div>
            ) : (
              <div key={index}>
                <p
                  onClick={() => {
                    handleSelect(valueExtractor && valueExtractor(datum));
                    setLabelShowing(labelExtractor && labelExtractor(datum));
                  }}
                  className="cusdropdown-item"
                >
                  {labelExtractor && labelExtractor(datum)}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
