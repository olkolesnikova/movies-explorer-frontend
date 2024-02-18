import { useState } from "react";

export function useFormWithValidation(inputValues={}) {

const [values, setValues] = useState(inputValues);
const [errors, setErrors] = useState({});
const [isValid, setIsValid] = useState(false);

const handleChange = (event) => {

    const input = event.target;
    const value = input.value;
    const name = input.name;
    
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
    
}

return {values, setValues, handleChange, errors, isValid};

}