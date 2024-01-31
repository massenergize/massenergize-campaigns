import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../../../components/admin-components/Input";
import React, { useReducer, useState } from "react";
import { useBubblyBalloons } from "../../../lib/bubbly-balloon/use-bubbly-balloons";
import { isEmpty, randomString } from "../../../helpers/utils/string";
import { getImageValue, objectIsEmpty } from "../../../helpers/utils";
import { addTechnologyIncentive, updateTechnologyIncentive } from "../../../requests/technology-requests";
import { ProgressButton } from "../../../components/progress-button/progress-button";
import { useParams } from "react-router-dom";
import FileUploader from "../../../components/admin-components/FileUploader";

export function IncentiveForm ({ incentive = {}, onSubmit, }) {
  const { notify } = useBubblyBalloons();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { campaign_id, technology_id } = useParams();

  const [incentiveFormData, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case "SET_FIELD_VALUE":
          return { ...state, [action.field]: action.value };
        default:
          throw new Error(`Unsupported action type: ${action.type}`);
      }
    },
    {
      title: "",
      description: "",
      image: null,
      ...incentive
    });

  const IS_NEW = objectIsEmpty(incentive);

  const handleFieldChange = (field, value) => {
    dispatch({ type: "SET_FIELD_VALUE", field, value });
  }

  const isDataValid = () => {
    setErrors({});
    let newErrors = {};

    for (let field of [incentiveFormData.title, incentiveFormData.description]) {
      if (isEmpty(field)) {
        newErrors[field] = "This field is required";
      }
    }

    // if (IS_NEW && !incentiveFormData.image) {
    //   newErrors.image = "This field is required";
    // }

    if (objectIsEmpty(newErrors)) {
      return true;
    }

    setErrors(newErrors);
    return false;
  }

  const handleSubmitIncentive = async () => {
    try {
      if (!isDataValid()) {
        return;
      }
      setLoading(true)

      console.log("incentiveFormData", incentiveFormData)

      const payload = {
        technology_id,
        ...(IS_NEW ? {} : { id: incentive.id }),
        ...(IS_NEW ? { campaign_id } : {}),
        title: incentiveFormData.title,
        description: incentiveFormData.description,
        ...(IS_NEW ? { image : incentiveFormData.image } : getImageValue(incentiveFormData, "image")),

      };

      console.log("payload", payload)

      const data = IS_NEW ? await addTechnologyIncentive(payload) : await updateTechnologyIncentive(payload);

      notify({
        title: "Success",
        message: `Incentive ${IS_NEW ? 'added' : 'updated'} successfully`,
        type: "success"
      });

      setLoading(false)
      typeof onSubmit === "function" && onSubmit(data);
    } catch (e) {
      setLoading(false)
      notify({
        title: "Error",
        message: `Something went wrong while ${IS_NEW ? 'adding' : 'updating'} incentive`,
        type: "error"
      })
    }
  }

  return (
    <form>
      <Row className="">
        <Col>
          <Input
            id="title"
            name="title"
            label="Title"
            placeholder="Enter a Title for this incentive ..."
            required={true}
            error={errors?.title}
            type="textbox"
            value={incentiveFormData?.title}
            onChange={(val) => {
              handleFieldChange("title", val);
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Input
            id="description"
            name="description"
            label="Description"
            placeholder="Add a more detailed description of the incentive..."
            required={false}
            type="richText"
            error={errors?.description}
            value={incentiveFormData?.description}
            onChange={(val) => {
              handleFieldChange("description", val);
            }}
          />
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          <FileUploader
            required={false}
            id={IS_NEW ? randomString({}) : incentiveFormData?.image?.url}
            text="Add an image"
            onChange={(val) => {
              handleFieldChange("image", val);
            }}
            error={errors?.image}
            value={incentiveFormData?.image}
            defaultValue={incentiveFormData?.image?.url}
          />
        </Col>
      </Row>
      {/*      <Row className="mt-3">
        <Col>
          <p>Icon <span className={"text-danger"}>*</span></p>
          <IconPicker error={errors?.icon} onSelect={() => {
          }}/>
        </Col>
      </Row>*/}

      <Row className=" justify-content-end">
        <Col sm={"auto"}>
          <ProgressButton
            loading={loading}
            disabled={loading}
            onClick={handleSubmitIncentive}
            rounded={false}>
            Save
          </ProgressButton>
        </Col>
      </Row>
    </form>
  )
}
