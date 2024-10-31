import { PROPERTY_TYPES } from "./PBPropertyTypes";

export const EXAMPLE_PROPERTIES = [
  {
    _type: PROPERTY_TYPES.INPUT,
    text: "Width",
    name: "width",
    placeholder: "Width",
    type: "number",
    label: "Width",
    value: 0,
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
