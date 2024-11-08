import { PROPERTY_TYPES } from "./PBPropertyTypes";

export const DEFAULT_PROPERTIES = [
  {
    _type: PROPERTY_TYPES.INPUT,
    text: "Text",
    name: "text",
    placeholder: "0",
    type: "text",
    label: "Text Content",
    value: "Enter text here...",
    cssKey: "marginTop",
  },
  {
    _type: PROPERTY_TYPES.INPUT_GROUP,
    text: "Dimensions",
    group: [
      { name: "width", placeholder: "0", type: "number", label: "Width", value: 32, cssKey: "width", unit: "px" },
      { name: "height", placeholder: "0", type: "number", label: "Height", value: 32, cssKey: "height", unit: "px" },
    ],
  },
  {
    _type: PROPERTY_TYPES.INPUT_GROUP,
    name: "padding",
    text: "Padding (%)",
    group: [
      { label: "Left", placeholder: "0", type: "number", name: "pl", cssKey: "paddingLeft" },
      { label: "Right", placeholder: "0", type: "number", name: "pr", cssKey: "paddingRight" },
      { label: "Top", placeholder: "0", type: "number", name: "pt", cssKey: "paddingTop" },
      { label: "Bottom", placeholder: "0", type: "number", name: "pb", padding: "paddingBottom" },
    ],
  },
  {
    _type: PROPERTY_TYPES.INPUT_GROUP,
    name: "margin",
    text: "Margin (%)",
    group: [
      { label: "Left", placeholder: "0", type: "number", name: "pl", cssKey: "marginLeft" },
      { label: "Right", placeholder: "0", type: "number", name: "pr", cssKey: "marginRight" },
      { label: "Top", placeholder: "0", type: "number", name: "pt", cssKey: "marginTop" },
      { label: "Bottom", placeholder: "0", type: "number", name: "pb", cssKey: "marginBottom" },
    ],
  },
  {
    _type: PROPERTY_TYPES.COLOR_PICKER,
    name: "background",
    text: "Background Color",
    cssKey: "background",
    value: "#dddddd",
  },
  {
    _type: PROPERTY_TYPES.DROPDOWN,
    name: "v-alignment",
    text: "Vertical Alignment",
    cssKey: "justifyContent",
    value: "flex-start",
    data: [
      { name: "Center", value: "center" },
      { name: "Top", value: "flex-start" },
      { name: "Bottom", value: "flex-end" },
    ],
  },
  {
    _type: PROPERTY_TYPES.DROPDOWN,
    name: "h-alignment",
    text: "Horizontal Alignment",
    cssKey: "alignItems",
    value: "flex-start",
    data: [
      { name: "Center", value: "center" },
      { name: "Left", value: "flex-start" },
      { name: "Right", value: "flex-end" },
    ],
  },
];
export const FAKE_PROPERTIES = [
  {
    _type: PROPERTY_TYPES.INPUT_GROUP,
    text: "Dimensions (px)",
    group: [
      { name: "width", placeholder: "0", type: "number", label: "Width", value: 32 },
      { name: "height", placeholder: "0", type: "number", label: "Height", value: 32 },
    ],
  },
  {
    _type: PROPERTY_TYPES.INPUT_GROUP,
    name: "padding",
    text: "Padding (%)",
    group: [
      { label: "Left", placeholder: "0", type: "number", name: "pl" },
      { label: "Right", placeholder: "0", type: "number", name: "pr" },
      { label: "Top", placeholder: "0", type: "number", name: "pt" },
      { label: "Bottom", placeholder: "0", type: "number", name: "pb" },
    ],
  },
  {
    _type: PROPERTY_TYPES.INPUT_GROUP,
    name: "margin",
    text: "Margin (%)",
    group: [
      { label: "Left", placeholder: "0", type: "number", name: "pl" },
      { label: "Right", placeholder: "0", type: "number", name: "pr" },
      { label: "Top", placeholder: "0", type: "number", name: "pt" },
      { label: "Bottom", placeholder: "0", type: "number", name: "pb" },
    ],
  },
  {
    _type: PROPERTY_TYPES.BACKGROUND_PICKER,
    name: "background",
    text: "Background",
  },
];
