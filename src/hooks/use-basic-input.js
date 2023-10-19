import { useState } from "react";

const useBasicInput = (validate) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState('');
    const isValid = validate(value);
    const hasError = !isValid && isTouched;

    const inputValueHandler = (event) => {
        setValue(event.target.value);
    }

    const blurValueHandler = () => {
        setIsTouched(true);
    }

    const resetHandler = () => {
        setValue('')
    }

    return {
        value,
        isValid,
        hasError,
        inputValueHandler,
        blurValueHandler,
        resetHandler
    }
}

export default useBasicInput;