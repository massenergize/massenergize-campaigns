import {useDebugValue, useReducer, useState} from 'react';
import {formatDebugValue} from "../helpers/utils/index";
import {randomString} from "../helpers/utils/string";


/**
 * This hook is used to create a form state.
 * @param initialData {object}
 * @param validate {(formData: {}) => boolean | Promise<object>}
 * @param onFormDataChange {(name: string, value: any, formData: {}, event: Event) => void}
 * @param validateOnChange {boolean}
 * @param debugLabel {string}
 * @returns {{handleChange: handleChange, setValues: (value: (((prevState: {}) => {}) | {})) => void, formData: {}, reset: reset, errors: {}, label}}
 */
const useForm = ({ initialData = {}, onFormDataChange, validator, debugLabel, validateOnChange = false }) => {
  const dataReducer = (state, action) => {
    const {
      type : ACTION_TYPE,
      payload
    } = action;
    switch (ACTION_TYPE) {
      case "UPDATE_DATA":
        return { ...state, ...payload };
      default:
        return state;
    }
  }

  const [ formData, dispatch ] = useReducer(dataReducer, initialData);
  const [ errors, setErrors ] = useState({});

  const reset = () => {
    setFormData(initialData);
  };

  const clearFormData = () => {
    setFormData({});
  }

  const clearErrors = () => {
    setErrors({});
  }

/*  const validate = async () => {
    try {
      return  await validator(formData);
    } catch (validationErrors) {
      return validationErrors;
    }
  }*/

  const setFormData = (payload) => {
    dispatch({ type : "UPDATE_DATA", payload });
  }

  /**
   * This function is used to handle form data change.
   * @param name {string | object}
   * @param {object} [value]
   * @param {Event} [event]
   */
  const handleChange = async (name, value, event) => {
    if (typeof name === "object") {
      setFormData(name)
    } else {
      setFormData({ [name] : value });
    }

    if (onFormDataChange && typeof onFormDataChange === 'function') {
      onFormDataChange(name, value, formData, event);
    }

    if (validateOnChange && typeof validator === 'function') {
      const validationErrors = await validator(formData);
      setErrors(validationErrors);
    }
  };

  useDebugValue({ label : debugLabel || "use-form", value: formData }, formatDebugValue);

  return {
    clearFormData,
    clearErrors,
    errors,
    formData,
    handleChange,
    reset,
    setErrors,
    setValues : setFormData
  };
};

export default useForm;
