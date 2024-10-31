import { PROPERTY_TYPES } from "./PBPropertyTypes";

export const EXAMPLE_PROPERTIES = [
  {
    _type: PROPERTY_TYPES.INPUT,
    text: "Dimensions",
    group: [
      { name: "width", placeholder: "0", type: "number", label: "Width", value: 32 },
      { name: "height", placeholder: "0", type: "number", label: "Height", value: 32 },
    ],
  },
  {
    _type: PROPERTY_TYPES.INPUT_GROUP,
    name: "padding",
    text: "Padding",
    group: [
      { label: "Left", placeholder: "0", type: "number", name: "pl" },
      { label: "Right", placeholder: "0", type: "number", name: "pr" },
      { label: "Top", placeholder: "0", type: "number", name: "pt" },
      { label: "Bottom", placeholder: "0", type: "number", name: "pb" },
    ],
  },
];
