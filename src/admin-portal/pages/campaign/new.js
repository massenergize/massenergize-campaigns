import { useState } from "react";

const {useReducer} = require("react");

const initialState = {
  isTemplate: false,
  title: "",
  slogan: "",
  startDate: "",
  endDate: "",
  description: "",
  logo: "",
  fullName: "",
  email: "",
  contact: "",
  profileImage: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return { ...state, [action.field]: action.value };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

export function NewCampaign() {
  const [showError, setShowError] = useState(false);

  const [campaignDetails, dispatch] = useReducer(reducer, initialState);

  const handleCampaignDetailsChange = (name, value) => {
    dispatch({ type: "SET_FIELD_VALUE", field: name, value });
  };

  const validateCampaignDetails = () => { // FIXME change this to a more appropriate name
    const { title, slogan, startDate, endDate, description, logo, fullName, email, contact, profileImage } = campaignDetails;

    if (!title || !slogan || !startDate || !endDate || !description || !logo || !fullName || !email || !contact || !profileImage) {
      setShowError(true);
      return false;
    }

    return true;
  }

  submitCampaign = () => {
    try {
      // TODO: validate campaign details

      // TODO: submit campaign details
    } catch (e) {
      throw Error("Error submitting campaign") //FIXME chnage this to a more appropriate error message or even a mor detailed error object
    }
  }

  return (
    <div>
      {/*region Header*/}
      {/*endregion*/}

      {/*region Body: Content goes here*/}
      {/*endregion*/}

      {/*region Footer*/}
      {/*endregion*/}
    </div>
  );
}
