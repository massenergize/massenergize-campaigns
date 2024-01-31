import { ValidationError } from "../lib/validation-error";

interface UserFormOptions {
    initialData : Record<string,any>;
    validator? : (formData : object) => boolean | ValidationError | Promise<any>;
    onFormDataChange? : (name : string, value : any, formData : object, event : React.ChangeEvent<HTMLInputElement>) => void;
    validateOnChange?: boolean;
    debugLabel? : string;
}

type UseFormReturnType = {

    clearErrors : () => void;
    clearFormData : () => void;
    errors : object;
    formData : any;
    /**
     * Use this function to update the form data.
     * @param name (key in the formData object) of the field to update
     * @param value value to set
     * @param event (optional) event object
     */
    handleChange : (name : string | Record<string,any>, value? : any, event? : React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Use this function to reset the form data to its initial state.
     */
    reset : () => void;
    /**
     * Use this function to set the form errors.
     * @param value {object} Object with the errors to set.
     */
    // setErrors : import("react").Dispatch<import("react").SetStateAction<{}>>;
    setErrors : (value : (((prevState : {}) => {}) | {})) => void,
    // setValues : (value : (((prevState : {}) => {}) | {})) => void,

}

declare function useForm (options : UserFormOptions) : UseFormReturnType;

export default useForm;
